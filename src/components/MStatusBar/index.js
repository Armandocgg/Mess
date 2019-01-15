/* StatuBar component  
 * only works/needed on Android
 */

import React from 'react';
import { Platform, StyleSheet, View, StatusBar } from 'react-native';

export default MStatusBar= ()=>{
    return (
        <View style={styles.statusBar}>
          <StatusBar barStyle="light-content" />
        </View>
    );
};

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
    backgroundColor: "#0084ff"
  },
  iOsStatusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    height: APPBAR_HEIGHT
  }
});
