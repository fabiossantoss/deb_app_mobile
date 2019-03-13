import React from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';

import styles from './styles';

const moment = require('moment');

moment.locale('pt-BR');

const PostItemAutomobile = ({ data, nav }) => {
  const imgProfile = data.user.file.url ? data.user.file.url : '';
  console.tron.log(`profile: ${imgProfile}`);
  const imgBoddy = data.automobile.files.length > 0 ? data.automobile.files[0].url : '';
  const dateInfo = [
    {
      id: 0,
      title: 'LOCAL',
      content: data.automobile.location_of_theft,
    },
    {
      id: 1,
      title: 'DATA',
      content: moment(data.automobile.date_of_theft).format('DD/MM/YYYY'),
    },
    {
      id: 2,
      title: 'PLACA',
      content: data.automobile.plate,
    },
    {
      id: 3,
      title: 'ANO',
      content: data.automobile.year,
    },
    {
      id: 4,
      title: 'MODELO',
      content: `${data.automobile.brand} - ${data.automobile.model}`,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.feedHeader}>
        <View style={styles.avatar}>
          <Image resizeMethod="resize" style={styles.imgAvatar} source={{ uri: imgProfile }} />
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
          <View key={item.id} style={styles.bodyDescription}>
            <Text style={styles.txtBodyTitleDescription}>{item.title}</Text>
            <Text style={styles.txtBodyDescription}>{item.content}</Text>
          </View>
        ))}
      </View>
      <View style={styles.viewName}>
        <Text style={styles.txtName}>{data.automobile.title}</Text>
      </View>
      <View style={styles.feedBody}>
        <Image style={styles.imgBoddy} resizeMode="cover" source={{ uri: imgProfile }} />
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
