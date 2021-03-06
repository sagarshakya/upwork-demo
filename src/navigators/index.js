import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {colors} from '../config/theme';

import {CodeInputScreen, PhoneVerificationScreen} from '../screens';

const AppStack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerShown: false,
        }}>
        <AppStack.Screen
          name="PhoneVerification"
          component={PhoneVerificationScreen}
        />
        <AppStack.Screen
          name="CodeInputScreen"
          component={CodeInputScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: () => null,
            headerTintColor: colors.primary,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
