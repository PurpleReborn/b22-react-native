import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import mie from '../../images/spageti.png';

export default class Coupon extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleCart}> My Coupons </Text>
        </View>
        <Text style={styles.subTag}>
          Coupons will be updated every weeks. Check them out!
        </Text>
        <View style={styles.parent}>
          <View style={styles.bgOrange}>
            <View style={styles.parentTop}>
              <Image style={styles.pict} source={mie} />
              <Text style={styles.productName}>Beef Spaghetti</Text>
              <Text style={styles.productName}>20% OFF</Text>
              <Text style={styles.disc}>
                Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
              </Text>
            </View>
            <View style={styles.parentBot}>
              <Text>COUPON CODE</Text>
              <Text style={styles.code}>FNPR15RG</Text>
              <Text>Valid untill October 10th 2020</Text>
            </View>
          </View>
          <View style={styles.bgBlack} />
          <View style={styles.bgBrown} />
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('delivery')}
          style={styles.btn}>
          <Text style={styles.btnText}>Apply Coupon</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },
  titleCart: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  title: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  subTag: {
    textAlign: 'center',
    marginTop: 50,
    marginHorizontal: 50,
    fontWeight: 'bold',
  },
  bgOrange: {
    backgroundColor: '#FFCB65',
    width: 230,
    height: 400,
    borderRadius: 20,
    // paddingHorizontal: 15,
    paddingVertical: 15,
    zIndex: 99,
  },
  bgBlack: {
    backgroundColor: 'black',
    width: 40,
    height: 360,
    marginLeft: -13,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 98,
  },
  bgBrown: {
    backgroundColor: '#895537',
    width: 40,
    height: 300,
    marginLeft: -13,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  pict: {
    width: 110,
    height: 110,
    borderRadius: 100,
    marginBottom: 10,
  },
  parentTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderWidth: 0,
    borderStyle: 'dashed',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  disc: {
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  parentBot: {
    paddingHorizontal: 15,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  code: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#6A4029',
    height: 60,
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 20,
    width: '70%',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
});
