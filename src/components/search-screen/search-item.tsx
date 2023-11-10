import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useMemo } from 'react';
import { ISearchItemProps } from '@/interfaces/components';
import { Image } from 'expo-image';
import { blurhash } from '@/constants/data';
import { constructImageUrl, findGenres } from '@/utils/common';
import { FontFamily } from '@/constants/fonts';
import { Colors } from '@/constants/colors';
import { SimpleLineIcons } from '@expo/vector-icons';

const SearchItem: React.FC<ISearchItemProps> = ({ item }) => {
  const genres = useMemo(() => findGenres(item.genre_ids, item.media_type), [item.genre_ids, item.media_type]);

  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Image
        style={styles.image}
        cachePolicy={'disk'}
        placeholder={blurhash}
        contentFit='cover'
        transition={1000}
        source={{ uri: constructImageUrl(item.poster_path) }}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.name ?? item.title ?? 'Not Provided'}</Text>
        {genres.length > 0 && <Text style={styles.genre}>{genres}</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <SimpleLineIcons name='options' size={24} color={Colors.blue} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    height: 120,
  },
  image: {
    width: '40%',
    height: '100%',
    borderRadius: 12,
  },
  detailsContainer: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'flex-start',
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: FontFamily.REGULAR,
    color: Colors.dark,
    fontSize: 16,
    textAlignVertical: 'center',
  },
  genre: {
    fontFamily: FontFamily.REGULAR,
    color: Colors.lightGray,
    fontSize: 12,
    textAlignVertical: 'center',
  },
  buttonContainer: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
