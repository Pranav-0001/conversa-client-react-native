import { Text, BackHandler } from 'react-native';
import React, { useEffect } from 'react';
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { View, XStack, useTheme } from 'tamagui';
import ChatList from '~/components/chat/ChatList';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatPage from '~/components/chat/chatWindow/chatPage';

const chat = () => {
  const theme = useTheme({ name: 'dark' });
  const { chat } = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (chat) {
        router.replace('/tabs/chat');
        return true;
      }
      return false;
    });

    return () => backHandler.remove();
  }, [chat]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background.get() }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View flex={1}>
        <XStack flex={1} $gtMd={{ display: 'flex' }} display="none">
          <View flex={0.25}>
            <ChatList />
          </View>
          <View flex={0.75}>{chat && <ChatPage chat={chat} />}</View>
        </XStack>
        <XStack flex={1} $gtMd={{ display: 'none' }} display="flex">
          {!chat ? (
            <View flex={1}>
              <ChatList />
            </View>
          ) : (
            <View flex={1}>
              <ChatPage chat={chat} />
            </View>
          )}
        </XStack>
      </View>
    </SafeAreaView>
  );
};

export default chat;
