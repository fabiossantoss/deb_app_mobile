import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
  },
  logoText: {
    color: colors.green,
    fontFamily: 'Devil Breeze Bold',
    fontSize: 50,
    fontWeight: '600',
  },
  postNull: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  posts: {
    flex: 1,
  },
  text: {
    color: colors.green,
    fontFamily: 'Devil Breeze Bold',
    fontWeight: 'bold',
  },

  touchable: {
    alignItems: 'center',
    backgroundColor: colors.transparent,
    borderColor: colors.green,
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: metrics.baseMargin,
    paddingHorizontal: metrics.basePadding,
    width: 150,
  },

  viewButtons: {
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default styles;
