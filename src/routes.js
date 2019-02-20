import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { colors } from 'styles';


import SignIn from 'pages/signin';
import Home from 'pages/home';
import Explore from 'pages/explore';
import Profile from 'pages/profile';
import SignUp from 'pages/signup';

const createNavigator = (isLogged = false) => createStackNavigator(
  {
    SignIn: { screen: SignIn },
    TabNavigator: createBottomTabNavigator({
      Home: { screen: Home },
      Explore: { screen: Explore },
      Profile: { screen: Profile },
    },
    {
      navigationOptions: {
        header: null,      
      },
      tabBarOptions: {
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.white,
        inactiveBackgroundColor: colors.secundaryDark,
        style: { backgroundColor: colors.green },
      },
    }),
    SignUp: { screen: SignUp },
  },
  {
    initialRouteName: isLogged ? 'TabNavigator' : 'SignIn',
  },
);

export default createNavigator;
