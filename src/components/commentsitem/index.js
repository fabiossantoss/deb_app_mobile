import React from 'react';

import { View, Text, Image } from 'react-native';

const CommentItem = ({ data }) => {
  console.tron.log(data.user.file.url);
  const { imgUrl } = data.user.file.url;
  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: imgUrl }} style={{ width: 60, height: 60 }} />
      <Text>
        User:
        {data.user.username}
      </Text>
      <Text>{data.comment}</Text>
    </View>
  );
};

export default CommentItem;
