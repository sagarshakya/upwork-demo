import React, {useState} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

import {colors} from '../../config/theme';

import styles from './styles';

export const PhoneInput = ({setFieldValue, ...props}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.extensionContainer}>
        <Image
          source={require('../../../assets/images/us-flag-icon.png')}
          resizeMode="contain"
          style={styles.extensionIcon}
        />
        <Text style={styles.extensionText}>+1</Text>
      </View>
      <TextInput
        placeholder="Phone Number"
        placeholderTextColor={colors.darkGrey}
        onChangeText={(value) => {
          const cleaned = ('' + value).replace(/\D/g, '');
          const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
          if (match) {
            var intlCode = match[1] ? '+1 ' : '',
              number = [
                intlCode,
                '(',
                match[2],
                ') ',
                match[3],
                '-',
                match[4],
              ].join('');

            setFieldValue('phoneNumber', number);

            return;
          }

          setFieldValue('phoneNumber', value);
        }}
        keyboardType="phone-pad"
        returnKeyType="done"
        maxLength={14}
        style={styles.textInput}
        {...props}
      />
    </View>
  );
};
