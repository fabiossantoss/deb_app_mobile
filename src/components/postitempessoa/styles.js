/* eslint-disable react-native/sort-styles */
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
    height: 70,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 5,
    borderWidth: 0.5,
    borderColor: colors.primary,
    padding: 5,
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
    width: 250,
  },
  txtUserName: {
    fontFamily: 'Roboto',
    fontSize: 23,
    fontWeight: '100',
  },
  txtInfo: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 11,
    fontWeight: '100',
  },
  viewName: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 30,
    justifyContent: 'flex-start',
    width: '100%',
  },
  txtName: {
    fontSize: 23,
    fontWeight: '500',
    marginLeft: 10,
  },
  txtAge: {
    fontSize: 15,
    fontWeight: '500',
  },
  bodyDescription: {
    flexDirection: 'row',
    flex: 1,
  },
  txtBodyTitleDescription: {
    fontFamily: 'Roboto',
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.dark,
    width: 50,
  },
  txtBodyDescription: {
    fontFamily: 'Roboto',
    fontSize: 11,
    fontWeight: '100',
    color: colors.primaryDark,
  },
});

export default styles;
