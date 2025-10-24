
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import DashboardScreen from '../screens/main/DashboardScreen';
import BlueprintBuilderScreen from '../screens/main/BlueprintBuilderScreen';
import TheHivesDNAScreen from '../screens/main/TheHivesDNAScreen';
import TheDailyBuzzScreen from '../screens/main/TheDailyBuzzScreen';
import SettingsScreen from '../screens/main/SettingsScreen';
import { theme } from '../theme/theme';

const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Dashboard') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Blueprint') {
          iconName = focused ? 'build' : 'build-outline';
        } else if (route.name === "Hive's DNA") {
          iconName = focused ? 'finger-print' : 'finger-print-outline';
        } else if (route.name === 'Daily Buzz') {
          iconName = focused ? 'newspaper' : 'newspaper-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.secondaryText,
      tabBarStyle: {
        backgroundColor: theme.colors.surface,
        borderTopColor: theme.colors.surface,
      },
      headerStyle: {
        backgroundColor: theme.colors.surface,
      },
      headerTitleStyle: {
        color: theme.colors.text,
      },
    })}
  >
    <Tab.Screen name="Dashboard" component={DashboardScreen} />
    <Tab.Screen name="Blueprint" component={BlueprintBuilderScreen} />
    <Tab.Screen name="Hive's DNA" component={TheHivesDNAScreen} />
    <Tab.Screen name="Daily Buzz" component={TheDailyBuzzScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

export default MainTabs;
