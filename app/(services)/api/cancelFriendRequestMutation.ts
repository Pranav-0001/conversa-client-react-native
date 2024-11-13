import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import axios from 'axios'; // Import Axios types
import { api } from './api';

interface cancelFriendRequestData {
  userId: string;
}

interface Response {
  data(data: any): { payload: any; type: 'auth/login' };
  success: boolean;
  message: string;
}

export default function useCancelFriendRequestMutation(
  params?: UseMutationOptions<Response, unknown, cancelFriendRequestData>
) {
  return useMutation<Response, unknown, cancelFriendRequestData>({
    mutationFn: async (data: cancelFriendRequestData) => {
      try {
        const res = await api({
          method: 'delete',
          url: `/api/v1/users/friendRequest/${data?.userId}`,
        });

        return res.data; // Assuming res.data contains the relevant response
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
