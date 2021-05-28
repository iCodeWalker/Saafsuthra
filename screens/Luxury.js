import React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';
import {Avatar} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

const LuxuryScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.centeredView}>
        <TouchableOpacity onPress={() => navigation.navigate('washandfold')}>
          <View>
            <Image
              style={styles.modalView_1}
              source={{
                uri:
                  'https://i0.wp.com/cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png?w=499&ssl=1',
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('winterwear')}>
          <View>
            <Image
              style={styles.modalView_2}
              source={{
                uri:
                  'https://previews.123rf.com/images/yupiramos/yupiramos1511/yupiramos151105904/48211420-winter-wear-clothes-and-accesories-graphic-design-vector-illustration.jpg',
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            width: width - 290,
            marginLeft: 35,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Daily Clothes
        </Text>

        <Text
          style={{
            marginLeft: 70,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Winter Wear
        </Text>
      </View>

      <View style={styles.centeredView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('householdscreen')}>
          <View>
            <Image
              style={styles.modalView_1}
              source={{
                uri:
                  'https://st.depositphotos.com/1354495/4744/v/600/depositphotos_47441051-stock-illustration-green-window-curtains.jpg',
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('blanketscreen')}>
          <View>
            <Image
              style={styles.modalView_2}
              source={{
                uri:
                  'https://thumbs.dreamstime.com/z/blanket-vector-drawing-neat-cozy-snug-thick-feather-divan-blue-velvet-throw-roll-navi-chock-white-bedroom-backdrop-bright-125762809.jpg',
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            width: width - 290,
            marginLeft: 35,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Households
        </Text>

        <Text
          style={{
            marginLeft: 70,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Blankets
        </Text>
      </View>

      <View style={styles.centeredView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('sofacoverscreen')}>
          <View>
            <Image
              style={styles.modalView_2}
              source={{
                uri:
                  'http://www.johnborghi.com/images/category_7/Buy%201%20Piece%20Sofa%20Cover%20Cartoon%20Print%20Double%20Sided%20Waterproof%20Slipcover%20%20Slipcovers%20Blue%20JO2380330.jpg',
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('sofacoverscreen')}>
          <View>
            <Image
              style={styles.modalView_2}
              source={{
                uri:
                  'https://i.pinimg.com/736x/e8/d7/65/e8d7651781c3ee02310ec4e40e0d8966.jpg',
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            width: width - 290,
            marginLeft: 35,
            marginBottom: 2,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Sofa Covers
        </Text>

        <Text
          style={{
            marginLeft: 75,
            marginBottom: 2,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Party Wear
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LuxuryScreen;

const styles = StyleSheet.create({
  centeredView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  modalView_1: {
    backgroundColor: '#00b4d8',
    borderRadius: 80,
    paddingTop: 50,
    height: height / 7,
    width: width - 280,
    marginRight: 15,
    marginLeft: 15,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalView_2: {
    backgroundColor: '#00b4d8',
    borderRadius: 80,
    paddingTop: 50,
    height: height / 7,
    width: width - 280,
    marginRight: 30,
    marginLeft: 10,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
