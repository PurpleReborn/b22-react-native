import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import userImage from '../../images/user2.png';

export default function ChatRight(props) {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.parentChat2}>
      <View style={styles.parentText2}>
        {/* {props.message !== null ? (
          <Text style={styles.textMsg2}>{props.message}</Text>
        ) : (
          <Image style={styles.fileUpload} source={props.image} />
        )} */}
        {props.message !== null ? (
          <Text style={styles.textMsg2}>{props.message}</Text>
        ) : (
          <Image
            style={styles.fileUpload}
            source={{uri: `${props.fileUpload}`}}
          />
        )}
      </View>
      <View>
        {props.picture !== null ? (
          <Image style={styles.chatImage} source={{uri: `${props.picture}`}} />
        ) : (
          <Image style={styles.chatImage} source={userImage} />
        )}
        {/* <Image style={styles.chatImage} source={userImage} /> */}
        {/* <Image style={styles.chatImage} source={props.image} /> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chatImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  fileUpload: {
    width: 70,
    height: 70,
  },
  textMsg2: {
    color: '#6A4029',
  },
  parentChat2: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  parentText2: {
    width: 250,
    marginHorizontal: 5,
    padding: 15,
    borderColor: '#6A4029',
    borderWidth: 1,
    borderRadius: 20,
  },
});
