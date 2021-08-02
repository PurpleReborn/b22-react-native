import React, {Component} from 'react';
import {
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
import {launchImageLibrary} from 'react-native-image-picker';
import {BACKEND_URL} from '@env';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      picture: '',
      pictureUri: '',
      number: '',
      address: '',
      name: null,
      firstName: '',
      lastName: '',
      Update: false,
    };
  }

  componentDidMount() {
    this.detailsUser();
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

  changeUser = () => {
    if (this.state.picture === '') {
      const data = {
        email: this.state.email,
        number: this.state.number,
        address: this.state.address,
        name: this.state.name,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      };
      const {token} = this.props.auth;
      this.props
        .updateUser(token, data)
        .then(() => {
          this.setState({
            Update: !this.state.Update,
          });
          ToastAndroid.showWithGravity(
            'Update success',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
        })
        .catch(err => {
          console.log(err);
          ToastAndroid.showWithGravity(
            `${this.props.auth.errMsg}`,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
        });
    } else {
      const data = {
        email: this.state.email,
        picture: this.state.picture,
        number: this.state.number,
        address: this.state.address,
        name: this.state.name,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      };
      const {token} = this.props.auth;
      this.props
        .updateUser(token, data)
        .then(() => {
          this.setState({
            Update: !this.state.Update,
          });
          ToastAndroid.showWithGravity(
            'Update success',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
        })
        .catch(err => {
          console.log(err);
          ToastAndroid.showWithGravity(
            'Update failed',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
        });
    }
  };

  selectPict = e => {
    if (!e.didCancel) {
      this.setState({
        pictureUri: e.assets[0].uri,
        picture: e.assets[0],
      });
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
              {this.props.user.details.picture === null ? (
                <Image
                  style={styles.profilePict}
                  source={
                    this.state.pictureUri === ''
                      ? {
                          uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                        }
                      : {uri: this.state.pictureUri}
                  }
                />
              ) : (
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

              <TouchableOpacity
                onPress={() =>
                  launchImageLibrary({quality: 0.5}, this.selectPict)
                }
                style={styles.parentEdit}>
                <Icon name={'pencil'} size={20} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={styles.inputLabel}>User Name :</Text>
            <TextInput
              value={this.state.name}
              onChangeText={value => {
                this.setState({name: value});
              }}
              style={styles.input}
            />
            <Text style={styles.inputLabel}>First Name :</Text>
            <TextInput
              value={this.state.firstName}
              onChange={value => {
                this.setState({firstName: value});
              }}
              style={styles.input}
            />
            <Text style={styles.inputLabel}>Last Name :</Text>
            <TextInput
              value={this.state.lastName}
              onChange={value => {
                this.setState({lastName: value});
              }}
              style={styles.input}
            />
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
            <TextInput
              value={this.state.email}
              onChange={value => {
                this.setState({email: value});
              }}
              style={styles.input}
              placeholderTextColor="black"
            />
            <Text style={styles.inputLabel}>Phone Number :</Text>
            <TextInput
              value={this.state.number}
              onChange={value => {
                this.setState({number: value});
              }}
              style={styles.input}
            />

            <Text style={styles.inputLabel}>Date of Birth</Text>
            <View style={styles.parentDate}>
              <TouchableOpacity>
                <Icon style={styles.date} name={'calendar'} size={20} />
              </TouchableOpacity>
            </View>

            <Text style={styles.inputLabel}>Delivery Adress :</Text>
            <TextInput
              value={this.state.address}
              onChange={value => {
                this.setState({address: value});
              }}
              style={styles.input}
              placeholderTextColor="black"
            />
          </View>
          <TouchableOpacity onPress={this.changeUser} style={styles.btn}>
            <Text style={styles.btnText}>Save and Update</Text>
          </TouchableOpacity>
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
