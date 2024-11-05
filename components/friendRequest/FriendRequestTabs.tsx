import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { H5, SizableText, Tabs, useTheme, View, YStack } from 'tamagui';

export default function FriendRequestTabs({ selected, setSelected }: any) {
  const { name } = useLocalSearchParams();
  const theme = useTheme({ name: 'dark' });

  return (
    <Tabs defaultValue={selected}>
      <YStack width={'100%'}>
        <View
          width={'100%'}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Tabs.List backgroundColor={'red'} width={'100%'} justifyContent="center">
            <Tabs.Tab
              value="incoming"
              width={'50%'}
              backgroundColor={
                selected === 'incoming' ? theme.background.get() : theme.background.get()
              }
              onPress={() => setSelected('incoming')}>
              <SizableText
                fontWeight={900}
                fontSize={16}
                color={selected === 'incoming' ? theme.primary.get() : theme.inputbox.get()}>
                Requests
              </SizableText>
            </Tabs.Tab>
            <Tabs.Tab
              value="outgoing"
              width={'50%'}
              backgroundColor={
                selected === 'outgoing' ? theme.background.get() : theme.background.get()
              }
              onPress={() => setSelected('outgoing')}>
              <SizableText
                fontWeight={900}
                fontSize={16}
                color={selected === 'outgoing' ? theme.primary.get() : theme.inputbox.get()}>
                My requests
              </SizableText>
            </Tabs.Tab>
          </Tabs.List>
        </View>
        <View width={'100%'}>
          <Tabs.Content value="tab1" width={'100%'}>
            <H5>Tab 1</H5>
          </Tabs.Content>
          <Tabs.Content value="tab2">
            <H5>Tab 2</H5>
          </Tabs.Content>
        </View>
      </YStack>
    </Tabs>
  );
}
