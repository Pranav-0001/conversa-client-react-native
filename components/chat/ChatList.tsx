import { View, Text, XStack, useTheme, Button, Image, YStack, ScrollView } from 'tamagui';
import React from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Alert, Platform } from 'react-native';
import ChatSearch from './ChatSearch';
import ChatListItem from './ChatListItem';

const ChatList = () => {
  const theme = useTheme();
  return (
    <View paddingHorizontal="$4">
      <XStack
        justifyContent="space-between"
        alignItems="center"
        paddingTop="$4"
        paddingBottom="$2"
        paddingHorizontal="$1">
        <Text fontFamily={'$lobster'} fontSize="$6" color={theme.primary.get()}>
          Conversa
        </Text>
        <View justifyContent="center" alignItems="center">
          <Image
            height={35}
            width={35}
            borderRadius={50}
            src="https://i.pinimg.com/564x/25/34/5e/25345e8510eeaab262dcaf3c56c57f30.jpg"
            onPress={() => Alert.alert('Hello', 'Hello World')}
            cursor="pointer"
          />
        </View>
      </XStack>
      <XStack paddingVertical="$2">
        <ChatSearch />
      </XStack>
      <ScrollView
        style={
          Platform?.OS === 'web'
            ? {
                flex: 1,
                overflow: 'scroll',
                flexGrow: 1,
                maxHeight: '14.5%',
              }
            : {}
        }
        scrollEnabled>
        <YStack>
          {Array(200)
            .fill(2)
            .map((_, i) => (
              <ChatListItem index={i}  /> // Ensure you add a unique key prop
            ))}
        </YStack>
      </ScrollView>
    </View>
  );
};

export default ChatList;
