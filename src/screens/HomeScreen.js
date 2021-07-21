import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import itemsImage from '../../images/item.png';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';
import {connect} from 'react-redux';
import {getItems} from '../redux/actions/items';

class HomeScreen extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.icon}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('home')}>
            <Icon name="list-ul" color="#000" size={20} />
          </TouchableOpacity>
        </View>
        <Text style={styles.h1}>A good coffee is a good day</Text>
        <View>
          <TouchableOpacity>
            <View style={styles.search}>
              <Icon name="search" color="#000" size={20} />
              <Text style={styles.searchText}>Search</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView horizontal={true}>
            <View style={styles.category}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('favorite')}>
                <Text style={styles.itemCategory}>Favorite</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('promo')}>
                <Text style={styles.itemCategory}>Promo</Text>
              </TouchableOpacity>
              <Text style={styles.itemCategory}>Coffee</Text>
              <Text style={styles.itemCategory}>Non Coffee</Text>
            </View>
          </ScrollView>
        </View>

        <Text style={styles.seeMore}>See more</Text>

        <View>
          <ScrollView horizontal={true}>
            <FlatList
              data={this.props.items.data}
              horizontal
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('detail', {id: item.id})
                  }>
                  <View style={styles.itemWrap}>
                    <Image style={styles.itemImg} source={itemsImage} />
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>{item.price}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => String(item.id)}
            />
          </ScrollView>
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
            <Icon2 name="chatbox-ellipses-outline" color="#6A4029" size={25} />
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
  icon: {
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  h1: {
    textAlign: 'center',
    fontSize: 30,
    paddingTop: 10,
    paddingHorizontal: 50,
    fontWeight: 'bold',
  },
  search: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop: 30,
    backgroundColor: '#EFEEEE',
    marginHorizontal: 50,
    height: 60,
    alignItems: 'center',
    borderRadius: 60,
  },
  searchText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#757473',
    paddingHorizontal: 16,
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
    paddingHorizontal: 20,
    paddingTop: 20,
    textAlign: 'right',
    justifyContent: 'center',
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
    marginTop: 40,
  },
  iconRow2: {
    flexDirection: 'row',
  },
  iconItem: {
    paddingHorizontal: 20,
  },
});

const mapStateToProps = state => ({items: state.items});
const mapDispatchToProps = {getItems};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
