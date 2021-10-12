import {http} from '../../helpers/http';
import {ToastAndroid} from 'react-native';

import {BACKEND_URL} from '@env';

export const authLogin = (Data, navigation) => {
  return async dispatch => {
    if (Data.email.length < 1) {
      ToastAndroid.showWithGravity(
        'Email is required',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    } else if (!Data.email.includes('@')) {
      ToastAndroid.showWithGravity(
        'Invalid email format',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    } else if (Data.password.length < 8) {
      ToastAndroid.showWithGravity(
        'Password length min is 8 characters at least',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    } else {
      const form = new URLSearchParams();
      form.append('email', Data.email);
      form.append('password', Data.password);
      try {
        const {data} = await http().post(
          `${BACKEND_URL}/auth/login`,
          form.toString(),
        );
        dispatch({
          type: 'AUTH_LOGIN',
          payload: data.results.token,
        });
        ToastAndroid.showWithGravity(
          'Login success',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
        navigation.reset({index: 0, routes: [{name: 'home'}]});
      } catch (err) {
        console.log(err);
        dispatch({
          type: 'AUTH_LOGIN_FAILED',
          payload: err.response.data.message,
        });
        ToastAndroid.showWithGravity(
          'Connection error',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      }
    }
  };
};

export const authRegister = (Data, navigation) => {
  return async dispatch => {
    const form = new URLSearchParams();
    form.append('email', Data.email);
    form.append('password', Data.password);
    form.append('number', Data.number);
    try {
      const {data} = await http().post(
        `${BACKEND_URL}/auth/register`,
        form.toString(),
      );
      dispatch({
        type: 'REGISTER',
        payload: data.message,
      });
      ToastAndroid.showWithGravity(
        'Create Account Successfully!',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
      navigation.navigate('login');
    } catch (err) {
      dispatch({
        type: 'REGISTER_FAILED',
        payload: err.response.data.message,
      });
      ToastAndroid.showWithGravity(
        'Connection error',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    }
  };
};

export const authLogout = () => ({
  type: 'AUTH_LOGOUT',
});
