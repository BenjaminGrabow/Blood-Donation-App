import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as theme from '../theme';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { style, children, ...props } = this.props;

    const blockStyles = [
      styles.block,
     style, // rewrite predefined styles
    ];

    return (
      <View style={blockStyles}  {...props}>
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
});

export default Block;
