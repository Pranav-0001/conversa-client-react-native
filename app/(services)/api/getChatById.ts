import { useQuery } from '@tanstack/react-query';
import { api } from './api';

/**
 * Query to get messages for a specific chat
 */
export default function useGetChatById(chatId?: string) {
  async function getChatById() {
    const res = await api({
      method: 'get',
      url: `/api/v1/chats/chat/${chatId}`,
    });
    return res.data?.data;
  }
  return useQuery({
    queryKey: ['chat', chatId],
    queryFn: getChatById,
    enabled: !!chatId,
  });
}
