import { Stack } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'tamagui';

const friends = () => {
  const theme = useTheme({ name: 'dark' });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background.get() }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View>
        <Text>friends</Text>
      </View>
    </SafeAreaView>
  );
};

export default friends;
