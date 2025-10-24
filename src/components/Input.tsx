
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { theme } from '../theme/theme';

const Input = ({ placeholder, value, onChangeText, secureTextEntry }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    placeholderTextColor={theme.colors.secondaryText}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
  />
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors.surface,
    color: theme.colors.text,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
});

export default Input;
