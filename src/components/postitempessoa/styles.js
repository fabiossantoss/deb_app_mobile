/* eslint-disable react-native/sort-styles */
import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 20,
    height: 40,
    marginLeft: 10,
    width: 40,
  },
  commentContainer: {
    flexDirection: 'row',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  container: {
    width: '100%',
  },
  divider: {
    height: 20,
    backgroundColor: colors.fake,
    opacity: 0.7,
  },
  dateArea: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1,
  },
  clock: {
    marginRight: 5,
    alignItems: 'center',
    width: 12,
    height: 15,
  },
  descriptionArea: {
    flexDirection: 'column',
    height: 70,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 5,
    borderWidth: 0.5,
    borderColor: colors.primary,
    backgroundColor: colors.secundary,
    padding: 5,
  },
  feedBody: {
    flex: 1,
    backgroundColor: colors.fake,
  },
  feedFooter: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  feedHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
  },
  imgAvatar: {
    borderRadius: 20,
    height: 40,
    width: 40,
  },
  imgBoddy: {
    height: metrics.screenWidth - 50,
    width: metrics.screenWidth,
  },
  iconClock: {
    height: 15,
    width: 15,
  },
  postdate: {
    flexDirection: 'row',
    height: 20,
    marginRight: 12,
    justifyContent: 'flex-end',
    width: 150,
  },
  username: {
    height: 30,
    justifyContent: 'center',
    marginLeft: 10,
  },
  txtUserName: {
    fontFamily: 'Roboto',
    fontSize: 23,
    fontWeight: '100',
    color: colors.secundary,
  },
  txtDate: {
    color: colors.secundary,
    fontFamily: 'Roboto',
    fontSize: 10,
    fontWeight: '100',
    height: 20,
  },
  txtInfo: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 11,
    fontWeight: '100',
    color: colors.white,
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
    fontWeight: '200',
    color: colors.secundary,
    marginLeft: 10,
  },
  txtAge: {
    fontSize: 15,
    fontWeight: '500',
  },
  bodyDescription: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: colors.secundary,
  },
  txtBodyTitleDescription: {
    fontFamily: 'Roboto',
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.white,
    width: 50,
  },
  txtBodyDescription: {
    fontFamily: 'Roboto',
    fontSize: 11,
    fontWeight: '100',
    color: colors.white,
  },
});

export default styles;
