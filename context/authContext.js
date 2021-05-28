import createDataContext from './createDataContext';
import restro from '../api/restro';
import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from '../screens/navigationRef';
import phoneAPI from '../api/phoneAPI';
import otpAPI from '../api/otpAPI';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signin':
      return {errorMessage: '', token: action.payload};
    case 'signup':
      return {...state, errorMessage: action.payload};
    case 'forgetpassword':
      return {...state, errorMessage: action.payload};
    case 'clear_error_message':
      return {...state, errorMessage: ''};
    case 'signout':
      return {token: null, errorMessage: ''};
    case 'phone_Verify':
      return {errorMessage: '', session_id: action.payload};
    case 'OTP_match':
      return {errorMessage: '', session_id: action.payload};
    case 'add_error_phone':
      return {errorMessage: 'something went wrong'};
    case 'activation_success':
      return {...state, errorMessage: action.payload};
    case 'activation_fail':
      return {errorMessage: action.payload};
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => {
  return async () => {
    token = await AsyncStorage.getItem('@token');
    if (token) {
      dispatch({type: 'signin', payload: token});
      navigate('mainScreen');
    } else {
      navigate('SignupScreen');
    }
  };
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({type: 'clear_error_message'});
};

const signup = (dispatch) => {
  return async ({name, email, password, password2}) => {
    try {
      const response = await restro.post('/auth/register/', {
        name,
        email,
        password,
        password2,
      });

      //await AsyncStorage.setItem('token',response.data.token);
      dispatch({
        type: 'signup',
        payload: 'Please verify your Email and start Investing',
      });
      navigate('SigninScreen');
    } catch (err) {
      dispatch({type: 'add_err', payload: 'Something went wrong'});
    }
  };
};

const signin = (dispatch) => {
  return async ({username, password}) => {
    try {
      // const response = await restro.post('/auth/login/', {username, password});
      // console.log(response.data.token);
      // await AsyncStorage.setItem('token', response.data.token);
      dispatch({
        type: 'signin',
        payload: 'dnkjanfnasnfkansfnaflkansfna',
        // payload: response.data.token,
      });
      navigate('Home');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'something went wrong',
      });
    }
  };
};

const forgetPassword = (dispatch) => {
  return async ({email}) => {
    try {
      const response = await restro.post('/auth/request-reset-email/', {email});
      dispatch({
        type: 'forgetpassword',
        payload: response.data.message,
      });
      navigate('SigninScreen');
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: 'Please enter valid email',
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('SignupScreen');
  };
};

const SubmitPhone = (dispatch) => {
  return async ({phone_number}) => {
    try {
      const response = await phoneAPI.get(
        `/${phone_number}/` + `AUTOGEN/ProjectX`,
        {phone_number},
      );
      await AsyncStorage.setItem('session_id', response.data.Details);
      console.log(response.data.Details);
      dispatch({
        type: 'phone_Verify',
        payload: response.data.Details,
      });
      navigate('otpVerification');
    } catch (err) {
      console.log(err);
      // dispatch({
      //type:'add_error_phone',
      //payload:"something went wrong"
      // });
    }
  };
};

const SubmitOTP = (dispatch) => {
  return async ({session_id, otp_input}) => {
    try {
      try {
        session_id = await AsyncStorage.getItem('session_id');
        return session_id;
      } catch (e) {
        console.log('done');
      }
      const response = await otpAPI.get(`/${session_id}/` + `${otp_input}`, {
        session_id,
        otp_input,
      });

      dispatch({
        type: 'OTP_match',
        payload: response.data.Details,
      });
      navigate('mainScreen');
    } catch (err) {
      console.log(err);
      //dispatch({
      //  type:'add_error',
      //payload:"something went wrong"
      //});
    }
  };
};
const verify = (dispatch) => {
  return async ({uidb64, token, password, password2}) => {
    try {
      const response = await restro.patch('/password-reset-complete/', {
        password,
        password2,
        uidb64,
        token,
      });
      console.log(response);
      dispatch({
        type: 'activation_success',
        payload: response.data.detail,
      });
      navigate('SigninScreen');
    } catch (err) {
      console.log(err);
      //dispatch({
      //type: 'add_error',
      //payload : 'something wnet wrong with the link'
      //});
    }
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {
    signin,
    signout,
    signup,
    clearErrorMessage,
    tryLocalSignin,
    SubmitPhone,
    SubmitOTP,
    forgetPassword,
    verify,
  },
  {token: null, errorMessage: '', session_id: ''},
);
