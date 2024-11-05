import { Alert } from 'react-native';
import React from 'react';
import { Text, XStack, View, useTheme } from 'tamagui';
import { Image } from 'tamagui';
import { router } from 'expo-router';

const TabsHeader = () => {
  const theme = useTheme({ name: 'dark' });
  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      paddingTop="$4"
      paddingBottom="$2"
      paddingHorizontal="$1">
      <Text fontFamily={'$lobster'} fontSize="$6" color={theme.primary.get()}>
        Conversa
      </Text>
      <View justifyContent="center" alignItems="center">
        <Image
          height={35}
          width={35}
          borderRadius={50}
          src="https://i.pinimg.com/564x/25/34/5e/25345e8510eeaab262dcaf3c56c57f30.jpg"
          onPress={() => router.push('/(app)/user/profile')}
          cursor="pointer"
        />
      </View>
    </XStack>
  );
};

export default TabsHeader;
