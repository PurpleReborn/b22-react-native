import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const MyButton = props => {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onPress}>
      <Text style={styles.textbtn}>{props.name}</Text>
    </TouchableOpacity>
  );
};
// Confirm and Checkout

export default MyButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#6A4029',
    paddingVertical: 20,
    borderRadius: 15,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textbtn: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
  },
});
