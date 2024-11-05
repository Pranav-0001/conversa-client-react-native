import { useQuery } from '@tanstack/react-query';
import { api } from './api';

/**
 *
 * query to get task tags
 */
export default function useGetAllUsersQuery(params: any) {
  async function getAllUsers() {
    const res = await api({
      method: 'get',
      url: `/api/v1/users`,
    });
    return res.data.data;
  }
  return useQuery({
    queryKey: [`getAllUsers`], // Wrap the query key in an object with the key `queryKey`
    queryFn: getAllUsers, // Specify the function to fetch the data with `queryFn`
  });
}
