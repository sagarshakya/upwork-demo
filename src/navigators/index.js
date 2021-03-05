import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {PhoneVerificationScreen} from '../screens';

const AppStack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen
          name="PhoneVerification"
          component={PhoneVerificationScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
