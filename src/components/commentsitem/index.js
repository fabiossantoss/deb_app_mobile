import React from 'react';

import { View, Text, Image } from 'react-native';

import styles from './styles';

const CommentItem = ({ data }) => {
  console.tron.log(data.user.file.url);
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.user.file.url }} style={styles.imgAvatar} />
      <View style={styles.comment}>
        <Text style={styles.username}>{data.user.username}</Text>
        <Text style={styles.commenttext}>{data.comment}</Text>
      </View>
    </View>
  );
};

export default CommentItem;
