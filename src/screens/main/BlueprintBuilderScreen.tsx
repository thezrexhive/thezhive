
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import { theme } from '../../theme/theme';

const BlueprintBuilderScreen = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Blueprint Builder</Text>
    <Button title="Analyze my brand" onPress={() => {}} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primaryBackground,
    padding: 16,
  },
  header: {
    ...theme.typography.header,
    color: theme.colors.text,
    marginBottom: 24,
  },
});

export default BlueprintBuilderScreen;
