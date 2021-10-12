import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Header = ({navigation, scene}) => {
  return (
    <View style={HeaderStyles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name={
            scene.route.name === 'home' ||
            scene.route.name === 'welcome' ||
            scene.route.name === 'signUp' ||
            scene.route.name === 'splash' ||
            scene.route.name === 'search'
              ? ''
              : 'chevron-left'
          }
          size={15}
          color="#000"
          // color={scene.route.name === 'detail' ? '#000' : '#fff'}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('cart')}>
        <AntIcon
          name={
            scene.route.name === 'home' ||
            scene.route.name === 'detail' ||
            scene.route.name === 'search'
              ? 'shoppingcart'
              : ''
          }
          size={15}
          color="#000"
          // color={scene.route.name === 'detail3' ? '#fff' : '#000'}
        />
      </TouchableOpacity>
    </View>
  );
};

const HeaderStyles = StyleSheet.create({
  header: {
    // backgroundColor: '#6A4029',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 41,
  },
});

export default Header;
