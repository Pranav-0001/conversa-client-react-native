import React from 'react';
import { Text as RText } from 'react-native';
import { useTheme, View, Text, XStack, Image, YStack } from 'tamagui';
import { Entypo } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import useGetChatById from '~/app/(services)/api/getChatById';
import { useSelector } from 'react-redux';

const ChatHeader = () => {
  const theme = useTheme({ name: 'dark' });
  const { chat } = useLocalSearchParams();
  const getChatByIdQuery = useGetChatById(chat as string);
  console.log({ getChatByIdQuery: getChatByIdQuery?.data });
  const { user } = useSelector((state: any) => state.auth);
  const chatUser = getChatByIdQuery?.data?.participants?.find(
    (participant: any) => participant?.user?._id !== user?._id
  )?.user;
  const onlineUsers = useSelector((state: any) => state.onlineUsers.onlineUsers);
  return (
    <View padding={10} backgroundColor={theme.secondary.get()} width="100%" height="30px">
      <XStack
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        paddingHorizontal="$3">
        <XStack gap={12} alignItems="center" justifyContent="center">
          <Image
            src="https://i.pinimg.com/564x/25/34/5e/25345e8510eeaab262dcaf3c56c57f30.jpg"
            width={40}
            height={40}
            borderRadius={50}
            key="chat-header-image"
            resizeMode="cover"
            style={{
              minWidth: 40,
              minHeight: 40,
              maxWidth: 40,
              maxHeight: 40,
            }}
          />

          <YStack key="">
            <Text fontWeight="600" fontSize={18} color={theme.primary.get()}>
              {chatUser?.firstName ?? '' + ' ' + chatUser?.lastName ?? ''}
            </Text>
            {onlineUsers?.includes(chatUser?._id) && (
              <Text fontSize={14} color={theme.color.get()} opacity={0.7}>
                Online
              </Text>
            )}
          </YStack>
        </XStack>

        <Entypo name="dots-three-vertical" size={24} color={theme.primary.get()} />
      </XStack>
    </View>
  );
};

export default ChatHeader;
