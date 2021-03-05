import {StyleSheet} from 'react-native';

import {typography, colors, spacings} from '../../config/theme';

export default StyleSheet.create({
  solidModeContainer: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    width: '100%',
  },
  disabledContainer: {
    opacity: 0.7,
  },
  solidModeButton: {
    width: '100%',
    padding: spacings.md,
    alignItems: 'center',
  },
  text: {
    ...typography.p2,
  },
  textModeText: {
    textDecorationLine: 'underline',
    textDecorationColor: colors.ternary,
    textDecorationStyle: 'double',
  },
  solidModeText: {
    color: colors.light,
  },
});
