import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.title}>
          <Text style={styles.titleCart}> Privacy Policy</Text>
        </View>
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
  titleCart: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});
