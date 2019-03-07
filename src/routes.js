import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { colors } from 'styles';


import SignIn from 'pages/signin';
// import Home from 'pages/home';
import Explore from 'pages/explore';
import Profile from 'pages/profile';
import SignUp from 'pages/signup';
import PostsPessoas from 'pages/postspessoas';
import Comments from 'pages/comments';
import PostsAutomobile from 'pages/postsautomobiles';


const createNavigator = (isLogged = false) => createStackNavigator(
  {
    SignIn: { screen: SignIn },
    TabNavigator: createBottomTabNavigator({
      PostsPessoas: { screen: PostsPessoas },
      PostsAutomobile: { screen: PostsAutomobile },
      Explore: { screen: Explore },
      ProfilePosts: { screen: Profile },
    },
    {
      navigationOptions: {
        header: null,      
      },
      tabBarOptions: {
        showLabel: false,
        activeTintColor: colors.white,
        inactiveBackgroundColor: colors.secundary,
        style: { backgroundColor: colors.yellow },
      },
    }),
    SignUp: { screen: SignUp },
    Profile: { screen: Profile },
    Comments: {screen: Comments },
  },
  {
    initialRouteName: isLogged ? 'TabNavigator' : 'SignIn',
  },
);

export default createNavigator;
