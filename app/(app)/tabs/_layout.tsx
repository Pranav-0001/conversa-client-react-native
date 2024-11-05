import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Stack, Tabs } from 'expo-router';
import { useTheme, View } from 'tamagui';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
  const theme = useTheme({ name: 'dark' });
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

        <Tabs
          screenOptions={{
            tabBarActiveTintColor: theme.primary.get(),
            tabBarInactiveTintColor: theme.inputbox.get(),
            tabBarStyle: {
              backgroundColor: theme.secondary.get(),
              borderTopWidth: 0,
              height: 60,
              paddingBottom: 10,
              paddingTop: 10,
            },
          }}>
          <Tabs.Screen
            name="chat"
            options={{
              title: 'chat',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="message" size={24} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="friends"
            options={{
              title: 'Friends',
              tabBarIcon: ({ color }) => <Entypo name="users" size={24} color={color} />,
            }}
          />
           <Tabs.Screen
            name="friendRequests"
            options={{
              title: 'Friend Requests',
              tabBarIcon: ({ color }) => <Entypo name="add-user" size={24} color={color} />,
            }}
          />
           <Tabs.Screen
            name="users"
            options={{
              title: 'Users',
              tabBarIcon: ({ color }) => <FontAwesome name="users" size={24} color={color} />,
            }}
          />
        </Tabs>
    
    </>
  );
}
