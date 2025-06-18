
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './screens/AuthScreen';
import AdminPanel from './screens/AdminPanel';
import TraderDashboard from './screens/TraderDashboard';
import BrokerConnect from './screens/BrokerConnect';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Admin" component={AdminPanel} />
        <Stack.Screen name="Trader" component={TraderDashboard} />
        <Stack.Screen name="Connect" component={BrokerConnect} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
