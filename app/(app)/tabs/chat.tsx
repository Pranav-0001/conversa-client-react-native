import { View, Text } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { useTheme } from 'tamagui';
import ChatList from '~/components/chat/ChatList';
import { SafeAreaView } from 'react-native-safe-area-context';

const chat = () => {
  const theme = useTheme({ name: 'dark' });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background.get() }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{paddingBottom:260}}>
        <ChatList />
      </View>
    </SafeAreaView>
  );
};

export default chat;
