import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { WatchScreenProps } from '@/interfaces/screens';
import { Feather } from '@expo/vector-icons';
import { StackScreens } from '@/constants/screens';
import { Colors } from '@/constants/colors';

const WatchScreen: React.FC<WatchScreenProps> = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Feather onPress={() => {}} name='search' size={24} color='black' />,
    });
  }, [navigation]);

  return (
    <View style={styles.root}>
      <Text>WatchScreen</Text>
    </View>
  );
};

export default WatchScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
