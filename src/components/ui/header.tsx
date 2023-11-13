import { IHeaderProps } from '@/interfaces/components';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';
import { FontFamily, FontSize } from '@/constants/fonts';
import { useNavigation } from '@react-navigation/native';

const Header: React.FC<IHeaderProps> = ({ text, style, textStyle, iconStyle, onPressBack }) => {
  const navigation = useNavigation<any>();

  const handleOnPress = () => {
    if (onPressBack) {
      onPressBack();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={handleOnPress}>
        <Ionicons name='chevron-back' style={iconStyle} size={30} color={Colors.dark} />
      </TouchableOpacity>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginTop: Platform.select({ ios: 20, android: 10 }),
  },
  text: {
    color: Colors.dark,
    fontFamily: FontFamily.BOLD,
    textAlignVertical: 'center',
    fontSize: FontSize.H4,
    textAlign: 'left',
    marginLeft: 10,
  },
});
