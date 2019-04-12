import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

import TextInputPaper from 'components/textinputpaper';
import TextInputDate from 'components/datemask';

import styles from './styles';

class Page extends Component {
  state = {
    date: null,
    checked: null,
  };

  render() {
    const { checked } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.viewtitle}>
          <Text style={styles.title}>INFORMAÇÕES PESSOAIS</Text>
        </View>
        <View style={styles.data}>
          <TextInputPaper lbl="Nome" />
          <TextInputPaper lbl="Nome do pai" />
          <TextInputPaper lbl="Nome da mãe" />

          <View style={[styles.data, { backgroundColor: '#bbb', flexDirection: 'row' }]}>
            <Text style={styles.textdata}>Tatuagem</Text>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                this.setState({ checked: !checked });
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Page;
