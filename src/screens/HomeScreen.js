import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TextInput,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import itemsImage from '../../images/item.png';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import {connect} from 'react-redux';
import {getItems} from '../redux/actions/items';
import {Picker} from '@react-native-picker/picker';
import ItemProduct from '../components/ItemProduct';

class HomeScreen extends Component {
  state = {
    search: '',
    page: 1,
    itemSearch: [],
    sort: 'name',
    loadingMore: false,
  };

  componentDidMount() {
    // const search = this.state.search;
    // const sort = this.state.sort;
    const page = this.state.page;
    this.props.getItems(page);
  }

  handleLoadMore = () => {
    const page = this.state.page;
    if (this.state.page < this.props.items.pageInfo.totalPage) {
      this.setState(
        {
          page: this.state.page + 1,
        },
        () => {
          this.props.getItems(page);
          console.log('coba');
        },
      );
    }
  };

  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.parent}>
          <View style={styles.icon}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('home')}>
              <Icon name="list-ul" color="#000" size={20} />
            </TouchableOpacity>
          </View>
          <Text style={styles.h1}>A good coffee is a good day</Text>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('search')}
              style={styles.search}>
              <Icon name="search" color="#000" size={20} />
              <Text style={styles.searchText}>Search</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row9}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('favorite')}>
              <Text style={styles.seeMore}>See more</Text>
            </TouchableOpacity>
          </View>

          <View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={this.props.items.data}
              keyExtractor={item => item.id.toString()}
              horizontal
              // onEndReached={() => {
              //   console.log('load');
              // }}
              renderItem={({item}) => (
                <ItemProduct
                  onPress={() =>
                    this.props.navigation.navigate('detail', {id: item.id})
                  }
                  image={
                    item.picture !== null ? {uri: item.picture} : itemsImage
                  }
                  name={item.name}
                  price={item.price}
                />
              )}
              onEndReached={this.handleLoadMore}
              onEndReachedThreshold={0.1}
              // initialNumToRender={19}
            />
          </View>
        </View>
        <View style={styles.iconRow}>
          <View>
            <Icon name="home" color="#6A4029" size={25} />
          </View>
          <View style={styles.iconRow2}>
            <Icon
              style={styles.iconItem}
              color="#6A4029"
              name="user-circle"
              size={25}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('chatList')}>
              <Icon2
                name="chatbox-ellipses-outline"
                color="#6A4029"
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row9: {
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
  },
  icon: {
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  h1: {
    textAlign: 'center',
    fontSize: 30,
    paddingTop: 10,
    paddingHorizontal: 50,
    fontFamily: 'Poppins-Bold',
  },
  search: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop: 30,
    backgroundColor: '#EFEEEE',
    marginHorizontal: 30,
    height: 60,
    alignItems: 'center',
    borderRadius: 60,
  },
  searchText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#757473',
    paddingHorizontal: 40,
  },
  searchText2: {
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
    color: '#757473',
    paddingHorizontal: 40,
  },
  flex1: {
    flexDirection: 'row',
  },
  category: {
    flexDirection: 'row',
    marginLeft: 85,
    marginTop: 30,
  },
  itemCategory: {
    paddingHorizontal: 20,
    color: '#9A9A9D',
    fontSize: 17,
  },
  seeMore: {
    color: '#6A4029',
    fontSize: 17,
    // paddingHorizontal: 20,
    paddingTop: 20,
    textAlign: 'right',
    justifyContent: 'center',
    fontFamily: 'Poppins-Regular',
  },
  itemWrap: {
    width: 220,
    height: 270,
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
    fontWeight: 'bold',
  },
  itemPrice: {
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#6A4029',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    marginBottom: 20,
  },
  iconRow2: {
    flexDirection: 'row',
  },
  iconItem: {
    paddingHorizontal: 20,
  },
  pickbox: {
    marginLeft: 20,
    marginRight: 200,
  },
  err: {
    marginTop: 100,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h16: {
    textAlign: 'center',
    // paddingHorizontal: 20,
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#757473',
    alignItems: 'center',
  },
  btn19: {
    backgroundColor: '#6A4029',
    alignItems: 'center',
    borderRadius: 10,
  },
  hText: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

const mapStateToProps = state => ({items: state.items});
const mapDispatchToProps = {getItems};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
