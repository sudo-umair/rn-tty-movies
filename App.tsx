import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { FontFamily } from '@/constants/fonts';
import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from '@/navigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    [FontFamily.BOLD]: require('@/assets/fonts/Poppins-Bold.ttf'),
    [FontFamily.ITALIC]: require('@/assets/fonts/Poppins-Italic.ttf'),
    [FontFamily.LIGHT]: require('@/assets/fonts/Poppins-Light.ttf'),
    [FontFamily.REGULAR]: require('@/assets/fonts/Poppins-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
