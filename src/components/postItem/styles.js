import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: colors.green,
    borderRadius: 20,
    height: 40,
    marginLeft: 10,
    opacity: metrics.opacityfake,
    width: 40,
  },
  container: {
    height: 300,
    width: '100%',
  },
  dateArea: {
    alignItems: 'flex-end',
    flex: 1,
  },
  feedBody: {
    backgroundColor: colors.green,
    flex: 1,
  },
  feedHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 70,
  },
  postdate: {
    backgroundColor: colors.green,
    height: 15,
    marginRight: 10,
    opacity: metrics.opacityfake,
    width: 80,
  },
  username: {
    backgroundColor: colors.green,
    height: 15,
    marginLeft: 10,
    opacity: metrics.opacityfake,
    width: 150,
  },
});

export default styles;
