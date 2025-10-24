
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

const ZhiveDashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Hive</Text>
      <Text style={styles.subtitle}>Buzzing Tasks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
    color: theme.colors.primary,
  },
    subtitle: {
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    color: theme.colors.text,
    marginTop: 8,
  },
});

export default ZhiveDashboard;
