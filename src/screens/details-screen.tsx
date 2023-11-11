import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DetailsScreenProps } from '@/interfaces/screens';
import { constructImageUrl, findGenres } from '@/utils/common';
import { Colors } from '@/constants/colors';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/ui/header';
import Button from '@/components/ui/button';
import { FontFamily, FontSize } from '@/constants/fonts';
import dayjs from 'dayjs';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import PillContainer from '@/components/ui/pill-container';

var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation, route }) => {
  const { item } = route.params;

  const date = dayjs(item.first_air_date).format('MMMM DD, YYYY');

  const handleNavigate = () => {};

  return (
    <View style={styles.root}>
      <Header style={styles.header} iconStyle={styles.headerText} textStyle={styles.headerText} text={'Watch'} />
      <ScrollView style={styles.root}>
        <ImageBackground
          source={{
            uri: constructImageUrl(item.poster_path),
          }}
          resizeMode='cover'
          style={styles.imageContainer}
        >
          <LinearGradient
            style={{ ...styles.imageContainer, height: '100%', width: '100%' }}
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
        </ImageBackground>
        <View style={styles.detailsContainer}>
          <PillContainer data={findGenres(item.genre_ids, item.media_type)} section='Genres' />
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
