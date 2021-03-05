import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export const Button = ({
  label,
  mode = 'text',
  style,
  disabled = false,
  ...props
}) => {
  const containerStyle = mode === 'solid' && styles.solidModeContainer;
  const disabledContainerStyle =
    mode === 'solid' && disabled && styles.disabledContainer;
  const buttonStyle = mode === 'solid' && styles.solidModeButton;
  const textStyle =
    mode === 'text' ? styles.textModeTextStyle : styles.solidModeText;

  return (
    <View style={[containerStyle, disabledContainerStyle, style]}>
      <TouchableOpacity style={buttonStyle} {...props}>
        <Text style={[styles.text, textStyle]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};
