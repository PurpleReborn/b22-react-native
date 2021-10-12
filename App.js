import React, {Component, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './src/components/DrawerContent';
import {connect} from 'react-redux';
import {NativeBaseProvider} from 'native-base';

import Welcome from './src/screens/auth/Welcome';
import SignUp from './src/screens/auth/SignUp';
import SignUp2 from './src/screens/auth/SignUp2';
import Login from './src/screens/auth/Login';

import HomeScreen from './src/screens/HomeScreen';
import ProductDetails from './src/screens/ProductDetails';
import EditProfile from './src/screens/EditProfile';
import Profile from './src/screens/Profile';
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import Security from './src/screens/Security';
import Favorite from './src/screens/Favorite';
import Promo from './src/screens/Promo';
import Coupon from './src/screens/Coupon';
import Delivery from './src/screens/Delivery';
import Payment from './src/screens/Payment';
import History from './src/screens/History';
import Splash from './src/screens/Splash';

import Cart from './src/screens/Cart';

import Header from './src/components/Header';
import Search from './src/screens/Search';
import ChatList from './src/screens/ChatList';
import ChatRoom from './src/screens/ChatRoom';

// import Icon from 'react-native-vector-icons/FontAwesome';
// import AntIcon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// class authStack extends Component {
//   render() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen component={Welcome} name="welcome" />
//       </Stack.Navigator>
//     );
//   }
// }

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Splash}
        name="splash"
        options={{
          header: Header,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        component={HomeScreen}
        name="home"
        options={{
          header: Header,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        component={Search}
        name="search"
        options={{
          header: Header,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        component={ProductDetails}
        name="detail"
        options={{
          header: Header,
          // cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
        }}
      />

      <Stack.Screen
        component={Favorite}
        name="favorite"
        options={{
          header: Header,
          // cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        component={Promo}
        name="promo"
        options={{
          header: Header,
          // cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        component={Coupon}
        name="coupon"
        options={{
          header: Header,
          // cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        component={Delivery}
        name="delivery"
        options={{
          header: Header,
          // cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        component={Payment}
        name="payment"
        options={{
          header: Header,
          // cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        component={History}
        name="history"
        options={{
          header: Header,
          // cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        component={Profile}
        name="profile"
        options={{
          header: Header,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        component={EditProfile}
        name="editProfile"
        options={{
          header: Header,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        component={ChatList}
        name="chatList"
        options={{
          header: Header,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        component={ChatRoom}
        name="chatRoom"
        options={{
          header: Header,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Splash}
        name="splash"
        options={{
          header: Header,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        component={Welcome}
        name="welcome"
        options={{headerShown: false}}
      />

      <Stack.Screen
        component={SignUp}
        name="signUp"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={SignUp2}
        name="signUp2"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Login}
        name="login"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const EditProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={EditProfile}
        name="editProfile"
        options={{
          header: Header,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Cart}
        name="cart"
        options={{
          header: Header,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const PrivacyPolicyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={PrivacyPolicy}
        name="privacyPolicy"
        options={{
          header: Header,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const SecurityStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Security}
        name="security"
        options={{
          header: Header,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

const App = props => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };
  }, []);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <DrawerContent {...props} />}
          drawerStyle={drawerStyles.drawer}>
          {props.auth.token === null ? (
            <Drawer.Screen
              options={{title: 'Welcome, You Must Login '}}
              name="auth"
              component={AuthStack}
              drawerStyle={drawerStyles.welcome}
            />
          ) : (
            <React.Fragment>
              <Drawer.Screen
                options={{title: 'Main'}}
                name="root"
                component={MainStack}
              />
              <Stack.Screen
                component={EditProfileStack}
                name="editProfile"
                options={{
                  title: 'Edit Profile',
                }}
              />
              <Drawer.Screen
                options={{
                  title: 'Order',
                }}
                name="order"
                component={CartStack}
              />
              <Stack.Screen
                component={HomeScreen}
                name="home"
                options={{
                  title: 'All Menu',
                }}
              />
              <Drawer.Screen
                options={{title: 'Privacy Policy'}}
                name="privacyPolicy"
                component={PrivacyPolicyStack}
              />
              <Drawer.Screen
                options={{title: 'Security'}}
                name="security"
                component={SecurityStack}
              />
            </React.Fragment>
          )}
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

const drawerStyles = StyleSheet.create({
  drawer: {
    backgroundColor: 'transparent',
    width: 300,
  },
});

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
