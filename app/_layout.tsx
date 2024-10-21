import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider } from '@tanstack/react-query';

import config from '../tamagui.config';
import queryClient from './(services)/queryClient';

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

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <Stack />
        </QueryClientProvider>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}
