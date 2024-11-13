import { View, Text, XStack, useTheme, Button, Image, YStack, ScrollView } from 'tamagui';
import React, { useState } from 'react';
import { Platform } from 'react-native';
import FriendRequestSearch from './FriendRequestSearch';
import FriendRequestListItem from './FriendRequestListItem';
import FriendRequestTabs from './FriendRequestTabs';
import TabsHeader from '../tabs/TabsHeader';
import useGetFriendRequestsQuery from '~/app/(services)/api/getFriendRequestQuery';

const FriendRequestList = () => {
  const theme = useTheme();
  const getFriendRequests = useGetFriendRequestsQuery({});
  console.log({ getFriendRequests: getFriendRequests?.data });
  return (
    <View paddingHorizontal="$3" maxHeight={Platform.OS === 'ios' ? '105%' : '100%'}>
      <TabsHeader />
      <XStack paddingVertical="$2">
        <FriendRequestSearch />
      </XStack>
      <ScrollView scrollEnabled>
        <YStack>
          {getFriendRequests?.data?.map((request: any, i: number) => (
            <FriendRequestListItem index={i} request={request} /> // Ensure you add a unique key prop
          ))}
        </YStack>
      </ScrollView>
    </View>
  );
};

export default FriendRequestList;
