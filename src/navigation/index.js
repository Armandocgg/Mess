import { createStackNavigator } from 'react-navigation';
import { BottomTabNavigation } from './BottomTabNavigation';

const MessagerApp = createStackNavigator(
  {
    // SplashScreen: {
    //   screen: SplashScreen,
    // },
    MainScreen: {
      screen: BottomTabNavigation
    }
  }
);

export default MessagerApp;