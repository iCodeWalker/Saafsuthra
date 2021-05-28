import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/spacer';
import {Context} from '../context/authContext';

const PhoneVerificationScreen = () => {
  const {SubmitPhone, errorMessage} = useContext(Context);
  const [phone_number, setPhone_number] = useState('');
  //const [errorMessage,setErrorMessage] = useState('');

  return (
    <View>
      <Text>Phone Number Verification Screen</Text>
      <Input
        label="Phone Number"
        value={phone_number}
        onChangeText={setPhone_number}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={false}
      />

      <Spacer>
        <Button title="Submit" onPress={() => SubmitPhone({phone_number})} />
      </Spacer>
      <Text>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PhoneVerificationScreen;
