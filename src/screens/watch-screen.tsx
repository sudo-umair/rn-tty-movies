import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { WatchScreenProps } from '@/interfaces/screens';
import { Feather } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';
import { fetchMovies } from '@/api/get';
import useLoading from '@/hooks/useLoading';
import { IMovie } from '@/interfaces/common';
import MovieItem from '@/components/watch-screen/movie-item';
import { getData, storeData } from '@/helpers/async-storage';
import { AsyncStorageKeys } from '@/constants/async-storage';
import { useNetInfo } from '@react-native-community/netinfo';
import { showSuccessFlash, showWarningFlash } from '@/helpers/flash-message';

const WatchScreen: React.FC<WatchScreenProps> = ({ navigation, route }) => {
  const [moviesList, setMoviesList] = useState<IMovie[]>([]);
  const [loading, setLoading] = useLoading();
  const [page, setPage] = useState<number>(1);

  const { isInternetReachable } = useNetInfo();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Feather onPress={() => {}} name='search' size={24} color={Colors.dark} />,
    });
  }, [navigation]);

  const fetchMoviesOnline = async () => {
    try {
      setLoading(true);
      const response = await fetchMovies(page);
      const results = response.data.results;
      if (results.length > 0) {
        setMoviesList((prev) => prev.concat(results));
        showSuccessFlash('Movies loaded');
        await storeData(AsyncStorageKeys.MOVIES, moviesList);
      }
    } catch (error) {
      console.warn(error);
      showWarningFlash('An error occurred while loading movies');
    } finally {
      setLoading(false);
    }
  };

  const fetchMoviesOffline = async () => {
    try {
      setLoading(true);
      const moviesList = await getData<IMovie[]>(AsyncStorageKeys.MOVIES);
      if (moviesList !== null && moviesList.length > 0) {
        setMoviesList(moviesList.slice(0, page * 20));
        showSuccessFlash('Movies loaded from cache');
      } else {
        showWarningFlash('No movies in cache');
      }
    } catch (error) {
      console.warn(error);
      showWarningFlash('An error occurred while loading movies from cache');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async function () {
      if (isInternetReachable !== null) {
        if (isInternetReachable) {
          await fetchMoviesOnline();
        } else {
          await fetchMoviesOffline();
        }
      }
    })();
  }, [isInternetReachable, page]);

  return (
    <View style={styles.root}>
      <FlatList
        data={moviesList}
        renderItem={({ item }) => <MovieItem movie={item} />}
        keyExtractor={(item, index) => index.toString()}
        style={{ flex: 1 }}
        contentContainerStyle={{ rowGap: 10 }}
        onEndReachedThreshold={0.1}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={() => setPage(1)} />}
        onEndReached={() => setPage((prevPage) => prevPage + 1)}
      />
    </View>
  );
};

export default WatchScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
});
