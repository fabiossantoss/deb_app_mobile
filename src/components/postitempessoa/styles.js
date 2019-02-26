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
    height: 80,
    justifyContent: 'center',
    marginLeft: 10,
  },
  feedBody: {
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
    height: 250,
    width: '100%',
  },
  iconClock: {
    height: 15,
    width: 15,
  },
  postdate: {
    flexDirection: 'row',
    height: 20,
    marginRight: 10,
    justifyContent: 'center',
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
  txtName: {
    fontSize: 23,
    fontWeight: '500',
  },
  bodyDescription: {
    flexDirection: 'row',
  },
  txtBodyTitleDescription: {
    color: colors.dark,
    fontSize: 17,
    fontWeight: 'bold',
    width: 100,
  },
  txtBodyDescription: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
