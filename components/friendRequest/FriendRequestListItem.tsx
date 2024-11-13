import { View, Text } from 'react-native';
import React from 'react';
import { Button, Image, useTheme, XStack } from 'tamagui';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import useAcceptFriendRequestMutation from '~/app/(services)/api/acceptFriendRequestMutation';
import useGetFriendRequestsQuery from '~/app/(services)/api/getFriendRequestQuery';

const FriendRequestListItem = ({ index, request }: any) => {
  const theme = useTheme({ name: 'dark' });
  const getFriendRequests = useGetFriendRequestsQuery({});
  const acceptFriendRequestMutation = useAcceptFriendRequestMutation({
    onSuccess: () => {
      getFriendRequests.refetch();
    },
  });
  return (
    <XStack
      marginVertical={2}
      paddingVertical={4}
      key={`friend-request-item-${index}`} // Unique key for each FriendRequestListItem instance
      justifyContent="space-between"
      borderBottomWidth={2}
      borderBottomColor={theme.secondary.get()}>
      <XStack gap={12} key={`friend-request-list-parent-${index}`}>
        <Image
          src="https://i.pinimg.com/564x/25/34/5e/25345e8510eeaab262dcaf3c56c57f30.jpg"
          width={60}
          height={60}
          borderRadius={50}
          key={`image-${index}`} // Unique key for the Image
        />
        <View
          style={{
            paddingVertical: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
          key={`text-container-${index}`}>
          <Text
            key={`name-${index}`}
            style={{ fontSize: 18, fontWeight: '600', color: theme.primary.get() }}>
            {`${request?.requester?.firstName} ${request?.requester?.lastName}`}
          </Text>
          <Text key={`message-${index}`} style={{ color: theme.inputbox.get() }}>
            @{request?.requester?.username}
          </Text>
        </View>
      </XStack>
      <View
        key={`button-container-${index}`}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
        }}>
        <Button
          size={'$2'}
          backgroundColor={theme.primary.get()}
          color={'black'}
          key={`button-1-${index}`}
          onPress={() => {
            acceptFriendRequestMutation.mutate({ requestId: request?._id, status: 'accepted' });
          }}>
          Accept
        </Button>
        <Button
          size={'$2'}
          backgroundColor={theme.inputbox.get()}
          color={'black'}
          key={`button-2-${index}`}
          onPress={() => {
            acceptFriendRequestMutation.mutate({ requestId: request?._id, status: 'declined' });
          }}>
          Reject
        </Button>
      </View>
    </XStack>
  );
};

export default FriendRequestListItem;
