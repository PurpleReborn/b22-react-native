import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  // ToastAndroid,
} from 'react-native';
import bg from '../../../images/login.png';

import {authLogin} from '../../redux/actions/auth';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const formData = {
    email: email,
    password: password,
  };

  const onSubmit = () => {
    dispatch(authLogin(formData, navigation));
  };

  // onLogin = () => {
  //   const {email, password} = this.state;
  //   this.props.authLogin(email, password).then(() => {
  //     if (this.props.auth.errMsg === '') {
  //       ToastAndroid.showWithGravity(
  //         'Login success',
  //         ToastAndroid.LONG,
  //         ToastAndroid.CENTER,
  //       );
  //       return this.props.navigation.navigate('home');
  //     } else {
  //       ToastAndroid.showWithGravity(
  //         `${this.props.auth.errMsg}`,
  //         ToastAndroid.LONG,
  //         ToastAndroid.CENTER,
  //       );
  //     }
  //   });
  // };

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <View style={styles.parent}>
          <View style={styles.parent2}>
            <Text style={styles.text}>Login</Text>
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="Enter your email adress"
              placeholderTextColor="white"
              autoCompleteType="email"
              style={styles.input}
              value={email}
              onChangeText={value => setEmail(value)}
            />
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="white"
              autoCompleteType="password"
              style={styles.input}
              secureTextEntry={true}
              value={password}
              onChangeText={value => setPassword(value)}
            />
            <Text style={styles.forgottext}>Forgot password?</Text>
          </View>

          <TouchableOpacity onPress={onSubmit} style={styles.btn1}>
            <Text style={styles.textbtn1}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.or}>or login in with</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textbtn}>Login with Google</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 56,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    paddingTop: 120,
  },
  parent: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  parent2: {
    flex: 1,
  },
  btn: {
    backgroundColor: '#fff',
    height: 70,
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 54,
    marginHorizontal: 30,
  },
  btn1: {
    backgroundColor: '#FFBA33',
    height: 70,
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 17,
    marginHorizontal: 30,
  },
  textbtn: {
    color: '#000',
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
  },
  textbtn1: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
  },
  inputWrap: {
    marginHorizontal: 31,
    marginBottom: 40,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    borderBottomColor: '#fff',
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  forgottext: {
    marginTop: 23,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  or: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',
  },
});
