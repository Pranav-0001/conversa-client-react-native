import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import axios from 'axios'; // Import Axios types
import { api } from './api';

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  data(data: any): { payload: any; type: "auth/login"; };
  success: boolean;
  message: string;
}

export default function useLoginMutation(
  params?: UseMutationOptions<LoginResponse, unknown, LoginData>
) {
  return useMutation<LoginResponse, unknown, LoginData>({
    mutationFn: async (data: LoginData) => {
      try {
        const res = await api({
          method: 'post',
          url: '/api/v1/users/signin',
          data: data,
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
