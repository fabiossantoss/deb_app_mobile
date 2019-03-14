import React from 'react';

import { View, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const CommentsArea = () => (
  <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'column' }}>
    <View style={styles.divider} />
    <View style={styles.container}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholderTextColor="#000"
        autoCorrect={false}
        multiline
        numberOfLines={4}
        maxLength={1000}
        placeholder="Escreve um comentário..."
        style={styles.input}
      />
      <TouchableOpacity
        style={{
          width: 40,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon name="paper-plane" size={20} color="#4169e1" />
      </TouchableOpacity>
    </View>
  </View>
);

export default CommentsArea;
