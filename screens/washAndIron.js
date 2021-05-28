import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Address from './Address';
import {Button, Divider} from 'react-native-elements';
import {Context} from '../context/washandironContext';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
const {width, height} = Dimensions.get('window');
const WashandIron = ({navigation}) => {
  const {
    state,
    increaseCounter,
    decreaseCounter,
    totalClothes,
    predictedWeight,
    predictedCost,
  } = useContext(Context);

  const Counter = ({name}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 20,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Icon name="ios-shirt" style={{fontSize: 23, marginRight: 5}}></Icon>
          <Text
            style={{
              width: width - 310,
              fontSize: 16,
              fontWeight: '500',
            }}>
            {name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width - 310,
            height: height / 25,
            borderWidth: 2,
            borderColor: 'black',
            padding: 3,
          }}>
          <TouchableOpacity
            onPress={() => {
              increaseCounter((name = name));
            }}>
            <Icon name="ios-add-circle" style={styles.ionIcon}></Icon>
          </TouchableOpacity>

          <Text style={{fontSize: 20, width: 30}}>{state[name]}</Text>

          <TouchableOpacity
            onPress={() => {
              decreaseCounter((name = name));
            }}>
            <Icon name="ios-remove-circle" style={styles.ionIcon}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Text
          style={{
            alignSelf: 'center',
            marginVertical: 15,
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'Cochin',
            textDecorationLine: 'underline',
          }}>
          Place Order of wash and iron
        </Text>
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
          Men's Wear
        </Text>
        <Counter name="Tshirts" />
        <Counter name="Shirts" />
        <Counter name="Kurtas" />
        <Divider style={{backgroundColor: 'grey', height: 1}} />

        <Counter name="Pants" />
        <Counter name="Pyjamas" />
        <Counter name="Jeans" />
        <Counter name="Shorts" />
        <Counter name="Lowers" />
        <Counter name="Dhoti" />
        <Counter name="Shawl" />

        <Divider style={{backgroundColor: 'black', height: 5}} />
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
          Womens Wear
        </Text>

        <Counter name="Tops" />
        <Counter name="Kurtis" />
        <Counter name="Shrugs" />
        <Divider style={{backgroundColor: 'grey', height: 1}} />
        <Counter name="Suits" />
        <Counter name="Jumpsuits" />
        <Counter name="Sarees" />
        <Counter name="Gowns" />
        <Divider style={{backgroundColor: 'grey', height: 1}} />
        <Counter name="Shorts" />
        <Counter name="Skirts" />
        <Counter name="Trousers" />
        <Counter name="Jean" />
        <Counter name="Lowers" />
        <Counter name="Leggings" />
        <Divider style={{backgroundColor: 'grey', height: 1}} />
        <Counter name="Stawl" />
        <Counter name="Dupatta" />
        <Counter name="Scarf" />
        <Divider style={{backgroundColor: 'grey', height: 1}} />
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
          Other amenities
        </Text>
        <Counter name="bedsheets" />
        <Counter name="towels" />
        <Counter name="pillow_covers" />

        <Divider style={{backgroundColor: 'black', height: 5}} />

        <Text
          style={{
            marginLeft: 30,
            fontSize: 18,
            fontWeight: 'bold',
            padding: 10,
          }}>
          Total number of clothes :- {state.total_clothes}
        </Text>
        <Button
          title="Total clothes"
          type="solid"
          onPress={() => {
            totalClothes();
          }}
          buttonStyle={{width: 200, alignSelf: 'flex-end', marginVertical: 14}}
          containerStyle={{marginHorizontal: 15}}
        />

        <Button
          title="Predict Weight"
          type="solid"
          onPress={() => {
            predictedWeight();
          }}
          buttonStyle={{width: 200, alignSelf: 'flex-end', marginVertical: 14}}
          containerStyle={{marginHorizontal: 15}}
        />
        <Text
          style={{
            marginLeft: 30,
            fontSize: 18,
            fontWeight: 'bold',
            padding: 10,
          }}>
          Predicted Weight :-{state.total_weight}
        </Text>
        <Text
          style={{
            marginLeft: 30,
            fontSize: 18,
            fontWeight: 'bold',
            padding: 10,
          }}>
          Predicted Cost :- {state.total_cost}
        </Text>

        <Button
          title="Predict cost"
          type="solid"
          onPress={() => {
            predictedCost();
          }}
          buttonStyle={{width: 200, alignSelf: 'flex-end', marginVertical: 14}}
          containerStyle={{marginHorizontal: 15}}
        />
      </ScrollView>

      <View
        style={{
          backgroundColor: '#23414e',
          alignSelf: 'stretch',
          justifyContent: 'flex-end',
        }}>
        <Button
          title="Select Address"
          type="solid"
          onPress={() => {
            navigation.navigate('address');
          }}
          buttonStyle={{width: 200, alignSelf: 'flex-end', marginVertical: 14}}
          containerStyle={{marginHorizontal: 15}}
        />
      </View>
    </View>
  );
};

export default WashandIron;

const styles = StyleSheet.create({
  ionIcon: {
    fontSize: 25,
    color: 'green',
  },
});
