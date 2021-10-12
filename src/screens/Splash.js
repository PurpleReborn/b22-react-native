/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Splash = ({navigation}) => {
  const {token} = useSelector(state => state.auth);
  useEffect(() => {
    console.log(token);
    if (token !== null) {
      setTimeout(() => {
        navigation.replace('home');
      }, 2000);
    } else {
      setTimeout(() => {
        navigation.replace('welcome');
      }, 1500);
    }
  }, []);
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>StarsWars</Text>
      <Text style={styles.text}>Coffee</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#6A4029',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 40,
    lineHeight: 50,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
});
