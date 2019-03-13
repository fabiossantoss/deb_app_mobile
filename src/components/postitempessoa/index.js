import React from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';

import styles from './styles';

const moment = require('moment');

moment.locale('pt-BR');

const PostItemPessoa = ({
  data, profile, comment, information, detail,
}) => {
  const imgProfile = data.user.file.url ? data.user.file.url : '';
  console.tron.log(`profile: ${imgProfile}`);
  const imgBoddy = data.pessoa.files.length > 0 ? data.pessoa.files[0].url : '';
  const age = `${moment().diff(data.pessoa.birth_date, 'years')} ANOS`;
  const dateInfo = [
    {
      id: 0,
      title: 'LOCAL',
      content: `${data.pessoa.city} - ${data.pessoa.uf}`.toLocaleUpperCase(),
    },
    {
      id: 1,
      title: 'DATA',
      content: moment(data.pessoa.date_disappearance).format('DD/MM/YYYY'),
    },
    {
      id: 2,
      title: 'IDADE',
      content: age,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.feedHeader}>
        <TouchableOpacity onPress={() => profile(data.id)} style={styles.avatar}>
          <Image resizeMode="cover" style={styles.imgAvatar} source={{ uri: imgProfile }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => profile(data.id)} style={styles.username}>
          <Text style={styles.txtUserName}>{data.user.username}</Text>
        </TouchableOpacity>
        <View style={styles.dateArea}>
          <View style={styles.postdate}>
            <Text style={styles.txtDate}>{moment(data.created_at).format('DD/MM/YYYY h:mm')}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => detail(data.id)} style={styles.descriptionArea}>
        <Text style={styles.txtInfo}>INFORMAÇÕES DO DESAPARECIMENTO</Text>
        {dateInfo.map(item => (
          <View key={item.id} style={styles.bodyDescription}>
            <Text style={styles.txtBodyTitleDescription}>{item.title}</Text>
            <Text style={styles.txtBodyDescription}>{item.content}</Text>
          </View>
        ))}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => detail(data.id)} style={styles.viewName}>
        <Text style={styles.txtName}>{data.pessoa.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => detail(data.id)} style={styles.feedBody}>
        <Image style={styles.imgBoddy} resizeMode="cover" source={{ uri: imgBoddy }} />
      </TouchableOpacity>
      <View style={styles.feedFooter}>
        <TouchableOpacity onPress={() => information(data.id)} style={styles.commentContainer}>
          <Image source={require('../../assets/alert2.png')} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => comment(data)} style={styles.commentContainer}>
          <Image source={require('../../assets/comments.png')} style={{ width: 25, height: 25 }} />
          <Text style={{ marginLeft: 5 }}>{data.comments.length}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export default PostItemPessoa;
