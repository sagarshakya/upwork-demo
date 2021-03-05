import {StyleSheet} from 'react-native';

import {colors, spacings} from '../../config/theme';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.light,
  },
  formContainer: {
    paddingHorizontal: spacings.md,
    alignItems: 'center',
  },
});
