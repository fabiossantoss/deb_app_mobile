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
  commentContainer: {
    height: 60,
    width: 60,
  },
  container: {
    width: '100%',
  },
  dateArea: {
    alignItems: 'flex-end',
    flex: 1,
  },
  descriptionArea: {
    flexDirection: 'column',
    height: 40,
    justifyContent: 'center',
    marginLeft: 10,
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
    borderRadius: 20,
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
    height: 30,
    justifyContent: 'center',
    marginLeft: 10,
    width: 150,
  },
  txtUserName: {
    fontSize: 23,
    fontWeight: '500',
  },
});

export default styles;
