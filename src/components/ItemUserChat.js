import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import user from '../../images/user2.png';
import userImage from '../../images/user2.png';

const ItemUserChat = ({name, validation, picture, onPress}) => {
  if (validation) {
    return <View />;
  } else {
    return (
      // <View>
      //   <ScrollView
      //     style={styles.scroll}
      //     showsHorizontalScrollIndicator={false}
      //     horizontal={true}>
      //     <TouchableOpacity>
      //       <Image style={styles.images} source={user} />
      //       <Text style={styles.h2}>{name}</Text>
      //     </TouchableOpacity>
      //   </ScrollView>
      // </View>
      <TouchableOpacity onPress={onPress}>
        {picture !== null ? (
          <Image style={styles.images} source={{uri: `${picture}`}} />
        ) : (
          <Image style={styles.images} source={userImage} />
        )}
        {/* <Image style={styles.images} source={picture} /> */}
        <Text style={styles.h2}>{name}</Text>
      </TouchableOpacity>
    );
  }
};

export default ItemUserChat;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleCart: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  },
  search: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop: 30,
    backgroundColor: '#F4F6F7',
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
  h1: {
    paddingVertical: 20,
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  h2: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  h3: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    paddingTop: 20,
    borderTopWidth: 2,
    borderColor: '#E0E0E2',
    paddingHorizontal: 30,
  },
  h9: {
    textAlign: 'center',
    paddingVertical: 10,
  },
  images: {
    width: 80,
    height: 80,
    borderRadius: 80,
    marginHorizontal: 5,
  },
  images2: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  scroll: {
    marginHorizontal: 40,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 210,
  },
  textWrap: {
    marginHorizontal: 10,
  },
  dsc: {
    width: 210,
  },
  chatWrap: {
    paddingTop: 20,
    height: 350,
  },
});
