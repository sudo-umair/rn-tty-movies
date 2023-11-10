import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { SearchScreenProps } from '@/interfaces/screens';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/colors';
import SearchBar from '@/components/search-screen/search-bar';
import useDebounceValue from '@/hooks/useDebounce';
import useLoading from '@/hooks/useLoading';
import { searchMulti } from '@/api/get';
import { ISearchItem } from '@/interfaces/common';
import SearchItem from '@/components/search-screen/search-item';
import { FontFamily, FontSize } from '@/constants/fonts';
import { getData, storeData } from '@/helpers/async-storage';
import { useNetInfo } from '@react-native-community/netinfo';
import { showWarningFlash } from '@/helpers/flash-message';

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation, route }) => {
  const [searchText, setSearchText] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ISearchItem[]>([]);
  const [page, setPage] = useState<number>(1);

  const debouncedVal = useDebounceValue(searchText, 500);
  const [loading, setLoading] = useLoading();
  const { isInternetReachable } = useNetInfo();

  const getSearchResultsOnline = async () => {
    try {
      setLoading(true);
      const response = await searchMulti(debouncedVal, page);
      const results = response.data.results;
      if (results.length > 0) {
        setSearchResults((prev) => (page === 1 ? results : [...prev, ...results]));
        await storeData(debouncedVal, searchResults);
      } else {
        showWarningFlash('No results found');
      }
    } catch (e) {
      console.warn(e);
      showWarningFlash('An error occurred while loading results');
    } finally {
      setLoading(false);
    }
  };

  const getSearchResultsOffline = async () => {
    try {
      setLoading(true);
      const results = await getData<ISearchItem[]>(debouncedVal);
      if (results !== null && results.length > 0) {
        console.log(results);
        setSearchResults(results.slice(0, page * 20));
      } else {
        showWarningFlash('No results in cache');
      }
    } catch (e) {
      console.warn(e);
      showWarningFlash('An error occurred while loading results');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async function () {
      if (debouncedVal.length > 0) {
        if (isInternetReachable !== null) {
          if (isInternetReachable) {
            await getSearchResultsOnline();
          } else {
            await getSearchResultsOffline();
          }
        }
      }
    })();
  }, [debouncedVal, page]);

  const handleOnChange = (text: string) => {
    setSearchText(text);
    setPage(1);
    if (text.length === 0) {
      setSearchResults([]);
    }
  };

  const check = useMemo(() => debouncedVal.length > 0 && searchResults.length > 0, [debouncedVal]);

  return (
    <SafeAreaView style={styles.root}>
      <SearchBar onChange={handleOnChange} value={searchText} />
      {check ? (
        <Fragment>
          <Text style={styles.resultsText}>Top Results</Text>
          <View style={styles.divider} />
          <FlatList
            data={searchResults}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <SearchItem item={item} />}
            style={{ flex: 1 }}
            contentContainerStyle={{ rowGap: 10 }}
            refreshControl={<RefreshControl refreshing={loading} onRefresh={() => setPage(1)} />}
            onEndReachedThreshold={2}
            onEndReached={() => setPage((prevPage) => prevPage + 1)}
            extraData={searchResults}
          />
        </Fragment>
      ) : null}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  resultsText: {
    fontSize: FontSize.H6,
    color: Colors.dark,
    fontFamily: FontFamily.BOLD,
    textAlignVertical: 'center',
    marginHorizontal: 10,
    marginTop: 20,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.lightGray,
    marginVertical: 5,
    marginHorizontal: 10,
  },
});
