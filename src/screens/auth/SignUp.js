import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import bg from '../../../images/signUp.png';

export default class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
          <View style={styles.parent}>
            <View style={styles.parent2}>
              <Text style={styles.text}>Welcome!</Text>
              <Text style={styles.text2}>
                Get a cup of coffee for free every sunday morning
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('signUp2')}
              style={styles.btn1}>
              <Text style={styles.textbtn1}>Create New Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('login')}
              style={styles.btn}>
              <Text style={styles.textbtn}>Get started</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

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
  text2: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 22,
    marginHorizontal: 66,
  },
  parent: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  parent2: {
    flex: 1,
  },
  btn: {
    backgroundColor: '#FFBA33',
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
});
