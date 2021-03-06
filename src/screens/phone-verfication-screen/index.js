import React from 'react';
import {KeyboardAvoidingView, Text, View, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Formik} from 'formik';

import {spacings} from '../../config/theme';

import {Button, Header, PhoneInput, VerticalSpacer} from '../../components';

import styles from './styles';

export const PhoneVerificationScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>
        <Header
          title="Continue with Phone"
          subtitle="For faster login, and to keep the community safe, we need your number"
        />
        <Formik
          initialValues={{phoneNumber: ''}}
          onSubmit={(values) => {
            navigation.navigate('CodeInputScreen', {
              phoneNumber: values.phoneNumber,
            });
          }}>
          {({handleSubmit, setFieldValue, values}) => (
            <View style={styles.formContainer}>
              <PhoneInput
                value={values.phoneNumber}
                setFieldValue={setFieldValue}
              />
              <VerticalSpacer size={spacings.xl} />
              <Button label="Skip for now" mode="text" />
              <VerticalSpacer size={spacings.lg} />
              <Text style={styles.buttonHeading}>Already have an account</Text>
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
