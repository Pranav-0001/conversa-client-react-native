import { useQuery } from '@tanstack/react-query';
import { api } from './api';

/**
 *
 * query to get task tags
 */
export default function useGetProfileQuery(params: any) {
  async function getProfile() {
    const res = await api({
      method: 'get',
      url: `/api/v1/users/profile`,
    });
    return res.data.data;
  }
  return useQuery({
    queryKey: [`getProfile`], // Wrap the query key in an object with the key `queryKey`
    queryFn: getProfile, // Specify the function to fetch the data with `queryFn`
  });
}
