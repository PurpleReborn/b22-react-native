import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import profile from '../../images/profile.png';
import {connect} from 'react-redux';
import {getUser} from '../redux/actions/user';

class Profile extends Component {
  componentDidMount() {
    const {token} = this.props.auth;
    this.props.getUser(token);
  }

  render() {
    // const {data} = this.props.user.details;
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.warpAll}>
          <Text style={styles.tagline}>My profile</Text>
          <View style={styles.topInfo}>
            <Text style={styles.subTagline}>Your Information</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('editProfile')}>
              <Text style={styles.editBtn}>edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profile}>
            <Image
              source={profile}
              style={styles.profilePict}
              // source={}
            />
            <View style={styles.parentTextInfo}>
              <Text style={styles.name}>
                {this.props.user.details.display_name}
              </Text>
              <Text style={styles.subTextProfile}>
                {this.props.user.details.email}
              </Text>
              <Text style={styles.subTextProfile}>
                {this.props.user.details.number}
              </Text>
              {this.props.user.details.address !== null ? (
                <Text style={styles.subTextProfile}>
                  {this.props.user.details.address}
                </Text>
              ) : (
                <Text style={styles.subTextProfile}>Your Address</Text>
              )}
            </View>
          </View>
          <TouchableOpacity
            style={styles.btnParent}
            onPress={() => this.props.navigation.navigate('history')}>
            <Text style={styles.textHis}>Order History</Text>
            <Icon name={'chevron-right'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnParent}>
            <Text style={styles.textHis}>Edit Password</Text>
            <Icon name={'chevron-right'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnParent}>
            <Text style={styles.textHis}>FAQ</Text>
            <Icon name={'chevron-right'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnParent}>
            <Text style={styles.textHis}>Help</Text>
            <Icon name={'chevron-right'} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  auth: state.auth,
});

const mapDispatchToProps = {getUser};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginBottom: 25,
    paddingHorizontal: 30,
  },
  warpAll: {
    // marginHorizontal: 30,
    marginTop: 80,
  },
  tagline: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  subTagline: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  editBtn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6A4029',
  },

  topInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  profile: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 30,
    flexShrink: 1,
    borderRadius: 30,
  },
  profilePict: {
    borderRadius: 100,
    width: 80,
    height: 80,
  },
  parentTextInfo: {
    marginLeft: 20,
    flexShrink: 1,
  },
  btnParent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 13,
    marginTop: 20,
    borderRadius: 15,
    width: '100%',
  },
  textHis: {
    paddingRight: 70,
    fontSize: 18,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTextProfile: {
    color: '#6A4029',
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#6A4029',
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
});
