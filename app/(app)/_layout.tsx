import { Redirect, Slot, Stack } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { useTheme } from 'tamagui';
import { useState, useEffect } from 'react';

export default function AppLayout() {
  const [authChecked, setAuthChecked] = useState(false); // Track if authentication has been checked
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
  const theme = useTheme({ name: 'dark' });

  // Set authChecked to true when authentication state is known
  useEffect(() => {
    if (isAuthenticated !== undefined) {
      setAuthChecked(true);
    }
  }, [isAuthenticated]);

  if (!authChecked) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.background.get(),
        }}>
        <Stack.Screen options={{ headerShown: false }} />
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!isAuthenticated) {
    return <Redirect href="/auth/login" />;
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Slot />
    </>
  );
}
