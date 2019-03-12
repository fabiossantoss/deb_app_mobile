import React from 'react';

import { View, TextInput } from 'react-native';

import styles from './styles';

const CommentsArea = () => (
  <View style={styles.container}>
    <TextInput style={styles.input} />
  </View>
);

export default CommentsArea;
