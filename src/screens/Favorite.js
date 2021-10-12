import React, {useEffect} from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import itemsImage from '../../images/item.png';
import {getItems3} from '../redux/actions/items';
import {connect} from 'react-redux';

const Favorite = ({props, navigation}) => {
  const dispatch = useDispatch();
  const {details} = useSelector(state => state.items);
  useEffect(() => {
    dispatch(getItems3());
  }, [dispatch, navigation]);

  return (
    <View style={Styles.parent}>
      <Text style={Styles.title}>Favorite Products</Text>
      <View style={Styles.child}>
        <Text style={Styles.childtext}>Choose your favorite</Text>
        <View>
          {/* <ScrollView vertical={true}>
            {details.map(item => (
              <View style={Styles.flexcol}>
                <TouchableOpacity onPress={() => navigation.navigate('detail')}>
                  <View style={Styles.itemWrap} key={String(item.id)}>
                    <Image style={Styles.itemImg} source={itemsImage} />
                    <Text style={Styles.itemName}>{item.name}</Text>
                    <Text style={Styles.itemPrice}>{item.price}</Text>
                  </View>
                </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={() => navigation.navigate('detail')}>
                  <View style={Styles.itemWrap} key={String(idx)}>
                    <Image style={Styles.itemImg} source={itemsImage} />
                    <Text style={Styles.itemName}>Hazelnut Latte</Text>
                    <Text style={Styles.itemPrice}>IDR 25.000</Text>
                  </View>
                </TouchableOpacity> */}
          {/* </View>
            ))}
          </ScrollView> */}

          <FlatList
            // style={Styles.flexcol}
            showsVerticalScrollIndicator={false}
            data={details}
            keyExtractor={data => data.id.toString()}
            vertical
            // onEndReached={() => {
            //   console.log('load');
            // }}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('detail', {id: item.id})}>
                <View style={Styles.itemWrap} key={String(item.id)}>
                  {item.picture !== null ? (
                    <Image
                      style={Styles.itemImg}
                      source={{uri: item.picture}}
                    />
                  ) : (
                    <Image style={Styles.itemImg} source={itemsImage} />
                  )}

                  <Text style={Styles.itemName}>{item.name}</Text>
                  <Text style={Styles.itemPrice}>IDR {item.price}</Text>
                </View>
              </TouchableOpacity>
            )}
            numColumns={2}
          />
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 17,
  },
  child: {
    backgroundColor: '#fff',
    marginTop: 30,
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  childtext: {
    marginTop: 28,
    fontSize: 26,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  itemWrap: {
    width: 150,
    height: 200,
    marginTop: 80,
    backgroundColor: '#EFEEEE',
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  itemImg: {
    width: 120,
    height: 120,
    borderRadius: 120,
    marginTop: -60,
  },
  flexcol: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemName: {
    textAlign: 'center',
    paddingHorizontal: 5,
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  itemPrice: {
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
    color: '#6A4029',
  },
});

const mapStateToProps = state => ({
  items: state.items,
  auth: state.auth,
});

const mapDispatchToProps = {getItems3};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
