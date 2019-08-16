import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as theme from '../theme';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    // const {
    //   flex,
    //   row,
    //   column,
    //   center,
    //   middle,
    //   // color,
    //   style,
    //   children,
    //   // ...props
    // } = this.props;
    // only destructuring for beauty reasons

    const blockStyles = [
      styles.block,
      this.props.flex && { flex },
      this.props.flex === false && { flex: 0 }, // reset / disable flex
      this.props.row && styles.row,
      this.props.column && styles.column,
      this.props.center && styles.center,
      this.props.middle && styles.middle,
      this.props.color && styles[this.props.color], // predefined styles colors for backgroundColor
      this.props.color && !styles[this.props.color] && { backgroundColor: color }, // custom backgroundColor
      this.props.style, // rewrite predefined styles
    ];

    return (
      <View style={blockStyles} >
        {this.props.children}
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
  accent: { backgroundColor : theme.colors.accent},
  primary: { backgroundColor : theme.colors.primary},
  secondary: { backgroundColor : theme.colors.secondary},
  tertiary: { backgroundColor : theme.colors.tertiary},
  black: { backgroundColor : theme.colors.black},
  white: { backgroundColor : theme.colors.white},
  gray: { backgroundColor : theme.colors.gray},
  gray2:{ backgroundColor : theme.colors.gray2}
});

export default Block;
