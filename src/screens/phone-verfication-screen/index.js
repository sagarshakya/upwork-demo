import React from 'react';
import {KeyboardAvoidingView, Text, View, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Formik} from 'formik';

import {colors, spacings, typography} from '../../config/theme';

import {Button, Header, PhoneInput, VerticalSpacer} from '../../components';

import styles from './styles';

export const PhoneVerificationScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>
        <Header />
        <Formik
          initialValues={{phoneNumber: ''}}
          onSubmit={(values, action) => {
            console.log('submitted');
          }}
          validateOnChange={false}
          validateOnBlur={true}>
          {({handleSubmit, setFieldValue, values}) => (
            <View style={styles.formContainer}>
              <PhoneInput
                value={values.phoneNumber}
                setFieldValue={setFieldValue}
              />
              <VerticalSpacer size={spacings.xl} />
              <Button label="Skip for now" mode="text" />
              <VerticalSpacer size={spacings.lg} />
              <Text style={{...typography.p2, color: colors.darkGrey}}>
                Already have an account
              </Text>
              <VerticalSpacer size={spacings.md} />
              <Button label="Log In" mode="text" />
              <VerticalSpacer size={spacings.lg} />
              <Button
                label={
                  values.phoneNumber.length < 14
                    ? 'Text Me'
                    : `Text ${values.phoneNumber}`
                }
                mode="solid"
                disabled={values.phoneNumber.length < 14}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
