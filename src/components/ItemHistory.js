import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import coldbrew from '../../images/coldbrew.png';

const ItemHistory = props => {
  return (
    <View style={styles.parentProduct}>
      <Image source={coldbrew} style={styles.productPict} />
      <View style={styles.parentInside}>
        <Text style={styles.productName}>{props.code}</Text>
        <Text style={styles.price2}>{props.payment_method}</Text>
        <Text style={styles.status}>IDR {props.total}</Text>
      </View>
    </View>
  );
};

export default ItemHistory;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  parentProduct: {
    width: 300,
    backgroundColor: '#ffff',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    paddingVertical: 10,
    marginHorizontal: 30,
  },
  productName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  price2: {
    color: '#895537',
    fontWeight: 'bold',
  },
  productChild: {
    marginHorizontal: 10,
  },
  productPict: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginHorizontal: 15,
  },
});
