import React from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';

import styles from './styles';

const moment = require('moment');

moment.locale('pt-BR');

const PostItemAutomobile = ({ data, nav }) => {
  const avatarProfileUrl = data.user.file.length > 0 ? data.user.file[0].url : '';
  const imgBoddy = data.automobile.files.length > 0 ? data.automobile.files[0].url : '';
  const dateInfo = [
    {
      title: 'LOCAL',
      content: data.automobile.location_of_theft,
    },
    {
      title: 'DATA',
      content: moment(data.automobile.date_of_theft).format('DD/MM/YYYY'),
    },
    {
      title: 'PLACA',
      content: data.automobile.plate,
    },
    {
      title: 'ANO',
      content: data.automobile.year,
    },
    {
      title: 'MODELO',
      content: `${data.automobile.brand} - ${data.automobile.model}`,
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
            {/* <Image source={imgClock} style={styles.clock} /> */}
            <Text style={styles.txtDate}>{moment(data.created_at).format('DD/MM/YYYY h:mm')}</Text>
          </View>
        </View>
      </View>
      <View style={styles.descriptionArea}>
        <Text style={styles.txtInfo}>INFORMAÇÕES DO ROUBO/FURTO</Text>
        {dateInfo.map(item => (
          <View style={styles.bodyDescription}>
            <Text style={styles.txtBodyTitleDescription}>{item.title}</Text>
            <Text style={styles.txtBodyDescription}>{item.content}</Text>
          </View>
        ))}
      </View>
      <View style={styles.viewName}>
        <Text style={styles.txtName}>{data.automobile.title}</Text>
      </View>
      <View style={styles.feedBody}>
        <Image style={styles.imgBoddy} resizeMode="cover" source={{ uri: imgBoddy }} />
      </View>
      <View style={styles.feedFooter}>
        <TouchableOpacity style={styles.commentContainer}>
          <Image source={require('../../assets/alert2.png')} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.commentContainer}>
          <Image source={require('../../assets/comments.png')} style={{ width: 25, height: 25 }} />
          <Text style={{ marginLeft: 5 }}>{data.comments.length}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export default PostItemAutomobile;
