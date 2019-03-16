import React from 'react';

import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';

import styles from './styles';

const moment = require('moment');

const CommentItem = ({ data, deletecomment }) => (
  <View>
    <View style={styles.container}>
      <Image source={{ uri: data.user.file.url }} style={styles.imgAvatar} />
      <TouchableOpacity onLongPress={() => deletecomment(data)} style={styles.comment}>
        <View style={styles.header}>
          <Text style={styles.username}>{data.user.username}</Text>
          <Text style={styles.data}>{moment(data.created_at).format('DD/MM/YYYY HH:mm')}</Text>
        </View>
        <Text style={styles.commenttext}>{data.comment}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default CommentItem;
