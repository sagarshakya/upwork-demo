import {StyleSheet} from 'react-native';

import {spacings, typography} from '../../config/theme';

export default StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    paddingHorizontal: spacings.md,
    paddingVertical: spacings.xl,
  },
  image: {
    height: 45,
    marginBottom: spacings.sm,
  },
  title: {
    ...typography.h4,
  },
  subtitle: {
    ...typography.p2,
    textAlign: 'center',
    marginTop: spacings.sm,
  },
});
