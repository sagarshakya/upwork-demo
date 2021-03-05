import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

export const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../../assets/images/phone-icon.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Continue with Phone</Text>
      <Text style={styles.subtitle}>
        For faster login, and to keep the{'\n'}community safe, we need your
        number
      </Text>
    </View>
  );
};
