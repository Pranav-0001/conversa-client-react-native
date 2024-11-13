import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Button, Image, useTheme, XStack } from 'tamagui';
import { router } from 'expo-router';
import useSendFriendRequestMutation from '~/app/(services)/api/sendFriendRequestMutation';
import useGetAllUsersQuery from '~/app/(services)/api/useGetAllUsersQuery';
import useCancelFriendRequestMutation from '~/app/(services)/api/cancelFriendRequestMutation';

const UsersListItem = ({ index, user }: { index: number; user: any }) => {
  const theme = useTheme({ name: 'dark' });
  const [isPopoverVisible, setPopoverVisible] = useState(false); // State to manage popover visibility

  const togglePopover = () => {
    setPopoverVisible(!isPopoverVisible);
  };
  const getAllUsersQuery = useGetAllUsersQuery({});
  const sendFriendRequestMutation = useSendFriendRequestMutation({
    onSuccess: () => {
      getAllUsersQuery.refetch();
    },
  });
  const cancelFriendRequestMutation = useCancelFriendRequestMutation({
    onSuccess: () => {
      getAllUsersQuery.refetch();
    },
  });
  const RenderButton = (): any => {
    const theme = useTheme({ name: 'dark' });
    switch (user?.request?.status) {
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
        if (user?.request?.requester === user?._id) {
          return (
            <XStack gap={4}>
              <Button
                size={'$2'}
                backgroundColor={theme.primary.get()} // Use a specific color for pending
                key={`pending-btn-${index}`}
                color={'black'}
                onPress={() => {}}>
                Accept
              </Button>
              <Button
                size={'$2'}
                backgroundColor={theme.inputbox.get()} // Use a specific color for pending
                key={`pending-btn-${index}`}
                color={'black'}
                onPress={() => {}}>
                Reject
              </Button>
            </XStack>
          );
        } else {
          return (
            <Button
              size={'$2'}
              backgroundColor={theme.inputbox.get()} // Use a specific color for pending
              key={`pending-btn-${index}`}
              color={'black'}
              onPress={() => {
                cancelFriendRequestMutation.mutate({ userId: user?._id });
              }}>
              Cancel request
            </Button>
          );
        }
      case 'declined':
        return (
          <Button
            size={'$2'}
            backgroundColor={theme.primary.get()}
            key={`send-request-${index}`}
            color={theme.secondary.get()}
            onPress={(e) => {
              e.stopPropagation && e.stopPropagation();
              sendFriendRequestMutation.mutate({ userId: user?._id });
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
              sendFriendRequestMutation.mutate({ userId: user?._id });
            }}>
            Send Request
          </Button>
        );
    }
  };

  return (
    <XStack
      marginVertical={2}
      paddingVertical={4}
      key={`friend-item-${index}`} // Unique key for each UsersListItem instance
      justifyContent="space-between"
      borderBottomWidth={2}
      borderBottomColor={theme.secondary.get()}
      onPress={() => router.push(`/(app)/user/${user?._id}`)}>
      <XStack gap={12} key={`friend-list-parent-${index}`}>
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
            {`${user?.firstName} ${user?.lastName}`}
          </Text>
          <Text key={`username-${index}`} style={{ color: theme.inputbox.get() }}>
            @{user?.username}
          </Text>
        </View>
      </XStack>
      <View
        key={`time-container-${index}`}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {RenderButton()}
      </View>
    </XStack>
  );
};

export default UsersListItem;
