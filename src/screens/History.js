import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import coldbrew from '../../images/coldbrew.png';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {getHistory, deleteTransaction} from '../redux/actions/payment';
import ItemHistory from '../components/ItemHistory';

// const ItemHistory = props => {
//   return (
//     <View style={styles.parentProduct}>
//       <Image source={coldbrew} style={styles.productPict} />
//       <View style={styles.parentInside}>
//         <Text style={styles.productName}>{props.code}</Text>
//         <Text style={styles.price2}>{props.payment_method}</Text>
//         <Text style={styles.status}>IDR {props.total}</Text>
//       </View>
//     </View>
//   );
// };

class History extends Component {
  componentDidMount() {
    const {token} = this.props.auth;
    console.log(token);
    this.props.getHistory(token);
  }

  onDelete = id => {
    const {token} = this.props.auth;
    this.props.deleteTransaction(token, id).then(() => {
      ToastAndroid.showWithGravity(
        'Success deleted',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      return this.props.navigation.reset({
        index: 0,
        routes: [{name: 'history'}],
      });
    });
  };

  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.title}>
          <Text style={styles.titleCart}> History </Text>
        </View>

        {this.props.transaction.data.length > 0 ? (
          <React.Fragment>
            <View style={styles.title}>
              <Icon name="swipe" size={25} color="#000" />
              <Text style={styles.swipe}>swipe on an item to delete</Text>
            </View>
            <SwipeListView
              data={this.props.transaction.data}
              renderItem={(data, rowMap) => (
                <ItemHistory
                  key={data.id}
                  code={data.item.code}
                  payment_method={data.item.payment_method}
                  total={data.item.total}
                />
              )}
              renderHiddenItem={(data, rowMap) => (
                <View style={styles.rowBack}>
                  <TouchableOpacity
                    onPress={() => this.onDelete(data.item.id)}
                    style={styles.iconCenter}>
                    <Icon2 name="trash-o" size={30} />
                  </TouchableOpacity>
                </View>
              )}
              leftOpenValue={80}
              rightOpenValue={10}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <View style={styles.title9}>
              <Text style={styles.swipe}>Empty History</Text>
            </View>
          </React.Fragment>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  title: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title9: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCart: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  itemWrap: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 40,
    height: 102,
    borderRadius: 20,
  },
  counter: {
    paddingTop: 30,
  },
  itemCenter: {
    paddingHorizontal: 10,
  },
  itemtext: {
    fontFamily: 'Poppins-Bold',
  },
  swipe: {
    fontFamily: 'Poppins-Regular',
  },
  price: {
    color: '#895537',
    paddingTop: 10,
  },
  button: {
    color: '#fff',
    marginHorizontal: 40,
    height: 70,
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 30,
  },
  textbutton: {
    color: '#9A9A9D',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
  rowBack: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    marginHorizontal: 40,
  },
  iconCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    backgroundColor: '#FFBA33',
    marginHorizontal: 10,
    textAlign: 'center',
    borderRadius: 45,
  },
  empty: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  textempty: {
    fontSize: 17,
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

const mapStateToProps = state => ({
  transaction: state.transaction,
  auth: state.auth,
});

const mapDispatchToProps = {getHistory, deleteTransaction};

export default connect(mapStateToProps, mapDispatchToProps)(History);
