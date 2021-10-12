import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ItemProduct = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.itemWrap}>
        <Image style={styles.itemImg} source={props.image} />

        <Text style={styles.itemName}>{props.name}</Text>
        <Text style={styles.itemPrice}>{props.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({
  itemWrap: {
    width: 220,
    height: 250,
    marginTop: 40,
    backgroundColor: '#EFEEEE',
    marginHorizontal: 38,
    borderRadius: 30,
    alignItems: 'center',
  },
  itemImg: {
    width: 168,
    height: 189,
    borderRadius: 20,
    marginTop: -20,
  },
  itemName: {
    textAlign: 'center',
    paddingHorizontal: 40,
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
  },
  itemPrice: {
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
    color: '#6A4029',
  },
});
