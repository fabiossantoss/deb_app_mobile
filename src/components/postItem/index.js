import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const PostItem = () => (
  <View style={styles.container}>
    <View style={styles.feedHeader}>
      <View style={styles.avatar} />
      <View style={styles.username} />
      <View style={styles.dateArea}>
        <View style={styles.postdate} />
      </View>
    </View>
    <View style={styles.feedBody} />
  </View>
);

export default PostItem;
