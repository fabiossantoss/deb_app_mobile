import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  containerTitle: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
  },
  form: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  logoText: {
    color: colors.green,
    fontFamily: 'Devil Breeze Bold',
    fontSize: 50,
    fontWeight: '600',
  },
  textInput: {
    fontSize: 16,
    textAlign: 'center',
    width: 150,
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
