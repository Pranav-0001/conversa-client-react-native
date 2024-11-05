import { View, Text, XStack, useTheme, Button, Image, YStack, ScrollView } from 'tamagui';
import React from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Alert, Platform } from 'react-native';
import FriendsSearch from './FriendsSearch';
import FriendsListItem from './FriendsListItem';
import TabsHeader from '../tabs/TabsHeader';
import useGetFriendsQuery from '~/app/(services)/api/useGetFriendsQuery';

const FriendsList = () => {
  const theme = useTheme({ name: 'dark' });
  const getFriendsQuery = useGetFriendsQuery({});
  console.log({ getFriendsQuery });
  return (
    <View paddingHorizontal="$3" maxHeight={Platform.OS === 'ios' ? '105%' : '100%'}>
      <TabsHeader />
      <XStack paddingVertical="$2">
        <FriendsSearch />
      </XStack>
      <ScrollView scrollEnabled>
        <YStack>
          {getFriendsQuery?.data?.map((friend: any, i: number) => (
            <FriendsListItem index={i} friend={friend} /> // Ensure you add a unique key prop
          ))}
        </YStack>
      </ScrollView>
    </View>
  );
};

export default FriendsList;
