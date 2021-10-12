import React, {Component} from 'react';
import {
  Alert,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {NativeBaseProvider, Radio} from 'native-base';
// import profile from '../../images/profile.png';
import {getUser, updateUser} from '../redux/actions/user';
import {connect} from 'react-redux';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {BACKEND_URL} from '@env';
import MyButton from '../components/MyButton';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdate: false,
      email: null,
      pictureUri: '',
      picture: null,
      number: '',
      address: '',
      name: null,
      firstName: '',
      lastName: '',
    };
  }

  componentDidMount() {
    const {token} = this.props.auth;
    this.detailsUser(token);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isUpdate !== this.state.isUpdate) {
      this.detailsUser2();
    }
  }

  detailsUser = () => {
    const {token} = this.props.auth;
    this.props.getUser(token).then(() => {
      this.setState({
        email: this.props.user.details.email,
        picture: this.props.user.details.picture,
        number: this.props.user.details.number,
        address: this.props.user.details.address,
        name: this.props.user.details.name,
        firstName: this.props.user.details.firstName,
        lastName: this.props.user.details.lastName,
      });
    });
  };

  detailsUser2 = () => {
    const {token} = this.props.auth;
    this.props.getUser(token).then(() => {
      this.setState({
        email: this.props.user.details.email,
        picture: this.props.user.details.picture,
        number: this.props.user.details.number,
        address: this.props.user.details.address,
        name: this.props.user.details.name,
        firstName: this.props.user.details.firstName,
        lastName: this.props.user.details.lastName,
      });
    });
  };

  changeUser = e => {
    e.preventDefault();
    const data = {
      picture: this.state.picture,
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      number: this.state.number,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };
    const data2 = {
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      number: this.state.number,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };
    const {token} = this.props.auth;
    if (
      this.state.picture === null ||
      this.state.picture === undefined ||
      this.state.picture === ''
    ) {
      if (
        data2.name !== '' &&
        data2.address !== '' &&
        data2.email !== '' &&
        data2.number !== '' &&
        data2.firstName !== '' &&
        data2.lastName !== '' &&
        data2.name !== 'null' &&
        data2.address !== 'null' &&
        data2.email !== 'null' &&
        data2.number !== 'null' &&
        data2.firstName !== 'null' &&
        data2.lastName !== 'null'
      ) {
        this.props.updateUser(data2, token).then(() => {
          this.setState({
            isUpdate: !this.state.isUpdate,
          });
          if (this.props.user.msg === 'Update SuccessFully') {
            ToastAndroid.showWithGravity(
              'Update success',
              ToastAndroid.LONG,
              ToastAndroid.CENTER,
            );
            // return this.props.navigation.reset({
            //   index: 0,
            //   routes: [{name: 'profile'}],
            // });
          } else {
            ToastAndroid.showWithGravity(
              `${this.props.user.errMsg}`,
              ToastAndroid.LONG,
              ToastAndroid.CENTER,
            );
          }
        });
      } else {
        ToastAndroid.showWithGravity(
          'Form cannot be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      }
    } else {
      if (
        data2.name !== '' &&
        data2.address !== '' &&
        data2.email !== '' &&
        data2.number !== '' &&
        data2.firstName !== '' &&
        data2.lastName !== '' &&
        data2.name !== 'null' &&
        data2.address !== 'null' &&
        data2.email !== 'null' &&
        data2.number !== 'null' &&
        data2.firstName !== 'null' &&
        data2.lastName !== 'null'
      ) {
        this.props.updateUser(data, token).then(() => {
          this.setState({
            isUpdate: !this.state.isUpdate,
          });
          if (this.props.user.msg === 'Update SuccessFully') {
            ToastAndroid.showWithGravity(
              'Update success',
              ToastAndroid.LONG,
              ToastAndroid.CENTER,
            );
          } else {
            ToastAndroid.showWithGravity(
              `${this.props.user.errMsg}`,
              ToastAndroid.LONG,
              ToastAndroid.CENTER,
            );
          }
        });
      } else {
        ToastAndroid.showWithGravity(
          'Form cannot be empty',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
      }
    }
  };

  // selectPict = e => {
  //   if (!e.didCancel) {
  //     this.setState({
  //       pictureUri: e.assets[0].uri,
  //       picture: e.assets[0],
  //     });
  //   }
  // };

  setPicture = () => {
    Alert.alert('Select Picture', 'Please choose a picture', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Gallery',
        onPress: () => launchImageLibrary({quality: 1}, this.selectPicture),
      },
      {
        text: 'Camera',
        onPress: () => launchCamera({quality: 1}, this.selectPicture),
      },
    ]);
  };

  selectPicture = e => {
    if (!e.didCancel) {
      const maxSize = 1024 * 1024 * 2;
      if (e.assets[0].fileSize < maxSize) {
        if (
          e.assets[0].type === 'image/jpeg' ||
          e.assets[0].type === 'image/jpg' ||
          e.assets[0].type === 'image/png'
        ) {
          this.setState({
            pictureUri: e.assets[0].uri,
            picture: e.assets[0],
          });
        } else {
          ToastAndroid.showWithGravity(
            'Not a picture',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
        }
      } else {
        ToastAndroid.showWithGravity(
          'file To Large',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        this.setState({
          pictureUri: '',
          picture: null,
        });
      }
    }
  };

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
              {this.props.user.details.picture !== null && (
                <Image
                  style={styles.profilePict}
                  source={
                    this.state.pictureUri === ''
                      ? {
                          uri: `${BACKEND_URL}${this.props.user.details.picture}`,
                        }
                      : {
                          uri: this.state.pictureUri,
                        }
                  }
                />
              )}
              {this.props.user.details.picture === null && (
                <Image
                  style={styles.profilePict}
                  source={
                    this.state.pictureUri === ''
                      ? {
                          uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                        }
                      : {
                          uri: this.state.pictureUri,
                        }
                  }
                />
              )}

              <TouchableOpacity
                onPress={this.setPicture}
                style={styles.parentEdit}>
                <Icon name={'pencil'} size={20} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={styles.inputLabel}>User Name :</Text>
            <TextInput
              value={this.state.name}
              onChangeText={e => this.setState({name: e})}
              style={styles.input}
            />
            <Text style={styles.inputLabel}>First Name :</Text>
            <TextInput
              value={this.state.firstName}
              onChangeText={e => this.setState({firstName: e})}
              style={styles.input}
            />
            <Text style={styles.inputLabel}>Last Name :</Text>
            <TextInput
              value={this.state.lastName}
              onChangeText={e => this.setState({lastName: e})}
              style={styles.input}
            />
            {/* <View>
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
            </View> */}
            <Text style={styles.inputLabel}>Email Adress :</Text>
            <TextInput
              value={this.state.email}
              onChangeText={e => this.setState({email: e})}
              style={styles.input}
              placeholderTextColor="black"
            />
            <Text style={styles.inputLabel}>Phone Number :</Text>
            <TextInput
              value={this.state.number}
              onChangeText={e => this.setState({number: e})}
              style={styles.input}
            />

            {/* <Text style={styles.inputLabel}>Date of Birth</Text>
            <View style={styles.parentDate}>
              <TouchableOpacity>
                <Icon style={styles.date} name={'calendar'} size={20} />
              </TouchableOpacity>
            </View> */}

            <Text style={styles.inputLabel}>Delivery Adress :</Text>
            <TextInput
              value={this.state.address}
              onChangeText={e => this.setState({address: e})}
              style={styles.input}
              placeholderTextColor="black"
            />
          </View>

          <MyButton onPress={this.changeUser} name={'Save and Update'} />
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  auth: state.auth,
});

const mapDispatchToProps = {getUser, updateUser};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

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
    fontFamily: 'Poppins-Bold',
    color: '#9F9F9F',
    marginTop: 15,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
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
