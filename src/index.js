import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';

import createNavigator from './routes';

export default class App extends Component {
  state = {
    tokenChecked: false,
    tokenExists: false,
  };

  async componentDidMount() {
    // AsyncStorage.clear();

    const token = await AsyncStorage.getItem('@DebApp:token');

    // console.tron.log(await AsyncStorage.getItem('@DebApp:token'));
    // console.tron.log(await AsyncStorage.getItem('@DebApp:email'));
    // console.tron.log(await AsyncStorage.getItem('@DebApp:id'));
    // console.tron.log(await AsyncStorage.getItem('@DebApp:image'));
    // console.tron.log(await AsyncStorage.getItem('@DebApp:username'));

    this.appLoaded(token);
  }

  appLoaded = (token) => {
    this.setState({ tokenChecked: true, tokenExists: !!token });
  };

  render() {
    const { tokenChecked, tokenExists } = this.state;
    if (!tokenChecked) return null;

    const Routes = createNavigator(tokenExists);

    const ContainerRoutes = createAppContainer(Routes);

    return (
      <Provider store={store}>
        {/* <Fragment> */}
        <ContainerRoutes />
        {/* </Fragment> */}
      </Provider>
    );
  }
}
