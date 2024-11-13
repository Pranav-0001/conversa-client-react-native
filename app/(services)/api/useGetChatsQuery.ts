import { useQuery } from '@tanstack/react-query';
import { api } from './api';

/**
 *
 * query to get task tags
 */
export default function useGetChatsQuery(params: any) {
  async function getChats() {
    const res = await api({
      method: 'get',
      url: `/api/v1/chats`,
    });
    return res.data.data;
  }
  return useQuery({
    queryKey: [`getChats`], // Wrap the query key in an object with the key `queryKey`
    queryFn: getChats, // Specify the function to fetch the data with `queryFn`
  });
}
