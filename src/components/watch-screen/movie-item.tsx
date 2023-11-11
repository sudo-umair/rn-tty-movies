import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import React from 'react';
import { IMovieItemProps } from '@/interfaces/components';
import { FontFamily, FontSize } from '@/constants/fonts';
import { Colors } from '@/constants/colors';
import { blurhash } from '@/constants/data';
import { constructImageUrl } from '@/utils/common';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParamsList } from '@/interfaces/navigation';
import { StackScreens } from '@/constants/screens';
import { useNavigation } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<StackParamsList, StackScreens.Home>;

const MovieItem: React.FC<IMovieItemProps> = ({ movie }) => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate(StackScreens.Details, { item: movie });
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.6} style={styles.container}>
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
    height: 160,
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  title: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontFamily: FontFamily.REGULAR,
    color: Colors.background,
    fontSize: FontSize.H3,
    marginRight: 20,
  },
});
