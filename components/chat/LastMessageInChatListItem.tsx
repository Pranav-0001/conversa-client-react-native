import { View, Text, useTheme } from 'tamagui';
import React from 'react';

export default function LastMessageInChatListItem({ message }: any) {
  const theme = useTheme({ name: 'dark' });
  console.log({ message });
  if (message?.payload?.type === 'system') {
    return <Text color={theme.inputbox.get()}>{message?.payload?.system}</Text>;
  }
}
