import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParamsList } from '@/interfaces/navigation';
import { StackScreens } from '@/constants/screens';
import { FontFamily } from '@/constants/fonts';
import { Colors } from '@/constants/colors';
import WatchScreen from '@/screens/watch-screen';
import SearchScreen from '@/screens/search-screen';

const Stack = createNativeStackNavigator<StackParamsList>();

const WatchScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Watch',
          headerTitleStyle: {
            fontFamily: FontFamily.BOLD,
            color: Colors.dark,
          },
        }}
        name={StackScreens.Home}
        component={WatchScreen}
      />
      <Stack.Screen name={StackScreens.Search} component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default WatchScreenNavigator;
