import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Alert, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Image, Text, useTheme, XStack, YStack } from 'tamagui';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import SettingsOption from '~/components/users/SettingsOption';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import useGetProfileQuery from '~/app/(services)/api/useGetProfileQuery';
import { useDispatch } from 'react-redux';
import { logout } from '~/app/(redux)/authSlice';

export default function profile() {
  const theme = useTheme({ name: 'dark' });
  const getProfileQuery = useGetProfileQuery({});
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background.get() }}>
      <View
        style={{
          width: '100%',
          height: 44,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 10,
          borderBottomWidth: 2,
          borderBottomColor: 'rgba(0,0,0,0.2)',
        }}>
        <AntDesign name="left" size={24} color={theme.color.get()} onPress={() => router.back()} />
        <Text color={theme.color.get()} fontSize={16} fontWeight="bold">
          My Profile
        </Text>
        <Text></Text>
      </View>
      <XStack paddingVertical={20} paddingHorizontal={20} gap={20} alignItems="center">
        <Image
          height={100}
          width={100}
          borderRadius={50}
          src="https://i.pinimg.com/564x/25/34/5e/25345e8510eeaab262dcaf3c56c57f30.jpg"
          onPress={() => Alert.alert('Hello', 'Hello World')}
          cursor="pointer"
        />
        <YStack gap={2}>
          <Text color={theme.color.get()} fontSize={20} fontWeight="bold">
            {`${getProfileQuery?.data?.firstName} ${getProfileQuery?.data?.lastName}`}
          </Text>
          <View
            style={{
              backgroundColor: theme.secondary.get(),
              alignSelf: 'flex-start',
              borderRadius: 20,
              paddingHorizontal: 6,
              paddingVertical: 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text color={theme.inputbox.get()} fontSize={12} fontWeight="bold">
              @{getProfileQuery?.data?.username}
            </Text>
          </View>
          <Text color={theme.inputbox.get()} fontSize={14} fontWeight="bold">
            395 friends
          </Text>
          <Text color={theme.inputbox.get()} fontSize={10} fontWeight="bold">
            Joined on {new Date(getProfileQuery.data?.createdAt).toLocaleDateString()}
          </Text>
        </YStack>
      </XStack>
      <YStack paddingHorizontal={20} gap={4}>
        <View
          style={{
            backgroundColor: theme.secondary.get(),
            alignSelf: 'flex-start',
            borderRadius: 20,
            paddingHorizontal: 6,
            paddingVertical: 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text color={theme.inputbox.get()} fontSize={12} fontWeight="bold">
            Developer
          </Text>
        </View>

        <Text color={theme.color.get()}>{getProfileQuery.data?.bio} </Text>
        <Text color={theme.color.get()}>Bio</Text>
        <Text>
          🔗 <Text color={'$blue11Light'}> www.google.com</Text>
        </Text>
      </YStack>

      <View
        style={{
          paddingHorizontal: 30,
          paddingTop: 20,
          width: '100%',
          gap: 5,
        }}>
        <Button
          outlineColor="transparent"
          backgroundColor={theme.inputbox.get()}
          height={30}
          //   alignSelf="center"
        >
          <Text color="black" fontWeight={600}>
            Edit Profile
          </Text>
        </Button>
        <Button
          outlineColor="transparent"
          backgroundColor={theme.primary.get()}
          height={30}
          //   alignSelf="center"
        >
          <Text color="black" fontWeight={600}>
            Share Profile
          </Text>
        </Button>
      </View>

      <YStack paddingHorizontal={20} paddingTop={16} gap={4}>
        <Text paddingBottom={6} fontSize={16} fontWeight={600} color={theme.color.get()}>
          Account Settings
        </Text>
        <SettingsOption
          Icon={Ionicons}
          iconProps={{ name: 'color-palette', size: 24, color: theme.primary.get() }}
          label={'Theme'}
          onPress={() => {}}
          themeSettings={true}
        />
        <SettingsOption
          Icon={MaterialIcons}
          iconProps={{ name: 'key', size: 24, color: theme.primary.get() }}
          label={'Privacy'}
          onPress={() => {}}
          themeSettings={null}
        />
        <SettingsOption
          Icon={Ionicons}
          iconProps={{ name: 'exit-outline', size: 24, color: theme.primary.get() }}
          label={'Logout'}
          onPress={() => {
            dispatch(logout());
          }}
          themeSettings={null}
        />
      </YStack>
    </SafeAreaView>
  );
}
