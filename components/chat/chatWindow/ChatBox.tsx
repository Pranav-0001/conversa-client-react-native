import { View, TextInput, TouchableOpacity, Platform, ActionSheetIOS, Alert } from 'react-native';
import { useState } from 'react';
import { XStack, YStack, useTheme } from 'tamagui';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import useSendMessageByChatIdMutation from '~/app/(services)/api/sendMessageByChatIdMutation';
import { useLocalSearchParams } from 'expo-router';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const theme = useTheme();
  const sendMessageMutation = useSendMessageByChatIdMutation();
  const { chat } = useLocalSearchParams();

  const handleSend = () => {
    console.log('message', message);
    if (message.trim().length > 0) {
      // Handle send message
      sendMessageMutation.mutate({
        chatId: chat as string,
        payload: {
          type: 'text',
          text: message?.trim(),
        },
      });
      setMessage('');
    }
  };

  const handleAttachment = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Take Photo', 'Choose from Library', 'Upload File'],
          cancelButtonIndex: 0,
        },
        async (buttonIndex) => {
          if (buttonIndex === 1) {
            const result = await ImagePicker.launchCameraAsync();
            if (!result.canceled) {
              // Handle camera photo
            }
          } else if (buttonIndex === 2) {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.canceled) {
              // Handle photo from library
            }
          } else if (buttonIndex === 3) {
            const result = await DocumentPicker.getDocumentAsync();
            // if (result?.type === 'success') {
            //   // Handle file upload
            // }
          }
        }
      );
    } else {
      Alert.alert('Upload Options', 'Choose an option', [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Take Photo',
          onPress: async () => {
            const result = await ImagePicker.launchCameraAsync();
            if (!result.canceled) {
              // Handle camera photo
            }
          },
        },
        {
          text: 'Choose from Library',
          onPress: async () => {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.canceled) {
              // Handle photo from library
            }
          },
        },
        {
          text: 'Upload File',
          onPress: async () => {
            const result = await DocumentPicker.getDocumentAsync();
            // if (result.type === 'success') {
            //   // Handle file upload
            // }
          },
        },
      ]);
    }
  };

  return (
    <YStack
      height="100px"
      backgroundColor={theme.secondary.get()}
      padding="$2"
      borderTopWidth={1}
      borderTopColor={theme.secondary.get()}>
      <XStack alignItems="center" space="$2">
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
          placeholderTextColor={theme.secondary.get()}
          style={{
            flex: 1,
            backgroundColor: theme.background.get(),
            borderRadius: 20,
            color: theme.color.get(),
            padding: 10,
          }}
          multiline
        />
        <TouchableOpacity style={{ paddingHorizontal: 5 }} onPress={handleAttachment}>
          <Entypo name="attachment" size={24} color={theme.color.get()} />
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: 5 }} onPress={handleSend}>
          <FontAwesome name="send" size={24} color={theme.primary.get()} />
        </TouchableOpacity>
      </XStack>
    </YStack>
  );
};

export default ChatBox;
