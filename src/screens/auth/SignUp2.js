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
import bg from '../../../images/signUp2.png';
import {connect} from 'react-redux';
import {authRegister} from '../../redux/actions/auth';

class SignUp2 extends Component {
  state = {
    email: '',
    password: '',
    number: '',
  };

  onRegister = () => {
    const {email, password, number} = this.state;
    this.props.authRegister(email, password, number).then(() => {
      if (this.props.auth.errMsg === '') {
        ToastAndroid.showWithGravity(
          'Success Create Account',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        return this.props.navigation.navigate('login');
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
              <Text style={styles.text}>Sign Up</Text>
            </View>
            <View style={styles.inputWrap}>
              <TextInput
                placeholder="Enter your email adress"
                placeholderTextColor="white"
                style={styles.input}
                onChangeText={e => this.setState({email: e})}
              />
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor="white"
                style={styles.input}
                secureTextEntry={true}
                onChangeText={e => this.setState({password: e})}
              />
              <TextInput
                placeholder="Enter your phone number"
                placeholderTextColor="white"
                style={styles.input}
                onChangeText={e => this.setState({number: e})}
              />
            </View>
            <TouchableOpacity onPress={this.onRegister} style={styles.btn1}>
              <Text style={styles.textbtn1}>Create New Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.textbtn}>Create with Google</Text>
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

const mapDispatchToProps = {authRegister};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp2);

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
    fontWeight: 'bold',
    fontSize: 17,
  },
  textbtn1: {
    color: '#fff',
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
});
