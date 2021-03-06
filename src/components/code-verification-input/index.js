import React, {useState} from 'react';
import {Keyboard, Text, View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import {spacings} from '../../config/theme';

import styles from './styles';

export const CodeVerificationInput = ({value, setFieldValue, ...props}) => {
  const [codeValue, setCodeValue] = useState('');

  const ref = useBlurOnFulfill({value, cellCount: 6});
  const [codeFieldProps, getCellOnLayoutHandler] = useClearByFocusCell({
    codeValue,
    setCodeValue,
  });

  return (
    <CodeField
      ref={ref}
      {...codeFieldProps}
      value={codeValue}
      onChangeText={(text) => {
        setCodeValue(text);
        setFieldValue('verificationCode', text);
      }}
      cellCount={4}
      keyboardType="number-pad"
      returnKeyType="done"
      onSubmitEditing={Keyboard.dismiss}
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <View
          style={[
            styles.cellContainer,
            index !== 0 && {marginLeft: spacings.sm},
          ]}>
          <Text
            key={index}
            style={styles.cell}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        </View>
      )}
      {...props}
    />
  );
};
