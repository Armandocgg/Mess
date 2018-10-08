import React from 'react';

import { createBottomTabNavigator } from 'react-navigation';
import { HomeTabNavigation } from './HomeTabNavigation';
import PeopleScreen from '@screens/PeopleScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeTabIcon = ({ tintColor }) => (
  <Ionicons name="ios-home" size={20} color={tintColor} />
);

const PeopleTabIcon = ({ tintColor }) => (
  <Ionicons name="ios-people" size={20} color={tintColor} />
);

const CameraTabIcon = ({ tintColor }) => (
  <Ionicons name="ios-camera" size={20} color={tintColor} />
);

const GameTabIcon = ({ tintColor }) => (
  <Ionicons name="ios-people" size={20} color={tintColor} />
);

const ImagenTabIcon = ({ tintColor }) => (
  <Ionicons name="ios-image" size={20} color={tintColor} />
);


export const BottomTabNavigation = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeTabNavigation,
      navigationOptions: {
        header: null,
        tabBarIcon: HomeTabIcon
      }
    },
    PeopleScreen:{
      screen: PeopleScreen,
      navigationOptions: {
        header: null,
        tabBarIcon: PeopleTabIcon
      }
    },
    CamaraScreen:{
      screen: PeopleScreen,
      navigationOptions: {
        header: null,
        tabBarIcon: CameraTabIcon
      }
    },
    GameScreen:{
      screen: PeopleScreen,
      navigationOptions: {
        header: null,
        tabBarIcon: GameTabIcon
      }
    },
    PhotoScreen:{
      screen: PeopleScreen,
      navigationOptions: {
        header: null,
        tabBarIcon: ImagenTabIcon
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#0084ff',
      inactiveTintColor: '#626262',
      pressColor: '#7f8c8d',
    }
  }
);

