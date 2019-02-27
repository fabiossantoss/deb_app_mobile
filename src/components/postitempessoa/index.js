import React from 'react';
import { View, Image, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const moment = require('moment');

moment.locale('pt-BR');

const PostItemPessoa = ({ data, nav }) => {
  const avatarProfileUrl = data.user.file.length > 0 ? data.user.file[0].url : '';
  const imgBoddy = data.pessoa.files.length > 0 ? data.pessoa.files[0].url : '';
  const age = `${moment().diff(data.pessoa.birth_date, 'years')} anos`;
  const dateInfo = [
    {
      title: 'Local',
      content: `${data.pessoa.city}/${data.pessoa.uf}  ${moment(
        data.pessoa.date_disappearance,
      ).format('DD/MM/YYYY')}`,
    },
    {
      title: 'Idade',
      content: age,
    },
  ];

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
          <View style={styles.postdate}>
            <Icon name="hour" size={15} color="#000" />
            <Text>{moment(data.created_at).format('DD/MM/YYYY h:mm')}</Text>
          </View>
        </View>
      </View>
      <View style={styles.descriptionArea}>
        {dateInfo.map(item => (
          <View style={styles.bodyDescription}>
            <Text style={styles.txtBodyTitleDescription}>{item.title}</Text>
            <Text style={styles.txtBodyDescription}>{item.content}</Text>
          </View>
        ))}
      </View>
      <View style={styles.viewName}>
        <Text style={styles.txtName}>{data.pessoa.name}</Text>
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
