import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { BottomTabsParamList, StackParamsList } from './navigation';
import { StackScreens } from '@/constants/screens';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type WatchScreenProps = CompositeScreenProps<
  NativeStackScreenProps<StackParamsList, StackScreens.Home>,
  BottomTabScreenProps<BottomTabsParamList>
>;

export type SearchScreenProps = CompositeScreenProps<
  NativeStackScreenProps<StackParamsList, StackScreens.Search>,
  BottomTabScreenProps<BottomTabsParamList>
>;
