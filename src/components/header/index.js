import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

export const Header = ({title, subtitle}) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../../assets/images/phone-icon.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
