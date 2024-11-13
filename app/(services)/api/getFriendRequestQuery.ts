import { useQuery } from '@tanstack/react-query';
import { api } from './api';

/**
 *
 * query to get task tags
 */
export default function useGetFriendRequestsQuery(params: any) {
  async function getFriendRequests() {
    const res = await api({
      method: 'get',
      url: `/api/v1/users/friendRequests`,
    });
    return res.data.data;
  }
  return useQuery({
    queryKey: [`getFriendRequests`], // Wrap the query key in an object with the key `queryKey`
    queryFn: getFriendRequests, // Specify the function to fetch the data with `queryFn`
  });
}
