import { Stack } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'tamagui';
import FriendsList from '~/components/friends/FriendsList';

const friends = () => {
  const theme = useTheme({ name: 'dark' });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background.get() }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, }}> 
        <FriendsList />
      </View>
    </SafeAreaView>
  );
};

export default friends;
