import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import axios from 'axios';
import { api } from './api';

interface MessageData {
  chatId: string;
  payload: {
    type: 'text' | 'image' | 'video' | 'document' | 'audio' | 'system';
    text?: string;
    image?: {
      url: string;
    };
    video?: string;
    audio?: string;
    document?: string;
    system?: string;
  };
}

interface MessageResponse {
  data: {
    success: boolean;
    message: string;
    data: any;
  };
}

export default function useSendMessageByChatIdMutation(
  params?: UseMutationOptions<MessageResponse, unknown, MessageData>
) {
  return useMutation<MessageResponse, unknown, MessageData>({
    mutationFn: async (data: MessageData) => {
      try {
        const res = await api({
          method: 'post',
          url: `/api/v1/chats/messages/${data.chatId}`,
          data: {
            payload: data.payload
          }
        });

        return res.data;
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          const serverError = error.response?.data;
          throw serverError || error;
        } else {
          throw new Error('An unknown error occurred');
        }
      }
    },
    ...params,
  });
}
