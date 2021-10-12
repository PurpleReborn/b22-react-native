import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import userImage from '../../images/user2.png';

export default function ChatLeft(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.parent}>
      <View>
        {/* {props.picture !== null ? (
          <Image style={styles.image} source={{uri: `${props.picture}`}} />
        ) : (
          <Image style={styles.image} source={userImage} />
        )} */}
        <Image style={styles.image} source={userImage} />
      </View>
      <View style={styles.parentText}>
        {props.message !== null ? (
          <Text style={styles.text}>{props.message}</Text>
        ) : (
          <Image
            style={styles.fileUpload}
            source={{uri: `${props.fileUpload}`}}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  text: {
    color: 'white',
  },
  parent: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  parentText: {
    width: 250,
    marginHorizontal: 5,
    padding: 15,
    backgroundColor: '#6A4029',
    borderRadius: 20,
  },
  fileUpload: {
    width: 70,
    height: 70,
  },
});
