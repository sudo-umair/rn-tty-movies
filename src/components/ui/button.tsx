import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { IButtonProps } from '@/interfaces/components';
import { FontFamily, FontSize } from '@/constants/fonts';
import { Colors } from '@/constants/colors';

const Button: React.FC<IButtonProps> = ({
  filledStyle,
  icon,
  label,
  mode = 'filled',
  onPress,
  outlineStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.container, mode === 'filled' ? [styles.filled, filledStyle] : [styles.outline, outlineStyle]]}
    >
      {icon ?? null}
      <Text style={[styles.text, textStyle, icon ? { marginLeft: 10 } : null]}>{label ?? 'Button'}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    minWidth: 30,
    minHeight: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 4,
    padding: 10,
  },
  filled: {
    backgroundColor: Colors.blue,
  },
  outline: {
    borderColor: Colors.blue,
    borderWidth: 2,
  },
  text: {
    fontSize: FontSize.H5,
    color: Colors.white,
    fontFamily: FontFamily.BOLD,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
