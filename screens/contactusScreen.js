import React from 'react';
import {
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
import {Button, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

const ContactUsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 17,
              fontWeight: '700',
              fontStyle: 'italic',
              paddingVertical: 25,
              //textDecorationLine: 'underline',
            }}>
            Contact Details
          </Text>
          <Divider style={{backgroundColor: 'grey', height: 2}} />

          <Divider style={{backgroundColor: 'grey', height: 2}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',

    flex: 1,
  },
  text: {
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 15,
    paddingVertical: 30,
  },
});

export default ContactUsScreen;
