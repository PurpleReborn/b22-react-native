import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {Radio} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import atm from '../../images/atm.png';
import {connect} from 'react-redux';
import {getUser} from '../redux/actions/user';
import {createTransaction} from '../redux/actions/payment';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_id: [],
      item_amount: 1,
      item_additional_price: 0,
      subTotal: '',
      total: '',
      payment_method: '',
      cheked: '',
    };
  }

  componentDidMount() {
    if (this.props.cart.items.length > 0) {
      this.setData();
    } else {
      this.setData({
        subTotal: 0,
        total: 0,
      });
    }
  }

  setData = () => {
    const item_id = [];
    // const item_amount = [];
    // const item_additional_price = [];
    this.props.cart.items.map(element => item_id.push(element.id));
    // this.props.cart.items.map((element) => item_amount.push(element.amount));
    this.setState(
      {
        item_id: this.state.item_id.concat(item_id),
        // item_amount: this.state.item_amount.concat(item_amount),
      },
      () => {
        const subTotal = this.props.cart.items.price;
        this.setState({
          subTotal,
          total: subTotal + subTotal * (10 / 100),
        });
      },
    );
  };

  createTransaction = () => {
    const {token} = this.props.auth;
    const {item_id, item_amount, item_additional_price, payment_method} =
      this.state;
    this.setState({
      subTotal: 0,
      total: 0,
    });
    if (this.state.payment_method !== '') {
      this.props
        .createTransaction(
          item_id,
          item_amount,
          item_additional_price,
          payment_method,
          token,
        )
        .then(() => {
          ToastAndroid.showWithGravity(
            'Payment success',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
        })
        .catch(err => {
          console.log(err);
          ToastAndroid.showWithGravity(
            'Failed',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
        });
    } else {
      ToastAndroid.showWithGravity(
        'Payment method is required',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  };

  // state = {
  //   cheked: '',
  // };
  render() {
    const {items} = this.props.cart;
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.add}>Products</Text>
          </View>
          <View style={styles.parentTopProduct}>
            {items.map(item => (
              <View style={styles.parentProduct}>
                <View style={styles.childProduct}>
                  <View style={styles.parentInside} key={item.id}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <View style={styles.parentPrice}>
                      <Text style={styles.productName}>x 1</Text>
                      <Text style={styles.productPrice}>{item.price}</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
          <Text style={styles.payMet}>Payment method</Text>
          <View style={styles.parentTopDeliv}>
            <View style={styles.parentDeliv}>
              <Radio.Group
                name="radioPayment"
                colorScheme="amber"
                value={this.state.payment_method}
                onChange={nextValue => {
                  this.setState({payment_method: nextValue});
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
            <Text style={styles.price}>{this.state.subTotal}</Text>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.createTransaction()}>
            <Text style={styles.btnText}>Proceed payment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  cart: state.cart,
  user: state.user,
});

const mapDispatchToProps = {
  getUser,
  createTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);

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
    fontFamily: 'Poppins-Bold',
    paddingBottom: 15,
  },
  add: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  },
  payMet: {
    paddingTop: 15,
    fontFamily: 'Poppins-Bold',
    paddingBottom: 10,
    fontSize: 18,
  },
  total: {
    fontFamily: 'Poppins-Bold',
  },
  price: {
    fontFamily: 'Poppins-Bold',
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
    fontFamily: 'Poppins-Bold',
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
    fontFamily: 'Poppins-Bold',
  },
  cardParent: {
    flexDirection: 'row',
  },
  textCard: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
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
