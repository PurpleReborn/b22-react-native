import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Radio} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import atm from '../../images/atm.png';

export default class Payment extends Component {
  state = {
    cheked: '',
  };
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.add}>Products</Text>
          </View>
          <View style={styles.parentTopProduct}>
            <View style={styles.parentProduct}>
              <View style={styles.childProduct}>
                <View style={styles.parentInside}>
                  <Text style={styles.productName}>Hazelnut Latte</Text>
                  <View style={styles.parentPrice}>
                    <Text style={styles.productName}>x 1</Text>
                    <Text style={styles.productPrice}>IDR 24.0</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.payMet}>Payment method</Text>
          <View style={styles.parentTopDeliv}>
            <View style={styles.parentDeliv}>
              <Radio.Group
                name="radioPayment"
                value={this.state.checked}
                colorScheme="amber"
                onChange={nextChecked => {
                  this.setState({checked: nextChecked});
                }}>
                <Radio value="Card" my={1}>
                  <View style={styles.iconMet}>
                    <Icon name={'credit-card'} size={13} color={'white'} />
                  </View>
                  <Text style={styles.textMet}>Card</Text>
                </Radio>
                <Radio value="Bank account" my={1}>
                  <View style={styles.iconMet2}>
                    <Icon name={'bank'} size={13} color={'white'} />
                  </View>
                  <Text style={styles.textMet}>Bank account</Text>
                </Radio>
                <Radio value="Cash on delivery" my={1}>
                  <View style={styles.iconMet3}>
                    <Icon name={'truck'} size={13} />
                  </View>
                  <Text style={styles.textMet}>Cash on delivery</Text>
                </Radio>
              </Radio.Group>
            </View>
          </View>
          <Text style={styles.textCard}>My Card</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.cardParent}>
              <Image source={atm} />
              <Image source={atm} />
              <Image source={atm} />
              <Image source={atm} />
            </View>
          </ScrollView>
          <View style={styles.parentTotal}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.price}>IDR 123.000</Text>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate('history')}>
            <Text style={styles.btnText}>Proceed payment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginBottom: 25,
  },
  childProduct: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  parentPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconMet: {
    backgroundColor: '#F47B0A',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 15,
  },
  iconMet2: {
    backgroundColor: '#895537',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 15,
  },
  iconMet3: {
    backgroundColor: '#FFBA33',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 15,
  },
  textMet: {
    fontSize: 15,
  },
  deliv: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  add: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  payMet: {
    paddingTop: 15,
    fontWeight: 'bold',
    paddingBottom: 10,
    fontSize: 18,
  },
  total: {
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  parent: {
    marginTop: 70,
    marginHorizontal: 30,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  parentTopProduct: {
    alignItems: 'center',
  },
  parentProduct: {
    backgroundColor: '#ffff',
    width: 300,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
  },
  input: {
    fontWeight: 'bold',
    borderBottomWidth: 0.5,
  },
  parentTopDeliv: {
    alignItems: 'center',
  },
  parentDeliv: {
    backgroundColor: '#ffff',
    width: 300,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
  },
  parentTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  btn: {
    backgroundColor: '#6A4029',
    paddingVertical: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cardParent: {
    flexDirection: 'row',
  },
  textCard: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  parentInside: {
    paddingHorizontal: 10,
    flex: 1,
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
  },
});
