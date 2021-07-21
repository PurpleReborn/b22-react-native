import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import coldbrew from '../../images/coldbrew.png';

import Icon from 'react-native-vector-icons/Entypo';
import {getDetails} from '../redux/actions/items';
import {addItems} from '../redux/actions/cart';
import {connect} from 'react-redux';

class ProductDetails extends Component {
  componentDidMount() {
    this.props.getDetails(this.props.route.params.id);
    console.log(this.props.items.details);
  }

  funcAdd = () => {
    const data = {
      id: this.props.items.details.id,
      name: this.props.items.details.name,
      price: this.props.items.details.price,
      amount: 1,
    };
    this.props.addItems(data);
    ToastAndroid.showWithGravity(
      'items Add to Cart',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  };

  render() {
    const details = this.props.items.details;
    return (
      <View style={styles.parent}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={coldbrew} />
        </View>

        <View style={styles.dot}>
          <Icon name="dot-single" size={40} color="#6A4029" />
          <Icon name="dot-single" size={40} color="#C4C4C4" />
          <Icon name="dot-single" size={40} color="#C4C4C4" />
          <Icon name="dot-single" size={40} color="#C4C4C4" />
        </View>

        <View>
          <Text style={styles.h1}>{details.name}</Text>
          <Text style={styles.h2}>IDR.{details.price}</Text>
        </View>

        <View style={styles.paragraf1}>
          <Text style={styles.h3}>Delivery info</Text>
          <Text style={styles.h4}>
            Delivered only on monday until friday from 1 pm to 7 pm
          </Text>
          <Text style={styles.h3}>Description</Text>
          <Text style={styles.h4}>{details.description}</Text>
          <View style={styles.buttonwrap}>
            <TouchableOpacity onPress={this.funcAdd} style={styles.button}>
              <Text style={styles.textbutton}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const imageSize = 180;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 60,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  },
  imageWrapper: {
    marginTop: 80,
    alignItems: 'center',
  },
  dot: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  h2: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    color: '#6A4029',
  },
  paragraf1: {
    marginTop: 21,
    marginHorizontal: 50,
  },
  h3: {
    paddingTop: 20,
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonwrap: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: 254,
    height: 70,
    backgroundColor: '#6A4029',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textbutton: {
    color: '#fff',
  },
});

const mapStateToProps = state => ({
  items: state.items,
  cart: state.cart,
});

const mapDispatchToProps = {getDetails, addItems};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
