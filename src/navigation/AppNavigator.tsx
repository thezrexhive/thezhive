
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainTabs from './MainTabs';
import { theme } from '../theme/theme';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer theme={{
    dark: true,
    colors: {
      primary: theme.colors.primary,
      background: theme.colors.primaryBackground,
      card: theme.colors.surface,
      text: theme.colors.text,
      border: theme.colors.surface,
      notification: theme.colors.primary,
    }
  }}>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="Main" component={MainTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
