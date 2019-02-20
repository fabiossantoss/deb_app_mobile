import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  form: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  logoText: {
    color: colors.white,
    fontFamily: 'Devil Breeze Bold',
    fontSize: 50,
    fontWeight: '600',
    marginBottom: 30,
  },
  textInput: {
    backgroundColor: colors.whiteTransparent,
    borderRadius: metrics.baseRadius,
    color: colors.white,
    fontSize: 16,
    height: 50,
    marginBottom: 10,
    textAlign: 'center',
    width: '90%',
  },
  textSignUp: {
    color: colors.white,
    fontSize: 13,
    marginTop: 20,
  },
  textTouchable: {
    color: colors.white,
    fontSize: 16,
  },

  touchable: {
    alignItems: 'center',
    backgroundColor: colors.transparent,
    borderColor: colors.white,
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    height: 40,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: metrics.baseMargin,
    width: '90%',
  },
  touchableSignUp: {
    alignItems: 'center',
    backgroundColor: colors.transparent,
    borderColor: colors.white,
    height: 40,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: metrics.baseMargin,
    width: '90%',
  },
});

export default styles;
