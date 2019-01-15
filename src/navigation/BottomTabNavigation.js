import React from 'react';
import {View } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';
import { HomeTabNavigation } from './HomeTabNavigation';
import PeopleScreen from '@screens/PeopleScreen';
import GamesScreen from '@screens/GamesScreen';
import CameraScreen from '@screens/CameraScreen';

import Icon from '@components/Icon';

const HomeTabIcon = ({ tintColor }) => (
  <View>
  <Icon name="ios-home" color={tintColor} />
  </View>
);

const PeopleTabIcon = ({ tintColor }) => (
  <View>
  <Icon name="ios-people" color={tintColor} />
  </View>
);

const CameraTabIcon = ({ tintColor }) => (
  <View>
  <Icon name="ios-camera" color={tintColor} type="rounded"/>
  </View>
);

const GameTabIcon = ({ tintColor }) => (
  <View>
  <Icon name="ios-games" color={tintColor} />
  </View>
);

const ImagenTabIcon = ({ tintColor }) => (
  <View>
  <Icon name="ios-image" color={tintColor} />
  </View>
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
      screen: CameraScreen,
      navigationOptions: ({ navigation })=>({
        header: null,
        tabBarIcon: CameraTabIcon,
        tabBarOnPress: ({ navigation })=>{
          navigation.navigate('CameraScreen');
        }
      })
    },
    GameScreen:{
      screen: GamesScreen,
      navigationOptions: {
        header: null,
        tabBarIcon: GameTabIcon
      }
    },
    PhotoScreen:{
      screen: GamesScreen,
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

