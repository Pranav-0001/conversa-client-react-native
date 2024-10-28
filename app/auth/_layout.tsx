import { Redirect, Slot, Stack } from 'expo-router';
import { useSelector } from 'react-redux';

export default function AuthLayout() {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect href="/(app)/tabs/chat" />;
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Slot />
    </>
  );
}
