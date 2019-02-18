import React, { Component } from 'react';

import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

class Preload extends Component {
  static navigationOtions = {
    title: '',
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Carregando STATUS:
          {this.props.loading}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
});

export default connect(
  mapStateToProps,
  null,
)(Preload);
