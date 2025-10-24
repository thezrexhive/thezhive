
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../../components/Card';
import { theme } from '../../theme/theme';

const TheDailyBuzzScreen = () => (
  <View style={styles.container}>
    <Text style={styles.header}>The Daily Buzz</Text>
    <Card>
      <Text style={styles.cardTitle}>Post Idea</Text>
      <Text style={styles.cardText}>
        "The future of AI in creative fields. What are your thoughts? #AI #Art"
      </Text>
    </Card>
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
  cardTitle: {
    ...theme.typography.body,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 8,
  },
  cardText: {
    ...theme.typography.body,
    color: theme.colors.secondaryText,
  },
});

export default TheDailyBuzzScreen;
