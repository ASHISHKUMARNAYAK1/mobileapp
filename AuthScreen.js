
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function AuthScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('trader');

  const login = () => {
    if (role === 'admin') navigation.navigate('Admin', { email });
    else navigation.navigate('Trader', { email });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginVertical: 10 }} />
      <Button title="Login as Admin" onPress={() => { setRole('admin'); login(); }} />
      <Button title="Login as Trader" onPress={() => { setRole('trader'); login(); }} />
    </View>
  );
}
