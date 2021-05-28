import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/spacer';
import {Context} from '../context/authContext';

const OTPVerificationScreen = () => {
  const {SubmitOTP, errorMessage} = useContext(Context);
  const [otp_input, setOtpInput] = useState('');

  return (
    <View>
      <Text>OTP Verification Screen</Text>
      <Input
        label="Enter OTP"
        value={otp_input}
        onChangeText={setOtpInput}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={false}
      />

      <Spacer>
        <Button title="Submit" onPress={() => SubmitOTP({otp_input})} />
      </Spacer>
      <Text>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default OTPVerificationScreen;
