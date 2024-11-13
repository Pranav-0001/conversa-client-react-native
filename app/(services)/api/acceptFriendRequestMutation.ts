import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import axios from 'axios'; // Import Axios types
import { api } from './api';

interface acceptFriendRequestData {
  requestId: string;
  status: string;
}

interface Response {
  data(data: any): { payload: any };
  status: boolean;
  message: string;
}

export default function useAcceptFriendRequestMutation(
  params?: UseMutationOptions<Response, unknown, acceptFriendRequestData>
) {
  return useMutation<Response, unknown, acceptFriendRequestData>({
    mutationFn: async (data: acceptFriendRequestData) => {
      try {
        const res = await api({
          method: 'put',
          url: `/api/v1/users/friendRequest/${data?.requestId}`,
          data,
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
