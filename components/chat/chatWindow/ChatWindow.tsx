import { View, Text, Image } from 'tamagui';
import React from 'react';
import ChatBubble from './ChatBubble';
import { ScrollView } from 'react-native';
import useGetMessagesByChatIdQuery from '~/app/(services)/api/getMessagesByChatIdQuery';
import { useLocalSearchParams } from 'expo-router';
import { useSelector } from 'react-redux';

const ChatWindow = () => {
  const { chat } = useLocalSearchParams();
  const currentUser = useSelector((state: any) => state.auth.user);
  console.log({ currentUser });
  const getMessages = useGetMessagesByChatIdQuery(chat as string);
  console.log({ getMessages: getMessages?.data });
  return (
    <View flex={1} height="calc(100% - 120px)" width="100%" backgroundColor="$background">
      <Image
        source={{
          uri: 'https://w0.peakpx.com/wallpaper/82/215/HD-wallpaper-cartoon-dark-black-simple.jpg',
        }}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      />
      <ScrollView
        style={{
          flex: 1,
          paddingTop: 16,
          paddingHorizontal: 8,
          height: '100%',
        }}
        contentContainerStyle={{ paddingBottom: 20 }}>
        
        {getMessages &&
          getMessages?.data?.data?.map((message: any) => (
            <ChatBubble message={message} sent={message?.sender?._id === currentUser?._id} />
          ))}
      </ScrollView>
    </View>
  );
};

export default ChatWindow;
