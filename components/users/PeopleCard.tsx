import { View } from 'react-native';
import React from 'react';
import { Button, Image, Text, useTheme, XStack, YStack } from 'tamagui';

export default function PeopleCard({ name, index, userName }: any) {
  const theme = useTheme({ name: 'dark' });
  return (
    <View key={`container-${index}`} style={{ paddingHorizontal: 2 }}>
      <YStack
        padding={20}
        borderWidth={2}
        borderRadius={10}
        alignItems="center"
        gap={10}
        borderColor={'rgba(0,0,0,.2)'}>
        <Image
          src="https://i.pinimg.com/564x/25/34/5e/25345e8510eeaab262dcaf3c56c57f30.jpg"
          width={90}
          height={90}
          borderRadius={50}
          key={`image-${index}`} // Unique key for the Image
        />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text color={theme.color.get()} fontWeight={600}>
            {name}
          </Text>
          <Text color={theme.inputbox.get()} fontWeight={400}>
            {userName}
          </Text>
          <Button backgroundColor={theme.primary.get()} height={30} marginVertical={10}>
            <Text fontWeight={400}>Send Request</Text>
          </Button>
        </View>
      </YStack>
    </View>
  );
}
