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
import { StackScreens } from '@/constants/screens';

const WatchScreen: React.FC<WatchScreenProps> = ({ navigation, route }) => {
  const [moviesList, setMoviesList] = useState<IMovie[]>([]);
  const [loading, setLoading] = useLoading();
  const [page, setPage] = useState<number>(1);

  const { isInternetReachable } = useNetInfo();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Feather onPress={() => navigation.navigate(StackScreens.Search)} name='search' size={24} color={Colors.dark} />
      ),
    });
  }, [navigation]);

  const fetchMoviesOnline = async () => {
    try {
      setLoading(true);
      const response = await fetchMovies(page);
      const results = response.data.results;
      if (results.length > 0) {
        setMoviesList((prev) => (page === 1 ? results : [...prev, ...results]));
        showSuccessFlash('Movies loaded');
        await storeData(AsyncStorageKeys.MOVIES, results);
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
      const results = await getData<IMovie[]>(AsyncStorageKeys.MOVIES);
      console.log(results);
      if (results !== null && results.length > 0) {
        setMoviesList(results.slice(0, page * 20));
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
        refreshControl={<RefreshControl refreshing={loading} onRefresh={() => setPage(1)} />}
        onEndReachedThreshold={1}
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
