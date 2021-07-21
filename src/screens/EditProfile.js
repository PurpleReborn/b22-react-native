import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {NativeBaseProvider, Radio} from 'native-base';
import profile from '../../images/profile.png';

export default class EditProfile extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <View style={styles.title}>
          <Text style={styles.titleCart}>Edit Profile</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.warpAll}>
            <View style={styles.parentPict}>
              <Image style={styles.profilePict} source={profile} />
              <TouchableOpacity style={styles.parentEdit}>
                <Icon name={'pencil'} size={20} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={styles.inputLabel}>User Name :</Text>
            <TextInput style={styles.input} />
            <Text style={styles.inputLabel}>First Name :</Text>
            <TextInput style={styles.input} />
            <Text style={styles.inputLabel}>Last Name :</Text>
            <TextInput style={styles.input} />
            <View>
              <Radio.Group
                name="radioBtn"
                colorScheme="amber"
                style={styles.btnRadio}
                onChange={nextChecked => {
                  this.setState({checked: nextChecked});
                }}>
                <Radio
                  accessibilityLabel="radio"
                  style={styles.radio}
                  value="Female"
                  my={1}>
                  <Text style={styles.radioText}>Female</Text>
                </Radio>
                <Radio
                  accessibilityLabel="radio"
                  style={styles.radio}
                  value="Male"
                  my={1}>
                  <Text style={styles.radioText}>Male</Text>
                </Radio>
              </Radio.Group>
            </View>
            <Text style={styles.inputLabel}>Email Adress :</Text>
            <TextInput style={styles.input} placeholderTextColor="black" />
            <Text style={styles.inputLabel}>Phone Number :</Text>
            <TextInput style={styles.input} />

            <Text style={styles.inputLabel}>Date of Birth</Text>
            <View style={styles.parentDate}>
              <TouchableOpacity>
                <Icon style={styles.date} name={'calendar'} size={20} />
              </TouchableOpacity>
            </View>

            <Text style={styles.inputLabel}>Delivery Adress :</Text>
            <TextInput style={styles.input} placeholderTextColor="black" />
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Save and Update</Text>
          </TouchableOpacity>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 30,
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
  warpAll: {
    paddingTop: 80,
  },
  parentPict: {
    alignItems: 'center',
  },
  profilePict: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  parentEdit: {
    top: -30,
    left: 30,
    backgroundColor: '#6A4029',
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnRadio: {
    flexDirection: 'row',
  },
  radio: {
    marginHorizontal: 5,
  },
  radioText: {
    paddingHorizontal: 15,
  },
  inputLabel: {
    fontWeight: 'bold',
    color: '#9F9F9F',
    marginTop: 15,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#6A4029',
    paddingVertical: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  parentDate: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input2: {
    paddingBottom: 10,
  },
  date: {
    paddingBottom: 9,
  },
});
