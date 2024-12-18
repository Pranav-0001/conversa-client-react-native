import { Redirect, Slot, Stack, useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import { View, ActivityIndicator, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'tamagui';
import { useState, useEffect } from 'react';
import { socket } from '~/app/socket/socket';
import { addOnlineUser } from '../(redux)/onlineUsersSlice';
import useGetMessagesByChatIdQuery from '../(services)/api/getMessagesByChatIdQuery';
import React from 'react';

interface NotificationData {
  data: {
    payload: {
      text: string;
    };
  };
  status: boolean;
}

export default function AppLayout() {
  const [authChecked, setAuthChecked] = useState(false); // Track if authentication has been checked
  const { isAuthenticated, token, user } = useSelector((state: any) => state.auth);
  const theme = useTheme({ name: 'dark' });
  const [notifications, setNotifications] = useState<NotificationData>({
    status: false,
    data: { payload: { text: '' } },
  });
  const { chat } = useGlobalSearchParams();
  const dispatch = useDispatch();
  console.log({ token }, 'index.jsx');

  function connectToSocket() {
    console.log('Connecting to socket');
    socket.connect();
    socket.emit('join', {
      token,
    });
  }

  useEffect(() => {
    connectToSocket();
    socket.on('connected', () => {
      console.log('Connected');
    });
    socket.on('onlineUsers', ({ onlineUsers }) => {
      console.log({ onlineUsers }, 'ONLINE');
      const userIds = Object.entries(onlineUsers)
        .filter(([_, value]: [string, unknown]) => Array.isArray(value) && value.length > 0)
        .map(([key]) => key);
      console.log({ userIds }, 'USERIDS');
      dispatch(addOnlineUser(userIds));
    });
    socket.on('messageReceived', (data) => {
      if (data?.chat !== chat) {
      }
    });

    return () => {
      socket.disconnect();
      socket.off('connected');
      socket.off('onlineUsers');
      socket.off('messageReceived');
    };
  }, [user?._id]);

  // Set authChecked to true when authentication state is known
  useEffect(() => {
    if (isAuthenticated !== undefined) {
      setAuthChecked(true);
    }
  }, [isAuthenticated]);

  if (!authChecked) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.background.get(),
        }}>
        <Stack.Screen options={{ headerShown: false }} />
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!isAuthenticated) {
    return <Redirect href="/auth/login" />;
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Slot />
      {notifications.status && (
        <View
          style={{
            position: 'absolute',
            top: 40,
            right: 20,
            backgroundColor: theme.primary.get(),
            padding: 10,
            borderRadius: 8,
            zIndex: 1000,
          }}>
          <Text style={{ color: 'white' }}>{notifications?.data?.payload?.text}</Text>
        </View>
      )}
    </>
  );
}
