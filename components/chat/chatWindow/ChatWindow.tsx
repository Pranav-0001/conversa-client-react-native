import { View, Text, Image } from 'tamagui';
import React, { useRef, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import { ScrollView } from 'react-native';
import useGetMessagesByChatIdQuery from '~/app/(services)/api/getMessagesByChatIdQuery';
import { useLocalSearchParams } from 'expo-router';
import { useSelector } from 'react-redux';
import { socket } from '~/app/socket/socket';

const ChatWindow = () => {
  const { chat } = useLocalSearchParams();
  const currentUser = useSelector((state: any) => state.auth.user);
  const scrollViewRef = useRef<ScrollView>(null);
  console.log({ currentUser });
  const getMessages = useGetMessagesByChatIdQuery(chat as string);
  console.log({ getMessages: getMessages?.data });

  const scrollToBottom = () => {
    setTimeout(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    }, 100);
  };

  useEffect(() => {
    if (getMessages.isSuccess) {
      scrollToBottom();
    }
  }, [getMessages.isSuccess]);

  useEffect(() => {
    socket.on('messageReceived', (data) => {
      console.log({ data }, 'messageReceived');
      if (data?.chat === chat) {
        getMessages.refetch().then(() => {
          scrollToBottom();
        });
      }
    });
    return () => {
      socket.off('messageReceived');
    };
  }, [chat]);

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
        ref={scrollViewRef}
        style={{
          flex: 1,
          paddingTop: 16,
          paddingHorizontal: 8,
          height: '100%',
        }}
        contentContainerStyle={{ paddingBottom: 20 }}>
        {getMessages.isLoading ? (
          <View>
            {/* Add your skeleton loader component here */}
            <Text>Loading...</Text>
          </View>
        ) : (
          getMessages?.data?.data?.map((message: any, index: number) => {
            const currentDate = new Date(message.createdAt);
            const prevMessage = index > 0 ? getMessages.data.data[index - 1] : null;
            const prevDate = prevMessage ? new Date(prevMessage.createdAt) : null;

            const showDateChip =
              !prevDate || currentDate.toDateString() !== prevDate.toDateString();

            let dateText = '';
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);

            if (currentDate.toDateString() === today.toDateString()) {
              dateText = 'Today';
            } else if (currentDate.toDateString() === yesterday.toDateString()) {
              dateText = 'Yesterday';
            } else {
              dateText = currentDate.toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
              });
            }

            return (
              <React.Fragment key={message._id}>
          {showDateChip && (
            <View alignItems="center" paddingVertical={8}>
              <Text
                backgroundColor="$gray8"
                color="$color"
                paddingHorizontal={12}
                paddingVertical={4}
                borderRadius={16}
                fontSize={12}>
                {dateText}
              </Text>
            </View>
          )}
          <ChatBubble
            key={message._id}
            message={message}
            sent={message?.sender?._id === currentUser?._id}
          />
              </React.Fragment>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

export default ChatWindow;
