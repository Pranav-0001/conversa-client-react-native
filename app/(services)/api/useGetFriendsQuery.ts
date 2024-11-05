import { useQuery } from '@tanstack/react-query';
import { api } from './api';

/**
 *
 * query to get task tags
 */
export default function useGetFriendsQuery(params: any) {
  async function getFriends() {
    const res = await api({
      method: 'get',
      url: `/api/v1/users/friends`,
    });
    return res.data.data;
  }
  return useQuery({
    queryKey: [`getFriends`], // Wrap the query key in an object with the key `queryKey`
    queryFn: getFriends, // Specify the function to fetch the data with `queryFn`
  });
}
