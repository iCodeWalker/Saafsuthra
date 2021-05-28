import React, {useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';

import {Context} from '../context/authContext';

MaterialIcons.loadFont();

const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();
  const {state} = useContext(Context);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../assests/images/logo.jpg')}
          style={styles.logo}
          resizeMode="stretch"
        />
        <Text style={styles.text}>We know value of Cleanliness</Text>
      </View>
      <Animatable.View animation="">
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SigninScreen');
              console.log(state.token);
            }}>
            <LinearGradient
              colors={['#800000', '#800000']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Start here</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.35;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#075e54',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    marginTop: 70,
    width: height_logo,
    height: height_logo,
    borderRadius: 150,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  text: {
    color: 'white',
    marginTop: 55,
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  button: {
    alignItems: 'center',
    marginTop: 40,
    paddingBottom: 110,
    paddingHorizontal: 30,
  },
  signIn: {
    width: 210,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
