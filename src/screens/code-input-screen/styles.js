import {StyleSheet} from 'react-native';

import {colors, spacings, typography} from '../../config/theme';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.light,
  },
  formContainer: {
    paddingHorizontal: spacings.md,
    alignItems: 'center',
  },
  buttonHeading: {
    ...typography.p2,
    color: colors.darkGrey,
  },
});
