import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import axios from 'axios'; // Import Axios types
import { api } from './api';

interface friendRequestData {
  userId: string;
}

interface LoginResponse {
  data(data: any): { payload: any; type: 'auth/login' };
  success: boolean;
  message: string;
}

export default function useSendFriendRequestMutation(
  params?: UseMutationOptions<LoginResponse, unknown, friendRequestData>
) {
  return useMutation<LoginResponse, unknown, friendRequestData>({
    mutationFn: async (data: friendRequestData) => {
      try {
        const res = await api({
          method: 'post',
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
