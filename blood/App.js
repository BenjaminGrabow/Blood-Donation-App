import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Block, Text } from './components/index';
import * as theme from './theme';

export default function App() {
  return (
    <Block middle center color='primary' style={styles.container}>
      <Text>iBlood</Text>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: theme.colors.primary ,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
