import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import React, { useMemo } from 'react';
import { IMovieItemProps } from '@/interfaces/components';
import { API } from '@/constants/api';
import { FontFamily } from '@/constants/fonts';
import { Colors } from '@/constants/colors';
import { blurhash } from '@/constants/data';
import { constructImageUrl } from '@/utils/common';

const MovieItem: React.FC<IMovieItemProps> = ({ movie }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Image
        style={styles.image}
        cachePolicy={'disk'}
        placeholder={blurhash}
        contentFit='cover'
        transition={1000}
        source={{ uri: constructImageUrl(movie.backdrop_path) }}
      />
      <Text style={styles.title}>{movie.title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(MovieItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    height: 200,
    width: '100%',
  },
  title: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontFamily: FontFamily.REGULAR,
    color: Colors.background,
    fontSize: 20,
    marginRight: 20,
  },
});
