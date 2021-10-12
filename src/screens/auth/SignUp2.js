import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import bg from '../../../images/signUp2.png';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {authRegister} from '../../redux/actions/auth';

const SignUp2 = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const formData = {
    email: email,
    password: password,
    number: number,
  };

  const onSubmit = () => {
    if (formData.email.length > 0) {
      if (formData.password.length >= 8) {
        if (formData.number.length > 9) {
          dispatch(authRegister(formData, navigation));
        } else {
          ToastAndroid.showWithGravity(
            'Number Must be length more than 9 Characters',
            ToastAndroid.LONG,
            ToastAndroid.TOP,
          );
        }
      } else {
        ToastAndroid.showWithGravity(
          'Password Must be length more than 8 Characters',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      }
    } else {
      ToastAndroid.showWithGravity(
        'Email cannot be empty',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    }
  };

  // onRegister = () => {
  //   const {email, password, number} = this.state;
  //   this.props.authRegister(email, password, number).then(() => {
  //     if (this.props.auth.errMsg === '') {
  //       ToastAndroid.showWithGravity(
  //         'Success Create Account',
  //         ToastAndroid.LONG,
  //         ToastAndroid.CENTER,
  //       );
  //       return this.props.navigation.navigate('login');
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
            <Text style={styles.text}>Sign Up</Text>
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="Enter your email adress"
              placeholderTextColor="white"
              style={styles.input}
              value={email}
              onChangeText={value => setEmail(value)}
            />
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="white"
              style={styles.input}
              secureTextEntry={true}
              value={password}
              onChangeText={value => setPassword(value)}
            />
            <TextInput
              placeholder="Enter your phone number"
              placeholderTextColor="white"
              style={styles.input}
              value={number}
              onChangeText={value => setNumber(value)}
            />
          </View>
          <TouchableOpacity onPress={onSubmit} style={styles.btn1}>
            <Text style={styles.textbtn1}>Create New Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textbtn}>Create with Google</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUp2;

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
    backgroundColor: '#6A4029',
    height: 70,
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 17,
    marginHorizontal: 30,
  },
  textbtn: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
  },
  textbtn1: {
    color: '#fff',
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
});
