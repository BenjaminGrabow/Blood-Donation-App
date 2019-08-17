import React from 'react';
import { StyleSheet, View } from 'react-native';
// import { Font } from 'expo';

import { Block, Text } from './components/index';
import * as theme from './theme';

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  }

  loadFonts() {

  }
  render() {
    return (
      <Block middle center color='primary' style={styles.container}>
        <Text h1 color='yellow'>iBlood</Text>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
