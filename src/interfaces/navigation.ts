import { StackScreens, TabsScreens } from '@/constants/screens';
import { NavigatorScreenParams } from '@react-navigation/native';

export type BottomTabsParamList = {
  [TabsScreens.DashBoard]: { screenName: string };
  [TabsScreens.MediaLibrary]: { screenName: string };
  [TabsScreens.More]: { screenName: string };
  [TabsScreens.Watch]: NavigatorScreenParams<StackParamsList>;
};

export type StackParamsList = {
  [StackScreens.Home]: undefined;
  [StackScreens.Search]: undefined;
};
