import { Link, Stack, router } from 'expo-router';
import { Text } from 'react-native';
import { Theme, YStack, useMedia, useTheme } from 'tamagui';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home({}) {
  const theme = useTheme({ name: 'light' });
  const media = useMedia();


  return (
    <>
      <Theme name="dark">
        <Stack.Screen options={{ title: 'Home' }} />
        <Container>
          <ScreenContent path="app/index.tsx" title="Home" />
          <Button onPress={() => router.push('/auth/signup')} title="Show Details" />
          <Link href={{ pathname: '/(app)/user/profile' }} asChild>
            <Button title="Show Details" />
          </Link>
          <YStack y={media.sm ? 10 : 0}>
            <Text style={{ color: theme.color.val }}>Hekki</Text>
          </YStack>
        </Container>
      </Theme>
    </>
  );
}
