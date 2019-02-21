import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const PostItem = ({ data, nav }) => {
  let title = '';
  let imgBoddy = '';
  let commentsCount = 0;

  if (data.pessoa) {
    title = data.pessoa.name;
    imgBoddy = data.pessoa.files.length > 0 ? data.pessoa.files[0].url : '';
    commentsCount = data.comments.length;
  } else if (data.automobile) {
    title = data.automobile.title;
    imgBoddy = data.automobile.files.length > 0 ? data.automobile.files[0].url : '';
    commentsCount = data.comments.length;
  }

  return (
    <View style={styles.container}>
      <View style={styles.feedHeader}>
        <View style={styles.avatar}>
          <Image style={styles.imgAvatar} source={{ uri: data.user.file[0].url }} />
        </View>
        <View style={styles.username}>
          <Text>{title}</Text>
        </View>
        <View style={styles.dateArea}>
          <View style={styles.postdate} />
        </View>
      </View>
      <View style={styles.feedBody}>
        <Image style={styles.imgBoddy} resizeMode="cover" source={{ uri: imgBoddy }} />
      </View>
      <View style={styles.feedFooter}>
        <View style={styles.alertContainer}>
          <Text>{'<3'}</Text>
        </View>
        <View style={styles.commentContainer}>
          <Text>{commentsCount}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostItem;
