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

/*import React,{ useState, useEffect }from 'react';
import {View,StyleSheet} from 'react-native';
//import {NavigationEvents} from 'react-navigation';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from '../component/spacer';
import {Context} from '../context/AuthContext';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignupScreen = ({navigation}) =>{
    const { state,signup,clearErrorMessage,tryLocalSignin } = useContext(Context);
    const[username,setUsername] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[password2,setPassword2] = useState('');
    
   /* useEffect(() =>{
        tryLocalSignin();
    }, []);*/

/*return(
    
    <View style={styles.container}>
       
            <Spacer>
            <Text h3>
                Sign Up here
            </Text>
            </Spacer>
            <Input label="Username" 
            value={username}
            onChangeText={setUsername}
            autoCapitalize='none'
            autoCorrect={false}
            />
            <Spacer />
            <Input label="Email"
            value={email} 
            onChangeText={setEmail}
            autoCapitalize='none'
            autoCorrect={false}
            />
            <Spacer />
            <Input label="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize='none'
            autoCorrect={false} 
            secureTextEntry={true}
            />
            <Input label="Confirm Password"
            value={password2}
            onChangeText={setPassword2}
            autoCapitalize='none'
            autoCorrect={false} 
            secureTextEntry={true}
            />
            {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text>: null}
            <Spacer>
                <Button 
                title= "Sign up"
                onPress={() => signup({username,email,password,password2})} />
            </Spacer>

                <TouchableOpacity onPress={()=>navigation.navigate('SigninScreen')}>
                    <Spacer>
                        <Text style={styles.Link}>Already have an account? Sign In here</Text>
                    </Spacer>
                </TouchableOpacity>
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

const styles = StyleSheet.create({
    container:{
        
        justifyContent:'center',
        marginBottom:20
    },
    errorMessage:{
        fontSize:16,
        color:'red',
        marginLeft:15,
        marginTop:15

    },
    Link:{
        color:'blue'
    }
});

export default SignupScreen;*/

import React from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
  TextInput,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {Text, Input, Button} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
FontAwesome.loadFont();
Feather.loadFont();
import {Context} from '../context/authContext';
import {useContext, useState} from 'react';

const SignupScreen = ({navigation}) => {
  const {state, signup, clearErrorMessage} = useContext(Context);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [re_password, setRe_password] = useState('');

  const [data, setData] = useState({
    //username: '',
    //password: '',
    //confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  /*const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }*/

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />

      <Animatable.View animation="fadeInDown" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_header}>
            Become a member of Saaf Sut-Raa
          </Text>
          <Text style={styles.text_footer}>Name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="E.g. Vaibhav Kadwey"
              style={styles.textInput}
              autoCapitalize="none"
              value={name}
              onChangeText={setName}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Email
          </Text>
          <View style={styles.action}>
            <Feather name="mail" color="#05375a" size={20} />
            <TextInput
              placeholder="E.g. saafsutraa@gmail.com"
              style={styles.textInput}
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
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

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              value={re_password}
              onChangeText={setRe_password}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.confirm_secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to
            </Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Terms and Policies
            </Text>
            <Text style={styles.color_textPrivate}> of</Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Saaf Suthraa.
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => signup({name, email, password, re_password})}>
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
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('SigninScreen')}
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
                    color: '#111111',
                  },
                ]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#075e54', //'#676767'
  },
  header: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#111111',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 55,
    marginBottom: 25,
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
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: 'black',
    fontSize: 17,
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
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'black',
  },
});
