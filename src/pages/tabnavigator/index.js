import { createBottomTabNavigator } from 'react-navigation';
import { colors } from 'styles';


import Explore from 'pages/explore';
import Profile from 'pages/profile';
import PostsPessoas from 'pages/postspessoas';
import PostsAutomobile from 'pages/postsautomobiles';


const TabNavigator = createBottomTabNavigator({
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
});
export default TabNavigator;
