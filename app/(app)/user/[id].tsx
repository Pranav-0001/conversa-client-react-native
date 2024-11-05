import { View, Alert } from 'react-native';
import React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, useTheme, XStack, YStack, Text, Button, ScrollView } from 'tamagui';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import PeopleCard from '~/components/users/PeopleCard';
import useGetUserById from '~/app/(services)/api/useGetUserById';

const UserProfile = () => {
  const theme = useTheme();
  const { id } = useLocalSearchParams();
  const getUserById = useGetUserById({ id });
  console.log({ getUserById: getUserById?.data });
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
          {getUserById?.data?.username}
        </Text>
        <SimpleLineIcons name="options" size={24} color={theme.color.get()} />
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
            {`${getUserById?.data?.firstName} ${getUserById?.data?.lastName}`}
          </Text>
          <Text color={theme.inputbox.get()} fontSize={14} fontWeight="bold">
            395 friends • 5 mutual
          </Text>
          <Text color={theme.inputbox.get()} fontSize={10} fontWeight="bold">
            Joined on {new Date(getUserById?.data?.createdAt)?.toLocaleDateString()}
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

        <Text color={theme.color.get()}>{getUserById?.data?.bio}</Text>
        <Text color={theme.color.get()}>Born to express not to impress</Text>
        <Text>
          🔗 <Text color={'$blue11Light'}> www.google.com</Text>
        </Text>
      </YStack>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          width: '100%',
        }}>
        {getUserById?.data?.request?.status === 'accepted' ? (
          <View style={{ display: 'flex', flexDirection: 'row', width: '100%',justifyContent:"space-between" }}>
            <Button
              outlineColor="transparent"
              backgroundColor={theme.primary.get()}
              height={30}
              width="49%"
              //   alignSelf="center"
            >
              <Text color="black" fontWeight={600}>
                Message
              </Text>
            </Button>
            <Button
              outlineColor="transparent"
              backgroundColor={theme.inputbox.get()}
              height={30}
              width="49%"
              //   alignSelf="center"
            >
              <Text color="black" fontWeight={600}>
                Unfriend
              </Text>
            </Button>
          </View>
        ) : (
          <Button
            outlineColor="transparent"
            backgroundColor={theme.primary.get()}
            height={30}
            //   alignSelf="center"
          >
            <Text color="black" fontWeight={600}>
              Send Request
            </Text>
          </Button>
        )}
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          width: '100%',
        }}>
        <Text paddingBottom={6} fontSize={16} fontWeight={600} color={theme.color.get()}>
          People you may also know
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Array(10)
            .fill(2)
            .map((_, i) => (
              <PeopleCard index={i} name={'Pranav'} userName={'@iam_pranav_'} /> // Ensure you add a unique key prop
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;
