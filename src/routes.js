import { createStackNavigator } from 'react-navigation';
import { colors } from 'styles';

import Home from 'pages/home';
import Login from 'pages/login';
import SignUp from 'pages/signup';

const createNavigator = (isLogged = false) => createStackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home },
    SignUp: { screen: SignUp },
  },
  {
    initialRouteName: isLogged ? 'Home' : 'Login',
    navigationOptions: {
      headerTintColor: colors.green,
      headerBackTitle: null,
    },
  },
);

export default createNavigator;
