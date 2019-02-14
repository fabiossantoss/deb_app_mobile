import { createStackNavigator } from 'react-navigation';
import { colors } from 'styles';

import Main from 'pages/main';
import Login from 'pages/login';

const createNavigator = (isLogged = false) => createStackNavigator(
  {
    Login: { screen: Login },
    Main: { screen: Main },
  },
  {
    initialRouteName: isLogged ? 'Login' : 'Main',
    navigationOptions: {
      headerTintColor: colors.green,
      headerBackTitle: null,
    },
  },
);

export default createNavigator;
