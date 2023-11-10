import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import React, { useMemo } from 'react';
import { IMovieItemProps } from '@/interfaces/components';
import { API } from '@/constants/api';
import { FontFamily } from '@/constants/fonts';
import { Colors } from '@/constants/colors';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const MovieItem: React.FC<IMovieItemProps> = ({ movie }) => {
  const backDrop = useMemo(() => {
    return `${API.IMAGE_URL}${movie.backdrop_path}?api_key=${API.API_KEY}`;
  }, [movie.backdrop_path]);

  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
      <Image
        style={styles.image}
        cachePolicy={'disk'}
        placeholder={blurhash}
        contentFit='cover'
        transition={1000}
        source={{ uri: backDrop }}
      />
      <Text style={styles.title}>{movie.title}</Text>
    </TouchableOpacity>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    borderWidth: 1,
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
