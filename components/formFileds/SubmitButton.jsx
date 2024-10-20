import { View, Text } from 'react-native';
import React from 'react';
import { Button, useTheme } from 'tamagui';

const SubmitButton = () => {
  const theme = useTheme({ name: 'dark' });
  return (
    <View style={{ width: '100%' }}>
      <Button backgroundColor={theme.primary.get()} color={theme.background.get()} fontWeight={900}>
        Signup
      </Button>
    </View>
  );
};

export default SubmitButton;
