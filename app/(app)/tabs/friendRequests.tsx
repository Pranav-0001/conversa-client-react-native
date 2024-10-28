import { Stack } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'tamagui';

const friendRequests = () => {
  const theme = useTheme({ name: 'dark' });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background.get() }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View>
        <Text>friendRequests</Text>
      </View>
    </SafeAreaView>
  );
};

export default friendRequests;
