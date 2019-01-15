import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { BottomTabNavigation } from './BottomTabNavigation';
import CameraScreen from '@screens/CameraScreen';
import SearchScreen from '@screens/SearchScreen';

import SearchHeader from '@components/SearchHeader';

const SearchStack = createStackNavigator(
  {
    BottomTabNavigation: {
      screen: BottomTabNavigation,
      navigationOptions: { gesturesEnabled: false}
    },

    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: { gesturesEnabled: false}
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const ModalStack = createStackNavigator(
  {
    SearchStack: {
      screen: SearchStack,
      navigationOptions: ({ navigation }) => ({
        gesturesEnabled: false,
        header: <SearchHeader navigation={ navigation } />
      })
    },
    CameraScreen: {
      screen: CameraScreen,
      navigationOptions: { gesturesEnabled: false, header: null}
    }
  },
  {
    mode: 'modal'
  }
);

const MessagerApp = createStackNavigator(
  {
    MainScreen: {
      screen: ModalStack,
      navigationOptions: { gesturesEnabled: false, header: null }
    }
  }
);

export default MessagerApp;