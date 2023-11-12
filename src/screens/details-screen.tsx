import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { DetailsScreenProps } from '@/interfaces/screens';
import { constructImageUrl, findGenres } from '@/utils/common';
import { Colors } from '@/constants/colors';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/ui/header';
import Button from '@/components/ui/button';
import { FontFamily, FontSize } from '@/constants/fonts';
import dayjs from 'dayjs';
import { Image } from 'expo-image';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import PillContainer from '@/components/ui/pill-container';
import { blurhash } from '@/constants/data';
import { useMemo } from 'react';
import { TContentType } from '@/interfaces/common';

const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation, route }) => {
  const { item } = route.params;

  const date = dayjs(item.release_date).format('MMMM DD, YYYY');

  const genres = useMemo(() => findGenres(item.genre_ids), [item.genre_ids]);

  const handleNavigate = () => {};

  return (
    <View style={styles.root}>
      <Header style={styles.header} iconStyle={styles.headerText} textStyle={styles.headerText} text={'Watch'} />
      <ScrollView style={styles.root}>
        <View>
          <Image
            source={{
              uri: constructImageUrl(item.poster_path),
            }}
            cachePolicy={'disk'}
            placeholder={blurhash}
            contentFit='cover'
            transition={1000}
            style={styles.imageContainer}
          />
          <LinearGradient
            style={[styles.imageContainer, styles.absolute]}
            colors={['transparent', 'rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.8)']}
          >
            <View style={styles.container}>
              <Text style={styles.label}>In Theatres {date ?? ''}</Text>
              <Button onPress={() => {}} label='Get Tickets' mode='filled' />
              <Button
                label='Watch Trailer'
                mode='outline'
                icon={<Entypo name='controller-play' size={24} color={Colors.white} />}
                onPress={handleNavigate}
              />
            </View>
          </LinearGradient>
        </View>
        <View style={styles.detailsContainer}>
          <PillContainer data={genres} section='Genres' />
          <Text style={styles.heading}>OverView</Text>
          <Text style={styles.text}>{item.overview ?? 'N/A'}</Text>
        </View>
        <StatusBar style='light' backgroundColor='transparent' />
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    position: 'absolute',
    top: '2%',
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  headerText: {
    color: Colors.white,
  },
  imageContainer: {
    height: 450,
    width: '100%',
    flexDirection: 'row',
  },
  absolute: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    alignSelf: 'flex-end',
    width: '100%',
    padding: 20,
  },
  label: {
    color: Colors.white,
    fontSize: FontSize.H3,
    textAlign: 'center',
    fontFamily: FontFamily.REGULAR,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsContainer: {
    padding: 20,
  },
  heading: {
    marginTop: 25,
    fontSize: FontSize.H5,
    fontFamily: FontFamily.BOLD,
  },
  text: {
    color: Colors.darkGray,
    fontSize: FontSize.H5,
  },
});
