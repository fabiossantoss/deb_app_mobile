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
    height: 60,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 5,
    backgroundColor: colors.darkTransparent,

    borderRadius: 10,
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
    fontSize: 23,
    fontWeight: '300',
    fontFamily: 'Roboto',
  },
  viewName: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 30,
    width: '100%',
    flexDirection: 'row',
  },
  txtName: {
    fontSize: 23,
    fontWeight: '500',
    color: colors.green,
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
    color: colors.white,
    fontSize: 17,
    fontWeight: 'bold',
    width: 50,
  },
  txtBodyDescription: {
    color: colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
