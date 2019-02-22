import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const PostItem = ({ data, nav }) => {
  const titleProfile = data.user.username;
  let titlePost = data.user.username;
  const avatarProfileUrl = data.user.file.length > 0 ? data.user.file[0].url : '';
  let imgBoddy = '';
  let commentsCount = 0;

  if (data.pessoa) {
    titlePost = data.user.username;
    imgBoddy = data.pessoa.files.length > 0 ? data.pessoa.files[0].url : '';
    commentsCount = data.comments.length;
  } else if (data.automobile) {
    titlePost = data.automobile.title;
    imgBoddy = data.automobile.files.length > 0 ? data.automobile.files[0].url : '';
    commentsCount = data.comments.length;
  }

  return (
    <View style={styles.container}>
      <View style={styles.feedHeader}>
        <View style={styles.avatar}>
          <Image style={styles.imgAvatar} source={{ uri: avatarProfileUrl }} />
        </View>
        <View style={styles.username}>
          <Text>{titleProfile}</Text>
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
