import React from 'react';
import { Text, View } from 'tamagui';
import ChatHeader from './ChatHeader';
import ChatBox from './ChatBox';
import ChatWindow from './ChatWindow';

export default function ChatPage({ chat }: { chat: any }) {
  return (
    <View height="100%">
      <ChatHeader />
      <ChatWindow />
      <ChatBox />
    </View>
  );
}
