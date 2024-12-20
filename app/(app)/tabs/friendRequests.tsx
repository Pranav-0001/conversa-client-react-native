import { Stack } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'tamagui';
import  FriendRequestList  from '~/components/friendRequest/FriendRequestList';
// import FriendRequestList from '~/components/friendRequest/FriendRequestList';

const friendRequests = () => {
  const theme = useTheme({ name: 'dark' });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background.get() }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, }}> 
        <FriendRequestList />
      </View>
    </SafeAreaView>
  );
};

export default friendRequests;
