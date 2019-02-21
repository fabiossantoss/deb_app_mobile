import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: colors.fake,
    borderRadius: 20,
    height: 40,
    marginLeft: 10,
    opacity: metrics.opacityfake,
    width: 40,
  },
  container: {
    // backgroundColor: colors.fake,
    height: 300,
    width: '100%',
  },
  dateArea: {
    alignItems: 'flex-end',
    flex: 1,
  },
  feedBody: {
    backgroundColor: colors.fake,
    flex: 1,
  },
  feedHeader: {
    alignItems: 'center',
    // backgroundColor: colors.green,
    flexDirection: 'row',
    height: 70,
  },
  postdate: {
    backgroundColor: colors.fake,
    height: 15,
    marginRight: 10,
    opacity: metrics.opacityfake,
    width: 80,
  },
  username: {
    backgroundColor: colors.fake,
    height: 15,
    marginLeft: 10,
    opacity: metrics.opacityfake,
    width: 150,
  },
});

export default styles;
