/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import NavigationStack  from '@navigation';
import { Provider as PaperProvider } from 'react-native-paper';


export default class App extends Component {
  render() {
    return (
      <PaperProvider>
        <NavigationStack />
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({

});
