/**
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import reduxConfig from './src/redux/reducers/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import PushNotification from 'react-native-push-notification';

const redux = reduxConfig();

PushNotification.configure({
  onRegister: token => {
    console.log(token, 'FCM');
  },
});

PushNotification.createChannel({
  channelId: 'general-notif',
  channelName: 'General Notification',
});

const Main = () => {
  return (
    <Provider store={redux.store}>
      <PersistGate persistor={redux.persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
