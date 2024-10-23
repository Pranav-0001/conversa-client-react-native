import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { useTheme, View, YStack, Text, XStack } from 'tamagui';
import { useForm } from 'react-hook-form';
import InputField from '~/components/formFileds/InputField';
import SubmitButton from '~/components/formFileds/SubmitButton';
import { Alert } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup'; 
import * as Yup from 'yup';

export default function Signup() {
  const theme = useTheme({ name: 'dark' });

  const onSubmit = (data: any) => Alert.alert(JSON.stringify(data));
  const SignupSchema = Yup.object().shape({
    firstname: Yup.string().trim().required('First name is required'),
    lastname: Yup.string().trim().required('Last name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().trim()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password is required'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background.get() }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        backgroundColor={theme.background.get()}
        flex={1}
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center">
        <XStack
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="space-between"
          $sm={{
            justifyContent: 'center',
          }}>
          <View
            $sm={{ display: 'none' }}
            display="flex"
            width="50%"
            alignItems="center"
            justifyContent="center"
            height="100%">
            <Text color={'white'}>Welcome</Text>
          </View>

          <YStack
            justifyContent="center"
            $sm={{ width: '100%' }}
            width="50%"
            height="100%"
            alignItems="center">
            <Text fontFamily={'$lobster'} fontSize="$10" color={theme.primary.get()}>
              Signup
            </Text>
            <View
              width="60%"
              $sm={{ width: '80%' }}
              $md={{ width: '80%' }}
              style={{ display: 'flex', justifyContent: 'center' }}>
              <InputField
                label="Firstname"
                name={'firstname'}
                control={control}
                placeholder={'Enter your firstname'}
                error={errors.firstname}
              />
            </View>
            <View
              width="60%"
              $sm={{ width: '80%' }}
              $md={{ width: '80%' }}
              style={{ display: 'flex', justifyContent: 'center' }}>
              <InputField
                label="Lastname"
                name={'lastname'}
                control={control}
                placeholder={'Enter your lastname'}
                error={errors.lastname}
              />
            </View>
            <View
              width="60%"
              $sm={{ width: '80%' }}
              $md={{ width: '80%' }}
              style={{ display: 'flex', justifyContent: 'center' }}>
              <InputField
                label="Email"
                name={'email'}
                control={control}
                placeholder={'Enter your Email address'}
                error={errors.email}
              />
            </View>
            <View
              width="60%"
              $sm={{ width: '80%' }}
              $md={{ width: '80%' }}
              style={{ display: 'flex', justifyContent: 'center' }}>
              <InputField
                label="Password"
                name={'password'}
                control={control}
                placeholder={'Enter your password'}
                password
                error={errors.password}
              />
            </View>
            <View
              width="60%"
              $sm={{ width: '80%' }}
              $md={{ width: '80%' }}
              style={{ display: 'flex', justifyContent: 'start', margin: 10 }}>
              <SubmitButton label="Signup" action={handleSubmit(onSubmit)} />
            </View>
            <View display="flex">
              <Text color={theme.color.get()}>
                Already have an account?{' '}
                <Link style={{ color: theme.primary.get() }} href={'/auth/login'}>
                  Login
                </Link>
              </Text>
            </View>
          </YStack>
        </XStack>
      </View>
    </SafeAreaView>
  );
}
