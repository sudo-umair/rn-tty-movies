import { TextStyle, ViewStyle } from 'react-native';
import { IMovie, ISearchItem } from './common';
import React from 'react';

export interface IMovieItemProps {
  movie: IMovie;
}

export interface ISearchBarProps {
  value: string;
  onChange: (value: string) => void;
  setSearchCompleted: () => void;
}

export interface ISearchItemProps {
  item: ISearchItem;
}

export interface IHeaderProps {
  text: string;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  iconStyle?: TextStyle | TextStyle[];
  onPressBack?: () => void;
}

export interface IButtonProps {
  onPress: () => void;
  label: string;
  mode?: 'filled' | 'outline';
  filledStyle?: ViewStyle | ViewStyle[];
  outlineStyle?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  icon?: React.ReactNode;
}

export interface PillProps {
  title: string;
  style?: TextStyle;
  onPress?: () => void;
}

export interface PillContainerProps {
  section: string;
  data: string[];
}
