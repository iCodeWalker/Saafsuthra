import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeScreen2 from './Home';
import HomePageSlider from '../components/homepageSlider';
import WashandFold from './Details';
import WashandIron from './washAndIron';
import WinterWear from './winterwearScreen';
import Address from './Address';
import HomeScreen from './homeScreen';
import LuxuryScreen from './Luxury';
import BlanketScreen from './blanketScreen';
import HouseholdScreen from './householdScreen';
import CarcoverScreen from './carcoverScreen';
import SofacoverScreen from './sofacoverScreen';
import UserScreen from './userScreen';
import HomeSliderDetail from '../components/homesliderDetail';
import ProfileScreen from './profileScreen';
import PreviousOrderScreen from './previousorderScreen';
import OurServicesScreen from './ourservicesScreen';
import ContactUsScreen from './contactusScreen';
import SettingScreen from './settingScreen';
import LocationScreen from './locationScreen';
import TermAndConditionScreen from './termandconditionScreen';

import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
import {NavigationContainer} from '@react-navigation/native';

// Bottom Tab bar navigation ['Home','Explore','You']
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Options"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home-outline' : 'ios-home';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'ios-receipt-outline' : 'ios-receipt';
          } else if (route.name === 'You') {
            iconName = focused ? 'ios-person-outline' : 'ios-person';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
      tabBarOptions={{
        style: {
          height: 90,
          paddingTop: 10,
        },
        tabStyle: {
          width: 10,
        },
        labelStyle: {
          fontSize: 17,
          margin: 0,
          padding: 0,
        },
      }}>
      <Tab.Screen name="Home" component={MyTabs} />
      <Tab.Screen name="Explore" component={HomeScreen2} />
      <Tab.Screen name="You" component={UserScreen} />
    </Tab.Navigator>
  );
}

//Top Tab bar navigation ['Laundry','Dry cleaning']

const TopTab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Laundry" component={HomeScreen} />
      <TopTab.Screen name="Dry Cleaning" component={LuxuryScreen} />
    </TopTab.Navigator>
  );
}

//All Screens Stack

const Stack = createStackNavigator();

const MyStack = ({navigation}) => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BottomTab}
        options={{
          title: 'Saaf Suthraa',

          headerStyle: {
            backgroundColor: '#f0eeee',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            flex: 1,
          },
        }}
      />
      <Stack.Screen name="washandfold" component={WashandFold} />
      <Stack.Screen name="washandiron" component={WashandIron} />
      <Stack.Screen name="winterwear" component={WinterWear} />
      <Stack.Screen name="blanketscreen" component={BlanketScreen} />
      <Stack.Screen name="householdscreen" component={HouseholdScreen} />
      <Stack.Screen name="carcoverscreen" component={CarcoverScreen} />
      <Stack.Screen name="sofacoverscreen" component={SofacoverScreen} />
      <Stack.Screen name="address" component={Address} />
      <Stack.Screen name="userscreen" component={UserScreen} />
      <Stack.Screen name="homesliderdetail" component={HomeSliderDetail} />
      <Stack.Screen name="profilescreen" component={ProfileScreen} />
      <Stack.Screen
        name="previousorderscreen"
        component={PreviousOrderScreen}
      />
      <Stack.Screen name="ourservicesscreen" component={OurServicesScreen} />
      <Stack.Screen name="contactusscreen" component={ContactUsScreen} />
      <Stack.Screen name="settingscreen" component={SettingScreen} />
      <Stack.Screen name="locationscreen" component={LocationScreen} />
      <Stack.Screen
        name="termandconditionscreen"
        component={TermAndConditionScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MyStack;
