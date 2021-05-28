import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Address from './Address';
import {Button, Divider} from 'react-native-elements';
import {Context} from '../context/householdContext';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
const {width, height} = Dimensions.get('window');
const HouseholdScreen = ({navigation}) => {
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
            marginTop: 15,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text
              style={{
                width: width - 250,
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
              width: width - 250,
              marginLeft: width - 370,
              marginBottom: 5,
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
    <SafeAreaView style={{flex: 1}}>
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
          HouseHold Items
        </Text>
        <Counter name="bedsheets" display="Bedsheet(single)" price="150" />
        <Counter
          name="double_bedsheets"
          display="Bedsheet(double)"
          price="270"
        />
        <Counter name="pillow_cover" display="Pillow covers" price="40" />
        <Counter
          name="cushion_cover_small"
          display="Cushion Cover(S)"
          price="40"
        />
        <Counter
          name="cushion_cover_large"
          display="Cushion Cover(L)"
          price="70"
        />

        <Divider style={{backgroundColor: 'grey', height: 1}} />

        <Counter name="bath_robe_small" display="Bath Robe(S)" price="350" />
        <Counter name="bath_robe_big" display="Bath Robe(L)" price="500" />
        <Counter name="face_towel" display="Face Towel" price="90" />
        <Counter name="hand_towel" display="Hand Towel" price="50" />
        <Counter name="bath_towel" display="Bath Towel" price="70" />
        <Counter name="bath_mat" display="Bath mat" price="50" />

        <Divider style={{backgroundColor: 'grey', height: 1}} />

        <Counter name="apron" display="Apron" price="170" />
        <Counter name="kitchen_towel" display="Kitchen Towel" price="50" />
        <Counter
          name="dinning_table_cloth"
          display="Dine Table cloth"
          price="250"
        />
        <Counter name="table_cloth" display="Table Cloth" price="120" />
        <Divider style={{backgroundColor: 'grey', height: 1}} />
        <Counter name="door_curtains" display="Curtains(door)" price="225" />
        <Counter
          name="window_curtains"
          display="Curtains(window)"
          price="155"
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
    </SafeAreaView>
  );
};

export default HouseholdScreen;

const styles = StyleSheet.create({
  ionIcon: {
    fontSize: 25,
    color: 'green',
  },
});
