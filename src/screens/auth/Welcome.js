import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import bg from '../../../images/bg.png';

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
          <View style={styles.parent}>
            <Text style={styles.text}>Coffee for Everyone</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('signUp')}
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
    flex: 1,
  },
  parent: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  btn: {
    backgroundColor: '#FFBA33',
    height: 70,
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 54,
    marginHorizontal: 30,
  },
  textbtn: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
