import React from 'react';
import { Alert, Platform } from 'react-native';
import { Image, ScrollView, Text, View, XStack, YStack, useTheme } from 'tamagui';
import UsersListItem from './UsersListItem';
import UsersSearch from './UsersSearch';
import TabsHeader from '../tabs/TabsHeader';
import useGetAllUsersQuery from '~/app/(services)/api/useGetAllUsersQuery';

const UsersList = () => {
  const theme = useTheme();
  const getAllUsersQuery = useGetAllUsersQuery({});
  console.log({ getAllUsersQuery: getAllUsersQuery.data });
  return (
    <View maxHeight={Platform.OS === 'ios' ? '105%' : '100%'}>
      <View paddingHorizontal="$3">
        <TabsHeader />
      </View>

      <XStack paddingHorizontal="$3" paddingVertical="$2">
        <UsersSearch />
      </XStack>
      <ScrollView scrollEnabled>
        <YStack paddingHorizontal="$3">
          {getAllUsersQuery.data?.users?.map((user: any, i: number) => (
            <UsersListItem user={user} index={i} /> // Ensure you add a unique key prop
          ))}
        </YStack>
      </ScrollView>
    </View>
  );
};

export default UsersList;
