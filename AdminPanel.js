
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

export default function AdminPanel({ route }) {
  const [signal, setSignal] = useState({ instrument: '', quantity: '', price: '', order_type: 'BUY' });

  const postSignal = async () => {
    await axios.post('https://your-backend-url/api/signal', signal);
    alert('Signal posted!');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Post Trade Signal</Text>
      <TextInput placeholder="Instrument" onChangeText={(v) => setSignal({ ...signal, instrument: v })} style={{ borderWidth: 1, marginVertical: 5 }} />
      <TextInput placeholder="Quantity" keyboardType="numeric" onChangeText={(v) => setSignal({ ...signal, quantity: v })} style={{ borderWidth: 1, marginVertical: 5 }} />
      <TextInput placeholder="Price" keyboardType="numeric" onChangeText={(v) => setSignal({ ...signal, price: v })} style={{ borderWidth: 1, marginVertical: 5 }} />
      <Button title="Send Signal" onPress={postSignal} />
    </View>
  );
}
