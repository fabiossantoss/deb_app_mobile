import { createStackNavigator } from 'react-navigation';
import { colors } from 'styles';

import Main from 'pages/main';
import Login from 'pages/login';
import Preload from 'pages/preload';

const createNavigator = (isLogged = false) => createStackNavigator(
  {
    // Login: { screen: Login },
    // Main: { screen: Main },
    Preload: { screen: Preload },
  },
  {
    // initialRouteName: isLogged ? 'Login' : 'Main',
    navigationOptions: {
      headerTintColor: colors.green,
      headerBackTitle: null,
    },
  },
);

export default createNavigator;
