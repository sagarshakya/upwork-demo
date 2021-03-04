import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SignUpScreen} from '../screens';

const AppStack = createStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="SignUp" component={SignUpScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
