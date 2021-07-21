import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import bg from '../../../images/login.png';
import {connect} from 'react-redux';
import {authLogin} from '../../redux/actions/auth';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onLogin = () => {
    const {email, password} = this.state;
    this.props.authLogin(email, password).then(() => {
      if (this.props.auth.errMsg === '') {
        ToastAndroid.showWithGravity(
          'Login success',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        return this.props.navigation.navigate('home');
      } else {
        ToastAndroid.showWithGravity(
          `${this.props.auth.errMsg}`,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      }
    });
  };

  render() {
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
                value={this.state.email}
                onChangeText={val => this.setState({email: val})}
              />
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="white"
                autoCompleteType="password"
                style={styles.input}
                value={this.state.password}
                secureTextEntry={true}
                onChangeText={val => this.setState({password: val})}
              />
              <Text style={styles.forgottext}>Forgot password?</Text>
            </View>

            <TouchableOpacity onPress={this.onLogin} style={styles.btn1}>
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
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {authLogin};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
    fontWeight: 'bold',
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
  },
  textbtn1: {
    textAlign: 'center',
    fontWeight: 'bold',
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
  },
  forgottext: {
    marginTop: 23,
    color: '#fff',
  },
  or: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
});
