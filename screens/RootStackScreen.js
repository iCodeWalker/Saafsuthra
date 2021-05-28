import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './splashScreen';
import SigninScreen from './signinScreen';
import SignupScreen from './signupScreen';

import PhoneVerificationScreen from './phoneVerifyScreen';
import OTPVerificationScreen from './otpVerifyScreen';
import ForgetPasswordScreen from './forgetPasswordScreen';
import SetNewPasswordScreen from './setnewPasswordScreen';

import {NavigationContainer} from '@react-navigation/native';

//Authnetication Flow
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignupScreen" component={SignupScreen} />
      <RootStack.Screen name="SigninScreen" component={SigninScreen} />

      <RootStack.Screen
        name="phoneVerification"
        component={PhoneVerificationScreen}
      />
      <RootStack.Screen
        name="otpVerification"
        component={OTPVerificationScreen}
      />
      <RootStack.Screen
        name="passwordVerfication"
        component={ForgetPasswordScreen}
      />
      <RootStack.Screen
        name="SetNewPasswordScreen"
        component={SetNewPasswordScreen}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootStackScreen;
