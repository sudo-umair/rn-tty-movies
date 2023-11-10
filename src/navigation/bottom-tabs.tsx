import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabsParamList } from '@/interfaces/navigation';
import { TabsScreens } from '@/constants/screens';
import ComingSoon from '@/screens/coming-soon';
import { Colors } from '@/constants/colors';
import { Entypo, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import WatchScreenNavigator from './stack';
import { FontFamily } from '@/constants/fonts';

const Tabs = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabsNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: Colors.darkGray,
        tabBarActiveTintColor: Colors.background,
        tabBarStyle: {
          paddingHorizontal: '5%',
          paddingVertical: '2%',
          height: '8%',
          backgroundColor: Colors.dark,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarLabelStyle: {
          marginBottom: '8%',
          fontFamily: FontFamily.BOLD,
        },
      }}
    >
      <Tabs.Screen
        name={TabsScreens.DashBoard}
        initialParams={{ screenName: 'DashBoard' }}
        options={{
          tabBarIcon: ({ color, size }) => <Entypo name='grid' size={size} color={color} />,
        }}
        component={ComingSoon}
      />
      <Tabs.Screen
        name={TabsScreens.Watch}
        options={{
          tabBarIcon: ({ color, size }) => <FontAwesome name='youtube-play' size={size} color={color} />,
        }}
        component={WatchScreenNavigator}
      />
      <Tabs.Screen
        name={TabsScreens.MediaLibrary}
        initialParams={{ screenName: 'Media Library' }}
        options={{
          title: 'Media Library',
          tabBarIcon: ({ color, size }) => <Ionicons name='folder' size={size} color={color} />,
        }}
        component={ComingSoon}
      />
      <Tabs.Screen
        name={TabsScreens.More}
        initialParams={{ screenName: 'More' }}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name='list' size={size} color={color} />,
        }}
        component={ComingSoon}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabsNavigator;
