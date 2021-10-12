import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import bg from '../../../images/bg.png';
import FirstButton from '../../components/FirstButton';

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
          <View style={styles.parent}>
            <View style={styles.parent2}>
              <Text style={[styles.text, styles.text9]}>
                Coffee for Everyone
              </Text>
            </View>
            <FirstButton
              style={{backgroundColor: '#FFBA33', color: 'black'}}
              onPress={() => this.props.navigation.navigate('signUp')}
              text={'Get started'}
            />
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
  parent2: {
    paddingTop: 120,
    flex: 1,
  },
  text9: {
    color: 'white',
    fontSize: 42,
    // lineHeight: 56,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Poppins-Bold',
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
    fontFamily: 'Poppins-Black',
    alignItems: 'center',
  },
  textbtn: {
    color: '#000',
    // textAlign: 'center',
    // fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
  },
});
