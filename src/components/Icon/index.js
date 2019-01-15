import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Ioncic from 'react-native-vector-icons/Ionicons';

export default class Icon extends Component {
  render() {
    const { name, color, style, type } = this.props;

    switch (type) {
      case 'i':
        return (
          <Ioncic style={style ? style : {}}
                  name={name}
                  size={22}
                  color={color} />
        );
      case 'rounded':
        return (
          <View style={styles.rounded}>
            <Ioncic style={style ? style : {}}
                    name={name}
                    size={22}
                    color={
                        color === '#626262'
                            ? 'white'
                            : color
                    } />
          </View>
        );
      }
  }
}

Icon.defaultProps = {
  type: 'i'
};

const styles = StyleSheet.create({
  rounded: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#626262',
    justifyContent: 'center',
    alignItems: 'center'
  }
});