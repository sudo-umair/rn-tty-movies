import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ISearchScreenHeaderProps } from '@/interfaces/components';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';
import { FontFamily, FontSize } from '@/constants/fonts';

const SearchScreenHeader: React.FC<ISearchScreenHeaderProps> = ({ count, setSearchCompleted }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={setSearchCompleted}>
        <Ionicons name='chevron-back' size={30} color={Colors.dark} />
      </TouchableOpacity>
      <Text style={styles.count}>
        {count} {count === 1 ? 'result' : 'results'} found
      </Text>
    </View>
  );
};

export default SearchScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  count: {
    color: Colors.dark,
    fontFamily: FontFamily.REGULAR,
    textAlignVertical: 'center',
    fontSize: FontSize.H4,
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 5,
  },
});
