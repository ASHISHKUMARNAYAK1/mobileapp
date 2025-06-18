
import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import axios from 'axios';
import { io } from 'socket.io-client';

export default function TraderDashboard({ route, navigation }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const socket = io('https://your-backend-url');
    socket.on('new-signal', (signal) => {
      alert('New Trade Signal Received!');
    });

    axios.get('https://your-backend-url/api/order')
      .then((res) => setOrders(res.data.orders));
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>My Executed Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Text>#{item.broker_order_id} - {item.status}</Text>}
      />
      <Button title="Connect Broker" onPress={() => navigation.navigate('Connect', { email: route.params.email })} />
    </View>
  );
}
