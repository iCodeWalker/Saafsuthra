import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import HomePageSlider from '../components/homepageSlider';
const {width, height} = Dimensions.get('window');

export default function HomeScreen2({navigation}) {
  return (
    <View style={{flex: 1, marginBottom: 15}}>
      <Text
        style={{
          alignSelf: 'center',
          marginVertical: 15,
          fontSize: 20,
          fontWeight: 'bold',
          fontFamily: 'Cochin',
          textDecorationLine: 'underline',
        }}>
        Explore more here
      </Text>
      <View style={{flex: 1}}>
        <HomePageSlider />
      </View>
    </View>
  );
}
