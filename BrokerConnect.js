
import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

export default function BrokerConnect({ route }) {
  const connect = async () => {
    const url = `https://api.upstox.com/v2/login/authorization/dialog?...&redirect_uri=https://your-server.com/redirect`;
    Linking.openURL(url);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Connect your Upstox Broker Account</Text>
      <Button title="Connect Upstox" onPress={connect} />
    </View>
  );
}
