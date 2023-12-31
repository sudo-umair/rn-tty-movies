import { StyleSheet, Text, Platform } from 'react-native';
import React from 'react';
import { PillProps } from '@/interfaces/components';
import { isColorDark } from '@/utils/common';
import { Colors } from '@/constants/colors';
import { FontFamily, FontSize } from '@/constants/fonts';

const Pill = ({ title, onPress, style }: PillProps) => {
  return (
    <Text
      onPress={onPress}
      style={[
        styles.pill,
        style,
        {
          backgroundColor: style?.backgroundColor ?? Colors.black,
          color: isColorDark(style?.backgroundColor ?? Colors.black) ? Colors.white : Colors.black,
        },
      ]}
    >
      {title ?? 'Pill'}
    </Text>
  );
};

export default Pill;

const styles = StyleSheet.create({
  pill: {
    backgroundColor: Colors.dark,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: Platform.select({ ios: 15, android: 20 }),
    minHeight: 10,
    minWidth: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: FontSize.H6,
    fontWeight: 'bold',
    fontFamily: FontFamily.REGULAR,
    overflow: 'hidden',
  },
});
