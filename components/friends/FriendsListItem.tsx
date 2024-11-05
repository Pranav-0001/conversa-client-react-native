import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Button, Image, useTheme, XStack } from 'tamagui';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const FriendsListItem = ({ index, friend }: { index: number; friend: any }) => {
  const theme = useTheme({ name: 'dark' });
  const [isPopoverVisible, setPopoverVisible] = useState(false); // State to manage popover visibility

  const togglePopover = () => {
    setPopoverVisible(!isPopoverVisible);
  };

  return (
    <>
      <XStack
        marginVertical={2}
        paddingVertical={4}
        key={`friend-item-${index}`} // Unique key for each FriendsListItem instance
        justifyContent="space-between"
        borderBottomWidth={2}
        borderBottomColor={theme.secondary.get()}>
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
              {`${friend?.friendInfo?.firstName} ${friend?.friendInfo?.lastName}`}
            </Text>
            <Text key={`message-${index}`} style={{ color: theme.inputbox.get() }}>
              @{friend?.friendInfo?.username}
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
          <Button size={'$2'} backgroundColor={theme.inputbox.get()} key={`time-1-${index}`}>
            Unfriend
          </Button>
          
        </View>
      </XStack>
    </>
  );
};

export default FriendsListItem;
