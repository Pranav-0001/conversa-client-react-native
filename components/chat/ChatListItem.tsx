import { View, Text } from 'react-native';
import React from 'react';
import { Image, useTheme, XStack } from 'tamagui';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const ChatListItem = ({ index }: any) => {
  const theme = useTheme({ name: 'dark' });
  
  return (
    <XStack 
      marginVertical={2} 
      paddingVertical={4} 
      key={`chat-item-${index}`} // Unique key for each ChatListItem instance
      justifyContent='space-between'
      borderBottomWidth={2}
      borderBottomColor={theme.secondary.get()}
      onPress={()=>router.push("/(app)/user/123")}
    >
      <XStack gap={12} key={`chat-list-parent-${index}`}>
        <Image
          src="https://i.pinimg.com/564x/25/34/5e/25345e8510eeaab262dcaf3c56c57f30.jpg"
          width={60}
          height={60}
          borderRadius={50}
          key={`image-${index}`} // Unique key for the Image
        />
        <View style={{ paddingVertical: 4,display: "flex", justifyContent: "flex-start" ,alignItems:"flex-start" ,gap:4}} key={`text-container-${index}`}>
          <Text key={`name-${index}`} style={{ fontSize: 18, fontWeight: '600', color: theme.primary.get() }}>
            Pranav
          </Text>
          <Text key={`message-${index}`} style={{ color: theme.inputbox.get() }}>You: Hello how are you?</Text>
        </View>
      </XStack>
      <View key={`time-container-${index}`} style={{ display: "flex", justifyContent: "space-between" ,alignItems:"flex-end"}}>
        <Text key={`time-1-${index}`} style={{ fontSize: 10, color: theme.inputbox.get() }}>10:00pm</Text>
        <Ionicons name="checkmark-done" size={18} color={theme.primary.get()} />
      </View>
    </XStack>
  );
};

export default ChatListItem;
