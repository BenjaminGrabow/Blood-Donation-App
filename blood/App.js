import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Block, Text } from './components/index';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>iBlood</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
