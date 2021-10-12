import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  ToastAndroid,
  Alert,
} from 'react-native';

import {connect} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import userImage from '../../images/user2.png';

import ChatRight from '../components/ChatRight';
import ChatLeft from '../components/ChatLeft';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  chatAll,
  sendChat,
  deleteChat2,
  uploadFile,
} from '../redux/actions/chat';
import {getUser} from '../redux/actions/user';

import {BACKEND_URL} from '@env';
import {io} from 'socket.io-client';

import PushNotification from 'react-native-push-notification';

const socket = io(`${BACKEND_URL}`);

class ChatRoom extends Component {
  state = {
    dataChat: [],
    inputMsg: '',
    selected: [],
  };

  userSelected = () => {
    this.setState({
      selected: this.props.route.params.selected,
    });
  };

  componentDidMount() {
    console.log(this.props.chat.allData);
    this.userSelected();
    this.getData();
    const {number} = this.props.user.details;
    const {token} = this.props.auth;
    socket.on(number, data => {
      console.log(socket.id, data);
      this.props.chatAll(token, data.sender).then(() => {
        this.setState({
          dataChat: this.props.chat.allData,
        });
      });
    });
    console.log(this.state.selected);
  }

  componentDidUpdate() {
    const {number} = this.props.user.details;
    const {token} = this.props.auth;
    socket.on(number, data => {
      console.log(socket.id, data);
      this.props.chatAll(token, data.sender).then(() => {
        this.setState({
          dataChat: this.props.chat.allData,
        });
      });
    });
  }

  getData = () => {
    const number = this.props.route.params.selected.number;
    const {token} = this.props.auth;
    this.props.chatAll(token, number).then(() => {
      this.setState({
        dataChat: this.props.chat.allData,
      });
    });
    this.props.getUser(token);
  };

  onSend = () => {
    const message = this.state.inputMsg;
    const {token} = this.props.auth;
    const recipient = this.state.selected.number;

    if (message !== '') {
      this.props.sendChat(token, recipient, message).then(() => {
        this.props.chatAll(token, recipient).then(() => {
          this.setState({
            dataChat: this.props.chat.allData,
          });
        });
        this.setState({
          inputMsg: '',
        });
      });
      setTimeout(() => {
        PushNotification.localNotification({
          channelId: 'general-notif',
          title: 'Cofeeshop',
          message: 'Success send message',
        });
      }, 2000);
      ToastAndroid.showWithGravity(
        'Send Message Success',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    } else {
      // showMessage({
      //   message: 'message cannot be empty',
      //   type: 'default',
      //   backgroundColor: '#D54C4C',
      //   color: 'white',
      // });
      ToastAndroid.showWithGravity(
        'Send Message Success',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  };

  getData = () => {
    const number = this.props.route.params.selected.number;
    const {token} = this.props.auth;
    this.props.chatAll(token, number).then(() => {
      this.setState({
        dataChat: this.props.chat.allData,
      });
    });
    this.props.getUser(token);
  };

  onDelete = id => {
    const {token} = this.props.auth;
    const recipient = this.state.selected.recipient;

    Alert.alert('Option', 'Are You Sure Want to Delete?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => setDel(),
      },
    ]);

    const setDel = () => {
      this.props.deleteChat2(token, id, recipient).then(() => {
        this.getData();
      });
    };
  };

  onPick = () => {
    Alert.alert('Option', 'Choose your image', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Camera',
        onPress: () => this.selectLaunch(),
      },
      {
        text: 'Galery',
        onPress: () => this.selectPict(),
      },
    ]);
  };

  selectLaunch = e => {
    let options = {
      mediaType: 'photo',
      maxWidth: 150,
      maxHeight: 150,
    };
    launchCamera(options, response => {
      if (!response.didCancel) {
        const maxSize = 1024 * 1024 * 2;
        if (response.assets[0].fileSize < maxSize) {
          const {token} = this.props.auth;
          const recipient = this.state.selected.number;
          this.props
            .uploadFile(token, recipient, response.assets[0])
            .then(() => {
              this.getData();
            });
          ToastAndroid.showWithGravity(
            'Send File Success',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
        } else {
          ToastAndroid.showWithGravity(
            'File To Large!',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
        }
      }
    });
  };

  selectPict = e => {
    let options = {
      mediaType: 'photo',
    };
    launchImageLibrary(options, response => {
      if (!response.didCancel) {
        const maxSize = 1024 * 1024 * 2;
        if (response.assets[0].fileSize < maxSize) {
          const {token} = this.props.auth;
          const recipient = this.state.selected.number;
          this.props
            .uploadFile(token, recipient, response.assets[0])
            .then(() => {
              this.getData();
            });
          ToastAndroid.showWithGravity(
            'Send File Success',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
        } else {
          ToastAndroid.showWithGravity(
            'File To Large!',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
        }
      }
    });
  };

  render() {
    // console.log(this.props.route.params.selected, 'ini datanya');

    const {details} = this.props.user;
    // console.log(`${BACKEND_URL}${details.picture}`);
    // console.log(details, 'details');
    return (
      <View style={styles.parent}>
        <View style={styles.parent}>
          <View style={styles.title}>
            <Image style={styles.images} source={userImage} />
            {/* <Text style={styles.titleCart}>Name</Text> */}
            {this.props.route.params.selected.name !== null ? (
              <Text style={styles.titleCart}>
                {this.props.route.params.selected.name}
              </Text>
            ) : (
              <Text style={styles.titleCart}>
                {this.props.route.params.selected.number}
              </Text>
            )}
            <Text>Click chat to delete</Text>
          </View>

          <ScrollView
            ref={ref => {
              this.scrollView = ref;
            }}
            onContentSizeChange={() =>
              this.scrollView.scrollToEnd({animated: true})
            }>
            {this.state.dataChat.map(data => {
              return data.sender !== details.number ? (
                <ChatLeft
                  key={data.id}
                  picture={`${BACKEND_URL}${data.picture}`}
                  message={data.message}
                  fileUpload={`${BACKEND_URL}${data.images}`}
                  onPress={() => this.onDelete(data.id)}
                />
              ) : (
                <ChatRight
                  key={data.id}
                  picture={`${BACKEND_URL}${details.picture}`}
                  message={data.message}
                  fileUpload={`${BACKEND_URL}${data.images}`}
                  onPress={() => this.onDelete(data.id)}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.parentInput}>
          <TouchableOpacity onPress={this.onPick}>
            <Icon name={'file-text-o'} size={30} color="#ADADAF" />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            placeholderTextColor="#878787"
            value={this.state.inputMsg}
            onChangeText={e => this.setState({inputMsg: e})}
            // onSubmitEditing={() => this.onSend()}
          />

          <TouchableOpacity onPress={this.onSend}>
            <Icon name={'send'} size={30} color="#ADADAF" />
          </TouchableOpacity>
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

const mapDispatchToProps = {
  chatAll,
  getUser,
  deleteChat2,
  sendChat,
  uploadFile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#E0E0E2',
  },
  picker: {
    marginHorizontal: 30,
  },
  titleCart: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    paddingBottom: 5,
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
  input: {
    backgroundColor: '#ededed',
    margin: 15,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 50,
    flex: 1,
  },
  parentInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  roomWrap: {
    marginTop: 10,
  },
});
