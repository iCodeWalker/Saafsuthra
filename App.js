import React, {useContext, useState} from 'react';
import {Dimensions} from 'react-native';
import {Provider as AuthProvider} from './context/authContext';
import {Context} from './context/authContext';
import AsyncStorage from '@react-native-community/async-storage';
import RootStackScreen from './screens/RootStackScreen';

import MyStack from './screens/MainStackScreen';

import Icons from 'react-native-vector-icons/Feather';
Icons.loadFont();
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
import {Provider} from './context/counterContext';
import {Provider as WashandironProvider} from './context/washandironContext';
import {Provider as WinterProvider} from './context/winterwearContext';
import {Provider as BlanketProvider} from './context/blanketContext';
import {Provider as HouseholdProvider} from './context/householdContext';
import {Provider as CarcoverProvider} from './context/carcoverContext';
import {Provider as SofacoverProvider} from './context/sofacoverContext';

const {width, height} = Dimensions.get('window');

/////////////////////////////////////////////////////////////////////////////

const App = () => {
  const {state, signin, clearErrorMessage} = useContext(Context);
  return state.token == null ? (
    <RootStackScreen></RootStackScreen>
  ) : (
    <MyStack></MyStack>
  );
};
const jsx = () => (
  <Provider>
    <WashandironProvider>
      <WinterProvider>
        <BlanketProvider>
          <HouseholdProvider>
            <CarcoverProvider>
              <SofacoverProvider>
                <AuthProvider>
                  <App />
                </AuthProvider>
              </SofacoverProvider>
            </CarcoverProvider>
          </HouseholdProvider>
        </BlanketProvider>
      </WinterProvider>
    </WashandironProvider>
  </Provider>
);

export default jsx;
