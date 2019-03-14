import { StyleSheet } from 'react-native';

import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayligth,
    borderRadius: 15,
    flexDirection: 'row',
    height: 50,
    margin: 10,
    maxHeight: 120,
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: colors.black,
    height: 1,
    marginHorizontal: 2,
    opacity: 0.6,
  },
  input: {
    flex: 1,
    height: 45,
    marginHorizontal: 5,
    padding: 10,
  },
});

export default styles;
