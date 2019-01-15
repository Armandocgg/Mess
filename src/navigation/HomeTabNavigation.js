import { createMaterialTopTabNavigator } from 'react-navigation';
import MessagesScreen from '@screens/MessagesScreen';
import ActiveScreen from '@screens/ActiveScreen';

export const HomeTabNavigation = createMaterialTopTabNavigator(
  {
    MessagesScreen: {
      screen: MessagesScreen,
      navigationOptions: { header: null, title: 'Messages' }
    },
    ActiveScreen:{
      screen: ActiveScreen,
      navigationOptions: { header: null, title: 'Active' }
    }
  },
  {
    tabBarPosition: 'top',
    tabBarOptions: {
      activeTintColor: '#0084ff',
      inactiveTintColor: '#626262',
      pressColor: '#626262',
      indicatorStyle: {
        borderBottomColor: '#0084ff',
        borderBottomWidth: 2,
      },
      style: {
        backgroundColor: 'white',
      }
    }
  }
);