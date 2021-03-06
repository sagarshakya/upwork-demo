import React from 'react';
import {View, KeyboardAvoidingView, Platform, Text, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Formik} from 'formik';

import {spacings} from '../../config/theme';

import {
  Button,
  CodeVerificationInput,
  Header,
  VerticalSpacer,
} from '../../components';

import styles from './styles';

export const CodeInputScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>
        <Header
          title="Verify Phone"
          subtitle={`Code sent to ${route.params.phoneNumber}`}
        />
        <Formik
          initialValues={{verificationCode: ''}}
          onSubmit={(values) => {
            Alert.alert('Success', 'You have been verified', [
              {
                text: 'OK',
                onPress: () => navigation.navigate('PhoneVerification'),
              },
            ]);
          }}>
          {({handleSubmit, setFieldValue, values}) => (
            <View style={styles.formContainer}>
              <CodeVerificationInput
                value={values.verificationCode}
                setFieldValue={setFieldValue}
              />
              <VerticalSpacer size={spacings.lg} />
              <Text style={styles.buttonHeading}>Already have an account</Text>
              <VerticalSpacer size={spacings.md} />
              <Button label="Request Again" mode="text" />
              <VerticalSpacer size={spacings.lg} />
              <Button
                label="Verify and Create Account"
                mode="solid"
                disabled={values.verificationCode.length < 4}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
