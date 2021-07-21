import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class Delivery extends Component {
  render() {
    return (
      <View styles={styles.parent}>
        <View style={styles.title}>
          <Text style={styles.titletext}> Checkout </Text>
        </View>
        <View style={styles.title2}>
          <Text style={styles.title3}>Delivery</Text>
          <View style={styles.titleRow}>
            <Text style={styles.addressTitle}>Address details</Text>
            <Text>change</Text>
          </View>
          <View style={styles.wrapAdress}>
            <Text style={styles.street1}>Iskandar Street</Text>
            <Text style={styles.street}>
              Km 5 refinery road oppsite re public road, effurun, Jakarta
            </Text>
            <Text style={styles.number}>+62 81348287878</Text>
          </View>
          <View style={styles.titleRow2}>
            <Text style={styles.addressTitle2}>Delivery methods</Text>
            <Text>change</Text>
          </View>
          <View style={styles.wrapAdress2}>
            <Text style={styles.street3}>Door delivery</Text>
            <Text style={styles.street2}>Pick up at store</Text>
            <Text style={styles.number2}>Dine in</Text>
          </View>
          <View style={styles.titleRow}>
            <Text>Total</Text>
            <Text style={styles.price}>IDR 123.000</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>Proceed to payment</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  titletext: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  title: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title2: {
    marginTop: 40,
    marginHorizontal: 50,
  },
  title3: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 15,
  },
  addressTitle: {
    fontWeight: 'bold',
  },
  street: {
    borderBottomWidth: 2,
    borderBottomColor: '#E5E5E5',
    marginHorizontal: 20,
    paddingVertical: 5,
  },
  street1: {
    borderBottomWidth: 2,
    borderBottomColor: '#E5E5E5',
    marginHorizontal: 20,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  number: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  wrapAdress: {
    backgroundColor: '#fff',
    height: 150,
    borderRadius: 20,
    justifyContent: 'center',
  },
  titleRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    marginBottom: 15,
  },
  addressTitle2: {
    fontWeight: 'bold',
  },
  street2: {
    borderBottomWidth: 2,
    borderBottomColor: '#E5E5E5',
    marginHorizontal: 20,
    paddingVertical: 15,
  },
  street3: {
    borderBottomWidth: 2,
    borderBottomColor: '#E5E5E5',
    marginHorizontal: 20,
    paddingBottom: 15,
  },
  number2: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  wrapAdress2: {
    backgroundColor: '#fff',
    height: 200,
    borderRadius: 20,
    justifyContent: 'center',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  btntext: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#6A4029',
    marginHorizontal: 50,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
  },
});
