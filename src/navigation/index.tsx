import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './bottom-tabs';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
