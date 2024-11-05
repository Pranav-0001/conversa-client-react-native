import { useQuery } from '@tanstack/react-query';
import { api } from './api';

/**
 *
 * query to get task tags
 */
export default function useGetUserById(params: any) {
  async function getUserById() {
    const res = await api({
      method: 'get',
      url: `/api/v1/users/profile/${params.id}`,
    });
    return res.data.data;
  }
  return useQuery({
    queryKey: [`getUserById`], // Wrap the query key in an object with the key `queryKey`
    queryFn: getUserById, // Specify the function to fetch the data with `queryFn`
  });
}
