import { QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { TamaguiProvider } from 'tamagui';
import config from '../tamagui.config';
import { store } from './(redux)/store';
import queryClient from './(services)/queryClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadToken } from './(redux)/authSlice';

export default function Layout() {
  const [loaded, error] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    Lobster: require('../assets/fonts/Lobster-Regular.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const currentUser = await AsyncStorage.getItem('currentUser');
        if (currentUser) {
          store.dispatch(loadToken(currentUser));
        }
      } catch (error) {
        console.error('Failed to load token from AsyncStorage:', error);
      }
    };

    initializeAuth();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <TamaguiProvider config={config}>
        <SafeAreaProvider>
          <QueryClientProvider client={queryClient}>
            <Stack />
          </QueryClientProvider>
        </SafeAreaProvider>
      </TamaguiProvider>
    </Provider>
  );
}
