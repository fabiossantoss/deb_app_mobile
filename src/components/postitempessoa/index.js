import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const PostItemPessoa = ({ data, nav }) => {
  const avatarProfileUrl = data.user.file.length > 0 ? data.user.file[0].url : '';
  const imgBoddy = data.pessoa.files.length > 0 ? data.pessoa.files[0].url : '';

  return (
    <View style={styles.container}>
      <View style={styles.feedHeader}>
        <View style={styles.avatar}>
          <Image style={styles.imgAvatar} source={{ uri: avatarProfileUrl }} />
        </View>
        <View style={styles.username}>
          <Text style={styles.txtUserName}>{data.user.username}</Text>
        </View>
        <View style={styles.dateArea}>
          <View style={styles.postdate} />
        </View>
      </View>
      <View style={styles.descriptionArea}>
        <Text>{data.title}</Text>
        <Text>{data.description}</Text>
      </View>
      <View style={styles.feedBody}>
        <Image style={styles.imgBoddy} resizeMode="cover" source={{ uri: imgBoddy }} />
      </View>
      <View style={styles.feedFooter}>
        <View style={styles.alertContainer}>
          <Text>{'<3'}</Text>
        </View>
        <View style={styles.commentContainer}>
          <Text>{data.comments.length}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostItemPessoa;
