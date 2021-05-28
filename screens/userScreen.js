import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {Avatar} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
import {Button, Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

const UserScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 15,
            backgroundColor: '#666abf',
          }}>
          <Avatar
            rounded
            size="xlarge"
            source={{
              uri:
                'https://i0.wp.com/cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png?w=499&ssl=1',
            }}
            containerStyle={{
              marginLeft: 15,
              marginRight: 20,
              marginVertical: 20,
            }}
          />
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 19, fontWeight: '900', paddingBottom: 10}}>
              Vaibhav Kadwey
            </Text>
            <Text style={{fontSize: 15, fontWeight: '500', paddingBottom: 2}}>
              vaibhav3kadwey@gmail.com
            </Text>
            <Text style={{fontSize: 15, fontWeight: '500', paddingBottom: 2}}>
              8619943454
            </Text>
          </View>
        </View>
        <Divider style={{backgroundColor: 'grey', height: 2}} />
        <View
          style={{
            justifyContent: 'center',

            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('profilescreen')}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="ios-person-outline"
                style={{
                  fontSize: 25,
                  marginLeft: 15,
                  marginRight: 5,
                  paddingVertical: 15,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '900',
                  marginLeft: 15,
                  paddingVertical: 19,
                }}>
                Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Divider style={{backgroundColor: 'grey', height: 2}} />
        <View
          style={{
            justifyContent: 'center',

            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('previousorderscreen');
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="ios-list-outline"
                style={{
                  fontSize: 25,
                  marginLeft: 15,
                  marginRight: 5,
                  paddingVertical: 15,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '900',
                  marginLeft: 15,
                  paddingVertical: 19,
                }}>
                Previous Orders
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Divider style={{backgroundColor: 'grey', height: 2}} />
        <View
          style={{
            justifyContent: 'center',

            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ourservicesscreen');
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="ios-file-tray-stacked-outline"
                style={{
                  fontSize: 25,
                  marginLeft: 15,
                  marginRight: 5,
                  paddingVertical: 15,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '900',
                  marginLeft: 15,
                  paddingVertical: 19,
                }}>
                Our Services
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <Divider style={{backgroundColor: 'grey', height: 2}} />
        <View
          style={{
            justifyContent: 'center',

            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('contactusscreen');
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="ios-call-outline"
                style={{
                  fontSize: 25,
                  marginLeft: 15,
                  marginRight: 5,
                  paddingVertical: 15,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '900',
                  marginLeft: 15,
                  paddingVertical: 19,
                }}>
                Contact Us
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <Divider style={{backgroundColor: 'grey', height: 2}} />
        <View
          style={{
            justifyContent: 'center',
            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('settingscreen');
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="ios-settings-outline"
                style={{
                  fontSize: 25,
                  marginLeft: 15,
                  marginRight: 5,
                  paddingVertical: 15,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '900',
                  marginLeft: 15,
                  paddingVertical: 19,
                }}>
                Settings
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Divider style={{backgroundColor: 'grey', height: 2}} />
        <View
          style={{
            justifyContent: 'center',

            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('locationscreen');
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="ios-location-outline"
                style={{
                  fontSize: 25,
                  marginLeft: 15,
                  marginRight: 5,
                  paddingVertical: 15,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '900',
                  marginLeft: 15,
                  paddingVertical: 19,
                }}>
                Store Locator
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <Divider style={{backgroundColor: 'grey', height: 2}} />
        <View
          style={{
            justifyContent: 'center',

            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('termandconditionscreen');
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="ios-person-outline"
                style={{
                  fontSize: 25,
                  marginLeft: 15,
                  marginRight: 5,
                  paddingVertical: 15,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '900',
                  marginLeft: 15,
                  paddingVertical: 19,
                }}>
                Term & Conditions
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <Divider style={{backgroundColor: 'grey', height: 2}} />
        <View
          style={{
            justifyContent: 'center',

            marginVertical: 5,
          }}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Are You sure you want to Logout?
                </Text>
                <Text style={styles.modalText}>Hope to see you soon...</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Logout</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="ios-log-out-outline"
                style={{
                  fontSize: 25,
                  marginLeft: 15,
                  marginRight: 5,
                  paddingVertical: 15,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: '900',
                  marginLeft: 15,
                  paddingVertical: 19,
                }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: width - 50,
    height: height / 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 150,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 17,
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default UserScreen;
