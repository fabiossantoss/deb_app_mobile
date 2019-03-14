/* eslint-disable react-native/sort-styles */
import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  comment: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: colors.grayligth,
    padding: 7,
    marginHorizontal: 5,
  },
  imgAvatar: {
    borderRadius: 20,
    height: 40,
    width: 40,
  },
  username: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: colors.black,
    fontWeight: '300',
    marginHorizontal: 5,
  },
  commenttext: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: colors.dark,
    fontWeight: '300',
    marginTop: 3,
    marginHorizontal: 5,
  },
});

export default styles;
