//
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import ItemCarts from '../components/ItemCarts';
import {deleteItem} from '../redux/actions/cart';
import {SwipeListView} from 'react-native-swipe-list-view';

class Carts extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.parent}>
          <View style={styles.title}>
            <Text style={styles.titleCart}> My Coupons </Text>
          </View>
          <View style={styles.warp}>
            <View style={styles.parentTag}>
              <Icon name="swipe" size={25} />
              <Text>Swipe on an item to delete</Text>
            </View>

            <SwipeListView
              data={this.props.cart.items}
              renderItem={(data, rowMap) => (
                <ItemCarts
                  key={data.item.id}
                  name={data.item.name}
                  price={data.item.price}
                  // amount={data.item.amount}
                />
              )}
              renderHiddenItem={(data, rowMap) => (
                <View style={styles.parentHide}>
                  <TouchableOpacity style={styles.icon}>
                    <Icon name="favorite-border" size={25} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.deleteItem(data.index)}
                    style={styles.icon}>
                    <Icon2 name="trash-o" size={30} />
                  </TouchableOpacity>
                </View>
              )}
              leftOpenValue={130}
              rightOpenValue={130}
            />
          </View>

          <View style={styles.bottom}>
            {this.props.cart.items.length !== 0 ? (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.props.navigation.navigate('payment')}>
                <Text style={styles.textbtn}>Confirm and Checkout</Text>
              </TouchableOpacity>
            ) : (
              <Text style={styles.textEmpty}>Empty Cart Item</Text>
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Carts);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  parentTag: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30,
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
    flex: 1,
    marginHorizontal: 30,
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  parentProduct: {
    width: 300,
    height: 100,
    backgroundColor: '#ffff',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  parentPrice: {
    flexDirection: 'row',
    marginTop: 5,
  },
  productName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  price: {
    color: '#895537',
    fontWeight: 'bold',
  },
  productChild: {
    marginHorizontal: 10,
  },
  productPict: {
    borderRadius: 100,
    marginLeft: 10,
  },
  counter: {
    flexDirection: 'row',
    backgroundColor: '#6A4029',
    width: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 100,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  counterChild: {
    color: 'white',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#6A4029',
    paddingVertical: 25,
    borderRadius: 15,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textbtn: {
    color: 'white',
    fontWeight: 'bold',
  },
  warp: {
    alignItems: 'center',
  },
  bottom: {
    paddingBottom: 30,
    paddingTop: 40,
  },
  parentHide: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: '#FFBA33',
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textEmpty: {
    textAlign: 'center',
  },
});
