import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const FirstButton = ({style, text, onPress}) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <Text style={([styles.text], [styles.textbtn, style])}>{text}</Text>
    </TouchableOpacity>
  );
};
// Confirm and Checkout

export default FirstButton;

const styles = StyleSheet.create({
  btn: {
    // backgroundColor: '#FFBA33',
    height: 70,
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 54,
    marginHorizontal: 30,
    fontFamily: 'Poppins-Black',
    alignItems: 'center',
  },
  textbtn: {
    // color: '#000',
    // textAlign: 'center',
    // fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
  },
  text: {
    fontFamily: 'Poppins-Bold',
  },
});
