import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WatchScreenProps } from '@/interfaces/screens';

const WatchScreen: React.FC<WatchScreenProps> = ({ navigation, route }) => {
  return (
    <View>
      <Text>WatchScreen</Text>
    </View>
  );
};

export default WatchScreen;

const styles = StyleSheet.create({});
