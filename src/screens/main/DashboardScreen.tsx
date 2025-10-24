
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Card from '../../components/Card';
import { theme } from '../../theme/theme';

const DashboardScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.header}>Good Morning!</Text>
    <Card>
      <Text style={styles.cardTitle}>Recent Activity</Text>
      <Text style={styles.cardText}>- Post idea generated</Text>
      <Text style={styles.cardText}>- Blueprint updated</Text>
    </Card>
    <Card>
      <Text style={styles.cardTitle}>Quick Stats</Text>
      <Text style={styles.cardText}>- 3 new followers</Text>
      <Text style={styles.cardText}>- 12% engagement increase</Text>
    </Card>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primaryBackground,
  },
  header: {
    ...theme.typography.header,
    color: theme.colors.text,
    margin: 16,
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

export default DashboardScreen;
