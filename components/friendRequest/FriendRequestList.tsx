import { View, Text, XStack, useTheme, Button, Image, YStack, ScrollView } from 'tamagui';
import React, { useState } from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Alert, Platform } from 'react-native';

import FriendRequestSearch from './FriendRequestSearch';
import FriendRequestListItem from './FriendRequestListItem';
import FriendRequestTabs from './FriendRequestTabs';
import TabsHeader from '../tabs/TabsHeader';

const FriendRequestList = () => {
  const [selected, setSelected] = useState('incoming');
  const theme = useTheme();
  return (
    <View paddingHorizontal="$3"  maxHeight={Platform.OS==="ios"?"105%":'100%'} >
      <TabsHeader/>
      <XStack paddingVertical="$2">
        <FriendRequestSearch />
      </XStack>
      <XStack paddingVertical="$2">
        <FriendRequestTabs selected={selected} setSelected={setSelected} />
      </XStack>
      <ScrollView scrollEnabled>
        <YStack>
          {Array(50)
            .fill(2)
            .map((_, i) => (
              <FriendRequestListItem index={i} /> // Ensure you add a unique key prop
            ))}
        </YStack>
      </ScrollView>
    </View>
  );
};

export default FriendRequestList;
