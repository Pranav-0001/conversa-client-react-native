import { View } from 'react-native';
import React from 'react';
import { Button, Text, useTheme } from 'tamagui';
import useGetAllUsersQuery from '~/app/(services)/api/useGetAllUsersQuery';
import useSendFriendRequestMutation from '~/app/(services)/api/sendFriendRequestMutation';

const RenderButton = ({
  status,
  index,
  userId,
}: {
  status: String;
  index: number;
  userId: string;
}) => {
  const getAllUsersQuery = useGetAllUsersQuery({});
  const sendFriendRequestMutation = useSendFriendRequestMutation({
    onSuccess: () => {
      getAllUsersQuery.refetch();
    },
  });
  const theme = useTheme({ name: 'dark' });
  switch (status) {
    case 'accepted':
      return (
        <Button
          size={'$2'}
          backgroundColor={theme.inputbox.get()}
          key={`unfriend-btn-${index}`}
          color={'black'}>
          Unfriend
        </Button>
      );

    case 'requested':
      return (
        <Button
          size={'$2'}
          backgroundColor={theme.inputbox.get()} // Use a specific color for pending
          key={`pending-btn-${index}`}
          color={theme.color.get()}
          disabled // Optional: disable button for pending requests
        >
          Cancel request
        </Button>
      );
    case 'declined':
      return (
        <Button
          size={'$2'}
          backgroundColor={theme.primary.get()}
          key={`send-request-${index}`}
          color={theme.secondary.get()}
          onPress={(e) => {
            e.stopPropagation && e.stopPropagation();
            sendFriendRequestMutation.mutate({ userId });
          }}>
          Send Request
        </Button>
      );
    default:
      return (
        <Button
          size={'$2'}
          backgroundColor={theme.primary.get()}
          key={`send-request-${index}`}
          color={theme.secondary.get()}
          onPress={(e) => {
            e.stopPropagation && e.stopPropagation();
            sendFriendRequestMutation.mutate({ userId });
          }}>
          Send Request
        </Button>
      );
  }
};

export default RenderButton;
