import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { FontFamily, FontSize } from '@/constants/fonts';
import { Entypo, EvilIcons } from '@expo/vector-icons';
import { ISearchBarProps } from '@/interfaces/components';
import { Colors } from '@/constants/colors';

const SearchBar: React.FC<ISearchBarProps> = ({ onChange, value, setSearchCompleted }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.content2}>
          <EvilIcons name='search' size={30} color='black' />
          <TextInput
            value={value}
            onChangeText={onChange}
            style={styles.input}
            placeholder='TV Shows, Movies and More'
            placeholderTextColor={Colors.dark}
            onSubmitEditing={setSearchCompleted}
          />
        </View>
        <Entypo name='cross' onPress={() => onChange('')} size={30} color='black' />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: Colors.white,
    elevation: 2,
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 25,
  },
  content2: {
    flexDirection: 'row',
    width: '90%',
    columnGap: 10,
  },
  input: {
    flex: 1,
    fontSize: FontSize.H5,
    fontFamily: FontFamily.REGULAR,
    color: Colors.dark,
    textAlignVertical: 'center',
  },
});
