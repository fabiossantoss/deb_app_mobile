import React, { Component } from 'react';
import { Pages } from 'react-native-pages';

import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

class Register extends React.PureComponent {
  static navigationOptions = {
    header: null,
  };

  scroll = () => {
    alert('scroll');
  };

  render() {
    return (
      <Pages indicatorOpacity={0.6} indicatorPosition="bottom">
        <Page1 />
        <Page2 />
        <Page3 />
      </Pages>
    );
  }
}

export default Register;
