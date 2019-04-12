import { StyleSheet } from 'react-native';
import React from 'react';

import { TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
  textInput: {
    fontSize: 14,
    height: 60,
    marginBottom: 10,
    marginRight: 5,
    textAlign: 'center',
    width: '80%',
  },
});

const TextInputPaper = ({ lbl }) => (
  <TextInput
    autoCapitalize="none"
    autoCorrect={false}
    underlineColorAndroid="transparent"
    style={styles.textInput}
    label={lbl}
    mode="outlined"
  />
);

export default TextInputPaper;
