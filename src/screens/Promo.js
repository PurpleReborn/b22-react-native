import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import itemsImage from '../../images/item.png';

export default function Promo({navigation}) {
  return (
    <View style={Styles.parent}>
      <Text style={Styles.title}>Promo for you</Text>
      <View style={Styles.child}>
        <Text style={Styles.childtext}>Stay Hungry!</Text>
        <Text style={Styles.childdesc}>Good deals update every wednesday</Text>
        <View>
          <ScrollView vertical={true}>
            {[...Array(10)].map((_i, idx) => (
              <View style={Styles.flexcol}>
                <TouchableOpacity onPress={() => navigation.navigate('detail')}>
                  <View style={Styles.itemWrap} key={String(idx)}>
                    <Image style={Styles.itemImg} source={itemsImage} />
                    <Text style={Styles.itemName}>Hazelnut Latte</Text>
                    <Text style={Styles.itemPrice}>IDR 25.000</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('detail')}>
                  <View style={Styles.itemWrap} key={String(idx)}>
                    <Image style={Styles.itemImg} source={itemsImage} />
                    <Text style={Styles.itemName}>Hazelnut Latte</Text>
                    <Text style={Styles.itemPrice}>IDR 25.000</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  title: {
    fontWeight: 'bold',
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
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  childdesc: {
    textAlign: 'center',
    paddingBottom: 10,
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
});
