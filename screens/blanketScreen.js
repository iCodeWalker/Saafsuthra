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
import {Context} from '../context/blanketContext';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
const {width, height} = Dimensions.get('window');
const BlanketScreen = ({navigation}) => {
  const {
    state,
    increaseCounter,
    decreaseCounter,
    totalClothes,
    predictedWeight,
    predictedCost,
  } = useContext(Context);

  const Counter = ({name, display = '', price = ''}) => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text
              style={{
                width: width - 280,
                fontSize: 16,
                fontWeight: 'bold',
                paddingTop: 15,
              }}>
              {display}
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
        <View>
          <Text
            style={{
              width: width - 280,
              marginLeft: width - 360,
              fontSize: 16,
              fontWeight: '300',
            }}>
            ${price}
          </Text>
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
          Place Order of wash
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
          Blankets
        </Text>
        <Counter name="blanket_single" display="Blanket Single" price="220" />
        <Counter
          name="blanket_singlecover"
          display="Cover(Single)"
          price="120"
        />
        <Counter name="blanket_double" display="Blanket Double" price="350" />
        <Counter
          name="blanket_doublecover"
          display="Cover(Double)"
          price="150"
        />

        <Divider style={{backgroundColor: 'grey', height: 1}} />

        <Divider style={{backgroundColor: 'grey', height: 1}} />

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

export default BlanketScreen;

const styles = StyleSheet.create({
  ionIcon: {
    fontSize: 25,
    color: 'green',
  },
});
