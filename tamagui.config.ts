import { createAnimations } from '@tamagui/animations-react-native';
import { createInterFont } from '@tamagui/font-inter';
import { createMedia } from '@tamagui/react-native-media-driver';
import { shorthands } from '@tamagui/shorthands';
import { tokens } from '@tamagui/themes';
import {
  createTamagui,
  styled,
  SizableText,
  H1,
  YStack,
  Button as ButtonTamagui,
  createFont,
} from 'tamagui';

const animations = createAnimations({
  bouncy: {
    damping: 10,
    mass: 0.9,
    stiffness: 100,
    type: 'spring',
  },
  lazy: {
    damping: 20,
    type: 'spring',
    stiffness: 60,
  },
  quick: {
    damping: 20,
    mass: 1.2,
    stiffness: 250,
    type: 'spring',
  },
});

const headingFont = createInterFont();

const bodyFont = createInterFont();
const Lobster = createFont({
  family: 'Lobster',
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
  },
  weight: {
    4: '400',
  },
  letterSpacing: {
    4: 0,
  },
});

export const Container = styled(YStack, {
  flex: 1,
  padding: 24,
});

export const Main = styled(YStack, {
  flex: 1,
  justifyContent: 'space-between',
  maxWidth: 960,
});

export const Title = styled(H1, {
  color: '#000',
  size: '$12',
});

export const Subtitle = styled(SizableText, {
  color: '#38434D',
  size: '$9',
});

export const Button = styled(ButtonTamagui, {
  backgroundColor: '#6366F1',
  borderRadius: 28,
  hoverStyle: {
    backgroundColor: '#5a5fcf',
  },
  pressStyle: {
    backgroundColor: '#5a5fcf',
  },
  maxWidth: 500,

  // Shaddows
  shadowColor: '#000',
  shadowOffset: {
    height: 2,
    width: 0,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  // Button text
  color: '#FFFFFF',
  fontWeight: '600', // Is not passed down to the text. Probably a bug in Tamagui: https://github.com/tamagui/tamagui/issues/1156#issuecomment-1802594930
  fontSize: 16,
});

const config = createTamagui({
  defaultFont: 'body',
  animations,
  shorthands,
  fonts: {
    body: bodyFont,
    heading: headingFont,
    lobster: Lobster,
  },
  themes: {
    dark: {
      background: '#1E1E1E',
      color: '#FEFEFE',
      primary: '#FDBF48',
      secondary: '#333333',
      inputbox: 'A3A3A3',
    },
    light: {
      background: '#FFFFFF',
      color: '#1E1E1E',
      primary: '#FDBF48',
      secondary: '#F2F2F2',
      inputbox: '#7D7D7D ',
    },
  },
  tokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
});

type AppConfig = typeof config;

// Enable auto-completion of props shorthand (ex: jc="center") for Tamagui templates.
// Docs: https://tamagui.dev/docs/core/configuration

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
