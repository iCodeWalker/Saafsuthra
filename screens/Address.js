import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Input} from 'react-native-elements';
import {PricingCard, Button} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

const Address = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{marginTop: 15}}>
        <Text
          style={{
            alignSelf: 'flex-start',
            marginLeft: 15,
            marginVertical: 15,
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'Cochin',
            textDecorationLine: 'underline',
          }}>
          Please Provide Your Address
        </Text>
        <View
          style={{
            marginVertical: 15,
            paddingVertical: 15,
            paddingHorizontal: 10,
          }}>
          <Input placeholder="E.g. Satyam Dubey" label="Full Name" />
          <Input placeholder="Phone number" label="Phone number" />
          <Input placeholder="E.g. Flat no. 201" label="Address Line 1" />
          <Input placeholder="E.g. Appartment name" label="Address Line 2" />
          <Input placeholder="Land Mark" label="LandMark" />
          <Text
            style={{fontSize: 16, fontWeight: 'bold', marginHorizontal: 15}}>
            Address Type
          </Text>
          <View style={{flexDirection: 'row', margin: 10}}>
            <TouchableOpacity
              onPress={() => {
                backgroundColor: '12e123';
              }}>
              <View
                style={{
                  borderColor: 'red',
                  borderWidth: 2,
                  borderRadius: 50,
                  width: 100,
                  height: 50,
                  margin: 10,
                }}>
                <Text style={{alignSelf: 'center', paddingVertical: 14}}>
                  Home
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  borderColor: 'red',
                  borderWidth: 2,
                  borderRadius: 50,
                  width: 100,
                  height: 50,
                  margin: 10,
                }}>
                <Text style={{alignSelf: 'center', paddingVertical: 14}}>
                  Work
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  borderColor: 'red',
                  borderWidth: 2,
                  borderRadius: 50,
                  width: 100,
                  height: 50,
                  margin: 10,
                }}>
                <Text style={{alignSelf: 'center', paddingVertical: 14}}>
                  Other
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: '#23414e',
          alignSelf: 'stretch',
          justifyContent: 'flex-end',
        }}>
        <Button
          title="Place Order"
          type="solid"
          onPress={() => {
            console.log('order received');
          }}
          buttonStyle={{width: 200, alignSelf: 'flex-end', marginVertical: 14}}
          containerStyle={{marginHorizontal: 15}}
        />
      </View>
    </View>
  );
};

export default Address;
