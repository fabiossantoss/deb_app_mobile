import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  alertContainer: {
    height: 60,
    width: 60,
  },
  avatar: {
    backgroundColor: colors.fake,
    borderRadius: 20,
    height: 40,
    marginLeft: 10,
    width: 40,
  },
  container: {
    width: '100%',
  },
  commentContainer: {
    height: 60,
    width: 60,
  },

  dateArea: {
    alignItems: 'flex-end',
    flex: 1,
  },
  feedBody: {
    backgroundColor: colors.fake,
    flex: 1,
  },
  feedFooter: {
    flexDirection: 'row',
    height: 60,
  },
  feedHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 70,
  },
  imgAvatar: {
    height: 40,
    width: 40,
  },
  imgBoddy: {
    height: 300,
    width: '100%',
  },
  postdate: {
    backgroundColor: colors.fake,
    height: 15,
    marginRight: 10,
    width: 80,
  },
  username: {
    height: 25,
    justifyContent: 'center',
    marginLeft: 10,
    width: 150,
  },
});

export default styles;
