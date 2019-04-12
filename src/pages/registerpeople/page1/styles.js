import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  data: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textdata: {
    color: colors.secundary,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Devil Breeze Bold',
    marginHorizontal: 5,
    height: 30,
  },
  textInput: {
    // backgroundColor: colors.blackGray,
    // borderColor: colors.white,
    // borderRadius: metrics.baseRadius,
    // color: colors.white,
    fontSize: 14,
    height: 60,
    marginBottom: 10,
    marginRight: 5,
    textAlign: 'center',
    width: '80%',
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
    width: 50,
  },
  viewtitle: {
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    color: colors.secundary,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Devil Breeze Bold',
  },
});

export default styles;
