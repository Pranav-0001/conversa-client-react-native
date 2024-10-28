import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { Button } from '~/components/Button';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Details() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: 'Details' }} />
      <Container>
        <ScreenContent path="screens/details.tsx" title={`Showing details for user ${name}`} />
        <Link href={{ pathname: '/details', params: { name: Date.now() } }} asChild>
          <Button title="Show Details" />
        </Link>
      </Container>
    </>
  );
}
