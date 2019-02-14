import React, { Fragment, Component } from 'react';
import { AsyncStorage } from 'react-native';
import { createAppContainer } from 'react-navigation';

import createNavigator from './routes';

export default class App extends Component {
  state = {
    tokenChecked: false,
    tokenExists: false,
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem('@DebApp:token');
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
      <Fragment>
        <ContainerRoutes />
      </Fragment>
    );
  }
}
