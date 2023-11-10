import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/colors';
import { FontFamily } from '@/constants/fonts';

const ComingSoon: React.FC<any> = ({ navigation, route }) => {
  const { screenName } = route.params;
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>{screenName}</Text>
      <Text style={styles.subTitle}>Coming Soon</Text>
    </SafeAreaView>
  );
};

export default ComingSoon;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontFamily: FontFamily.BOLD,
    fontSize: 20,
    textAlign: 'center',
    color: Colors.dark,
  },
  subTitle: {
    fontFamily: FontFamily.REGULAR,
    fontSize: 16,
    textAlign: 'center',
    color: Colors.dark,
  },
});
