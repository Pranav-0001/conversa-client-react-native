import React from 'react';
import { Platform } from 'react-native';
import { ScrollView, View, XStack, YStack, useTheme } from 'tamagui';
import useGetChatsQuery from '~/app/(services)/api/useGetChatsQuery';
import TabsHeader from '../tabs/TabsHeader';
import ChatListItem from './ChatListItem';
import ChatSearch from './ChatSearch';

const ChatList = () => {
  const theme = useTheme();
  const getChats = useGetChatsQuery({});
  console.log({ getChats: getChats?.data });
  return (
    <View paddingHorizontal="$3" maxHeight={Platform.OS === 'ios' ? '105%' : '100%'}>
      <TabsHeader />
      <XStack paddingVertical="$2">
        <ChatSearch />
      </XStack>
      <ScrollView scrollEnabled>
        <YStack>
          {getChats?.data?.map((chat: any, i: number) => (
            <ChatListItem index={i} chat={chat} /> // Ensure you add a unique key prop
          ))}
        </YStack>
      </ScrollView>
    </View>
  );
};

export default ChatList;
