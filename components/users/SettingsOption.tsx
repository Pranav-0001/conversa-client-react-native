import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';
import { Text, useTheme, XStack } from 'tamagui';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function SettingsOption({
  Icon,
  iconProps,
  label,
  onPress,
  themeSettings,
}: {
  Icon: any;
  iconProps: any;
  label: String;
  onPress: Function;
  themeSettings: Boolean | null | undefined;
}) {
  const theme = useTheme({ name: 'dark' });
  return (
    <XStack
      justifyContent="space-between"
      backgroundColor={theme.secondary.get()}
      paddingHorizontal={10}
      paddingVertical={10}
      borderRadius={10}
      onPress={() => onPress()}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <Icon {...iconProps} />
        <Text fontSize={16} fontWeight={600} color={theme.color.get()}>
          {label}
        </Text>
      </View>
      {themeSettings ? (
        <MaterialIcons name="light-mode" size={24} color={theme.primary.get()}  />
        // <MaterialIcons name="dark-mode" size={24} color={theme.primary.get()}  />
      ) : (
        <AntDesign name="right" size={20} color={theme.primary.get()} />
      )}
    </XStack>
  );
}
