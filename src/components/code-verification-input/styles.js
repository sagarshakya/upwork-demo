import {StyleSheet} from 'react-native';

import {colors, spacings} from '../../config/theme';

export default StyleSheet.create({
  cellContainer: {
    alignItems: 'center',
    borderColor: colors.lightGrey,
    backgroundColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 3,
    height: 70,
    width: 50,
    padding: spacings.xs,
  },
  cell: {
    fontSize: 40,
  },
});
