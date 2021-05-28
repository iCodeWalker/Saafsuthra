/*import React,{useContext} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Button} from 'react-native';
//import {NavigationEvents} from 'react-navigation';
import Spacer from '../component/spacer';
import AuthForm from '../component/authForm';
import { CommonActions, useNavigation } from '@react-navigation/native'
import {Context} from '../context/AuthContext';

const SigninScreen = ({navigation}) =>{
    
    const { state,signin,clearErrorMessage } = useContext(Context);
    return(
    
    <View style={styles.container}>
        <Button title="home" onPress={()=>navigation.navigate('mainScreen')}/>
            <AuthForm 
            headerText = "Sign In To"
            errorMessage = {state.errorMessage}
            onSubmit = {signin}
            submitButtonText = "Sign In"
            />
            <TouchableOpacity onPress={()=>navigation.navigate('SignupScreen')}>
            
                <Spacer>
                    <Text style={styles.Link}>Don't have account ? Sign up here</Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    );
} ;

SigninScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:10
    },
    Link:{
        color:'blue'
    }
})

export default SigninScreen;*/

import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();
import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

import {useTheme} from 'react-native-paper';

import {Context} from '../context/authContext';

const SigninScreen = ({navigation}) => {
  const {colors} = useTheme();
  const {state, signin, clearErrorMessage} = useContext(Context);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [data, setData] = useState({
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInDown"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <View style={styles.header}>
          <Animatable.Text
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            style={styles.text_header}>
            Welcome to Saaf Sut-Raa
          </Animatable.Text>
          {state.errorMessage ? (
            <Text style={styles.errorMessage}>{state.errorMessage}</Text>
          ) : null}
        </View>
        <View style={{marginTop: 10}}>
          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
              },
            ]}>
            Email / Phone Number
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              placeholder="visheshverma@gmail.com"
              placeholderTextColor="#666666"
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              value={username}
              onChangeText={setUsername}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Username must be 4 characters long.
              </Text>
            </Animatable.View>
          )}

          <Text
            style={[
              styles.text_footer,
              {
                color: colors.text,
                marginTop: 35,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color={colors.text} size={20} />
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor="#666666"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={[
                styles.textInput,
                {
                  color: colors.text,
                },
              ]}
              autoCapitalize="none"
              //onChangeText={(val) => handlePasswordChange(val)}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}

          <TouchableOpacity
            onPress={() => navigation.navigate('passwordVerfication')}>
            <Text style={{color: '#075e54', marginTop: 25}}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => signin({username, password})}>
              {/* onPress={() => navigation.navigate('SignupScreen')}> */}
              <LinearGradient
                colors={['#800000', '#800000']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  Sign In
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('SignupScreen')}
              style={[
                styles.signIn,
                {
                  borderColor: '#800000',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: 'black',
                  },
                ]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#075e54',
  },
  header: {
    marginTop: 40,
    paddingBottom: 50,
  },
  footer: {
    flex: 6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#111111',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 45,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: 17,
  },
  errorMessage: {
    color: '#FF0000',
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
