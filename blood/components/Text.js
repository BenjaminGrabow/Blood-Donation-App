import React from 'react';
import {Text , StyleSheet, View} from 'react-native';

import * as theme from '../theme';

class Typography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { style, children, ...props } = this.props;

    const textStyles = [
      styles.block,
     style, // rewrite predefined styles
    ];

    return ( 
      <Text style={textStyles} {...props}>
        {children}
      </Text>
      );
  }
}

const styles = StyleSheet.create({
  //default style
  text: {
    fontSize: theme.sizes.font,
    color: theme.colors.black,
  },
});
 
export default Typography;