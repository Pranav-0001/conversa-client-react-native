import { View, Text, XStack, useTheme, Button, Image, YStack, ScrollView } from 'tamagui';
import React from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Alert, Platform } from 'react-native';
import ChatSearch from './ChatSearch';
import ChatListItem from './ChatListItem';
import TabsHeader from '../tabs/TabsHeader';
import useGetChatsQuery from '~/app/(services)/api/useGetChatsQuery';

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
            <ChatListItem index={i} /> // Ensure you add a unique key prop
          ))}
        </YStack>
      </ScrollView>
    </View>
  );
};

export default ChatList;
