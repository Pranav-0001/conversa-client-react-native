import { useQuery } from '@tanstack/react-query';
import { api } from './api';

/**
 * Query to get messages for a specific chat
 */
export default function useGetMessagesByChatIdQuery(chatId?: string) {
  async function getMessages() {
    const res = await api({
      method: 'get',
      url: `/api/v1/chats/messages/${chatId}`,
    });
    return res.data?.data;
  }
  return useQuery({
    queryKey: ['messages', chatId],
    queryFn: getMessages,
    enabled: !!chatId,
  });
}
