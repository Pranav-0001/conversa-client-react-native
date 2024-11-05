import { View, Text } from 'react-native';
import React from 'react';
import { Input, useTheme } from 'tamagui';

const FriendsSearch = () => {
  const theme = useTheme({ name: 'dark' });
  return (
    <View style={{ width: '100%' }}>
      <Input
        outlineColor="transparent"
        borderColor="transparent"
        backgroundColor={theme.secondary.get()}
        borderRadius={50}
        opacity={0.6}
        placeholder='Search...'
        placeholderTextColor="#fff"
      />
    </View>
  );
};

export default FriendsSearch;
