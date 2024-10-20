import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useTheme } from 'tamagui';
import { useController } from 'react-hook-form';

export default function InputField({ label, name, control, placeholder, password = false }) {
  const theme = useTheme({ name: 'dark' });
  const { field } = useController({
    control,
    defaultValue: '',
    name,
  });
  return (
    <View style={{ width: '100%' }}>
      {label && <Text style={{ color: theme.color.get(), paddingBottom: '3px' }}>{label}</Text>}
      <TextInput
        style={{
          backgroundColor: theme.secondary.get(),
          padding: 10,
          borderRadius: 5,
          outline: 'none',
          color: theme?.color.get(),
        }}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        secureTextEntry={password}
        value={field.value}
        onChangeText={field?.onChange}
      />
    </View>
  );
}
