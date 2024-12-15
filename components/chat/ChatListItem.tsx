import { View, Text } from 'react-native';
import React from 'react';
import { Image, useTheme, XStack } from 'tamagui';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { useSelector } from 'react-redux';
import LastMessageInChatListItem from './LastMessageInChatListItem';

const ChatListItem = ({ index, chat }: any) => {
  const theme = useTheme({ name: 'dark' });
  const { user } = useSelector((state: any) => state.auth);

  const chatUser = chat?.participants?.find(
    (participant: any) => participant?.user?._id !== user?._id
  )?.user;
  const onlineUsers = useSelector((state: any) => state.onlineUsers.onlineUsers);
  console.log({ onlineUsers }, 'CHATLIST');
  return (
    <XStack
      marginVertical={2}
      paddingVertical={4}
      key={`chat-item-${index}`} // Unique key for each ChatListItem instance
      justifyContent="space-between"
      borderBottomWidth={2}
      borderBottomColor={theme.secondary.get()}
      onPress={() => router.push(`/(app)/tabs/chat?chat=${chat?._id}`)}>
      <XStack gap={12} key={`chat-list-parent-${index}`}>
        <View style={{ position: 'relative' }}>
          <Image
            src="https://i.pinimg.com/564x/25/34/5e/25345e8510eeaab262dcaf3c56c57f30.jpg"
            width={60}
            height={60}
            borderRadius={50}
            key={`image-${index}`} // Unique key for the Image
          />
          {onlineUsers?.includes(chatUser?._id) && (
            <View
              style={{
                position: 'absolute',
                bottom: 4,
                right: 0,
                width: 16,
                height: 16,
                borderRadius: 7,
                backgroundColor: '#4CAF50',
                borderWidth: 2,
                borderColor: 'white',
              }}
            />
          )}
        </View>
        <View
          style={{
            paddingVertical: 4,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 4,
          }}
          key={`text-container-${index}`}>
          <Text
            key={`name-${index}`}
            style={{ fontSize: 18, fontWeight: '600', color: theme.primary.get() }}>
            {chatUser?.firstName} {chatUser?.lastName}
          </Text>
          <LastMessageInChatListItem message={chat?.lastMessage} />
        </View>
      </XStack>
      <View
        key={`time-container-${index}`}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Text key={`time-1-${index}`} style={{ fontSize: 10, color: theme.inputbox.get() }}>
          10:00pm
        </Text>
        <Ionicons name="checkmark-done" size={18} color={theme.primary.get()} />
      </View>
    </XStack>
  );
};

export default ChatListItem;
