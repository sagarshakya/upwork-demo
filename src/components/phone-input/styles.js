import {StyleSheet} from 'react-native';

import {colors, spacings, typography} from '../../config/theme';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.secondary,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 3,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacings.xs,
  },
  extensionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacings.xs,
  },
  extensionIcon: {
    height: 30,
    width: 30,
    marginRight: spacings.xxs,
  },
  extensionText: {
    ...typography.p2,
  },
  textInput: {
    ...typography.p2,
    flex: 1,
    padding: 0,
  },
});
