import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {connect} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import userImage from '../../images/user2.png';

import ItemListChat from '../components/ItemListChat';
import ItemListChat2 from '../components/ItemListChat2';
import ItemUserChat from '../components/ItemUserChat';

import {chatList, searchUser} from '../redux/actions/chat';
import {getUser} from '../redux/actions/user';

import {BACKEND_URL} from '@env';
import {io} from 'socket.io-client';

const socket = io(`${BACKEND_URL}`);

class ChatList extends Component {
  state = {
    column: 'name',
    search: '',
    searchData: [],
    failed: false,
  };

  _onError = () => {
    this.setState({failed: true});
  };

  getList = () => {
    const {token} = this.props.auth;
    this.props.chatList(token);
    this.props.getUser(token);
  };

  search = () => {
    const column = this.state.column;
    const search = this.state.search;
    const {token} = this.props.auth;
    this.props.searchUser(token, column, search).then(() => {
      this.setState({
        searchData: this.props.chat.userData,
      });
    });
  };

  handleChange = val => {
    this.setState({
      search: val,
    });
  };

  componentDidMount() {
    const column = this.state.column;
    const search = this.state.search;
    const {token} = this.props.auth;
    this.props.searchUser(token, column, search).then(() => {
      this.setState({
        searchData: this.props.chat.userData,
      });
    });
    this._isMounted = true;
    this.getList();
    const {number} = this.props.user.details;
    // const {token} = this.props.auth;
    socket.on(number, data => {
      console.log(socket.id, data);
      this.props.chatList(token);
    });
    this.willFocusSubscription = this.props.navigation.addListener(
      'focus',
      () => {
        this.getList();
      },
    );
  }

  componentDidUpdate() {
    const {number} = this.props.user.details;
    const {token} = this.props.auth;
    socket.on(number, data => {
      console.log(socket.id, data);
      this.props.chatList(token);
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {data} = this.props.chat;
    const {details} = this.props.user;
    return (
      <View style={styles.parent}>
        <View style={styles.title}>
          <Text style={styles.titleCart}>Chat</Text>
        </View>
        <View style={styles.search}>
          <Icon name="search" color="#000" size={20} />
          <TextInput
            onChangeText={this.handleChange}
            onSubmitEditing={() => this.search()}
            value={this.state.search}
            platform="android"
            style={styles.searchText}
            placeholder="Search"
          />
        </View>
        <Picker
          style={styles.picker}
          selectedValue={this.state.column}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({column: itemValue})
          }>
          <Picker.Item label="Name" value="name" />
          <Picker.Item label="Phone " value="number" />
        </Picker>
        <Text style={styles.h1}>Choose your friend want to talk with you</Text>

        <View>
          <ScrollView
            style={styles.scroll}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            {this.state.searchData.map(z => {
              const validation = details.number === z.number;
              return (
                <ItemUserChat
                  onPress={() =>
                    this.props.navigation.navigate('chatRoom', {
                      selected: z,
                    })
                  }
                  validation={validation}
                  name={z.name !== null ? z.name : z.number}
                  picture={z.picture}
                />
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.chatWrap}>
          <Text style={styles.h3}>Message</Text>

          <ScrollView style={styles.scroll} vertical={true}>
            {data.map(s => {
              const validation = details.id === s.id;
              return (
                <ItemListChat2
                  onPress={() =>
                    this.props.navigation.navigate('chatRoom', {
                      selected: s,
                    })
                  }
                  key={s.id}
                  validation={validation}
                  name={s.name !== null ? s.name : s.number}
                  message={s.message}
                  picture={s.picture}
                  // fileUpload={`${BACKEND_URL}${data.images}`}
                />
              );
            })}

            <Text style={styles.h9}>You have no conversation left</Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  chat: state.chat,
  auth: state.auth,
  user: state.user,
});

const mapDispatchToProps = {chatList, searchUser, getUser};

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);

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
  picker: {
    marginHorizontal: 30,
  },
  titleCart: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  },
  search: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop: 10,
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
    paddingVertical: 10,
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
