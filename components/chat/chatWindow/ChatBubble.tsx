import React from 'react';
import { Pressable } from 'react-native';
import { View, Text, useTheme, XStack } from 'tamagui';
import ImageModal from 'react-native-image-modal';

interface ChatBubbleProps {
  message: {
    sender?: {
      _id?: string;
    };
    chat?: string;
    payload?: {
      type?: 'text' | 'image' | 'video' | 'document' | 'audio' | 'system';
      text?: string;
      image?: {
        url: string;
      };
      video?: string;
      audio?: string;
      document?: string;
      system?: string;
    };
    seenBy?: Array<{
      _id: string;
    }>;
    status?: boolean;
    createdAt?: string;
    updatedAt?: string;
  };
  sent: boolean;
}

const ChatBubble = ({ message, sent }: ChatBubbleProps) => {
  const theme = useTheme();

  const formatTime = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <>
      <XStack
        width="100%"
        justifyContent={
          message?.payload?.type === 'system' ? 'center' : sent ? 'flex-end' : 'flex-start'
        }>
        <View
          backgroundColor={
            message?.payload?.type === 'system'
              ? '$gray8'
              : sent
                ? theme.primary.get()
                : theme.secondary.get()
          }
          padding="$2"
          margin="$1"
          borderRadius="$4"
          maxWidth={message?.payload?.type === 'system' ? '90%' : '80%'}>
          {message?.payload?.type === 'text' && (
            <View>
              <Text color={sent ? 'white' : theme.color.get()}>{message?.payload?.text}</Text>
              <Text
                color={sent ? 'rgba(255,255,255,0.7)' : theme.color.get()}
                fontSize={10}
                textAlign="right"
                marginTop={4}
              >
                {formatTime(message?.createdAt)}
              </Text>
            </View>
          )}
          {message?.payload?.type === 'system' && (
            <View flex={1} justifyContent="center" alignItems="center" width="100%">
              <Text
                color="$color"
                backgroundColor="$inputbox"
                borderRadius="$4"
                fontWeight="bold"
                padding="$2">
                {message?.payload?.system}
              </Text>
            </View>
          )}
          {message?.payload?.type === 'image' && (
            <View padding="$-0.25" position="relative">
              <ImageModal
                imageBackgroundColor={theme.secondary.get()}
                source={{ uri: message?.payload?.image?.url }}
                style={{
                  width: 250,
                  height: 250,
                  resizeMode: 'contain',
                }}
              />
              <Text
                color={sent ? 'rgba(255,255,255,0.7)' : theme.color.get()}
                fontSize={10}
                position="absolute"
                bottom={4}
                right={4}
              >
                {formatTime(message?.createdAt)}
              </Text>
            </View>
          )}
        </View>
      </XStack>
    </>
  );
};

export default ChatBubble;
