import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Image, View} from 'react-native';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import ContactUs from '../screens/ContactUs';
import LoginOptions from '../screens/LoginOptions';
import LoginWithEmail from '../screens/LoginWithEmail';
import ForgotPassword from '../screens/ForgotPassword';
import CreateAccount from '../screens/CreateAccount';
import Hotels from '../components/organisms/Hotels';
import SocialMedia from '../components/organisms/SocialMedia';
import Bestellen from '../components/organisms/Bestellen';
import Shop from '../components/organisms/Shop';
import authContext from '../context/index';

const RootStack = createNativeStackNavigator();

const header = {
  headerBackTitle: ' ',
  headerTitleAlign: 'center',
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: '#010101',
  },
  headerTintColor: '#fff',
  cardStyle: {backgroundColor: '#fff'},
  headerTitle: (
    props, // App Logo
  ) => (
    <View style={{}}>
      <Image
        style={{
          width:180,
          height: 40,
          resizeMode:'contain'
        }}
        source={require('../assets/images/logo.png')}
        resizeMode="contain"
      />
    </View>
  ),
};

export function Screens() {
  const {setAuthenticated} = useContext(authContext);
  console.log(setAuthenticated);
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          options={{
            ...header,
          }}
          name="Home"
          component={Home}
        />
        <RootStack.Screen options={{...header}} name="Menu" component={Menu} />
        <RootStack.Screen
          options={{...header}}
          name="ContactUs"
          component={ContactUs}
        />
        <RootStack.Screen
          options={{...header}}
          name="Hotels"
          component={Hotels}
        />
        <RootStack.Screen
          options={{...header}}
          name="SocialMedia"
          component={SocialMedia}
        />
        <RootStack.Screen options={{...header}} name="Shop" component={Shop} />
        <RootStack.Screen
          options={{...header}}
          name="Bestellen"
          component={Bestellen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export function loginScreens() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="LoginOptions">
        <RootStack.Screen
          options={{headerShown: false}}
          name="LoginOptions"
          component={LoginOptions}
        />
        <RootStack.Screen
          options={{...header}}
          name="Login"
          component={LoginWithEmail}
        />
        <RootStack.Screen
          options={{...header}}
          name="ForgotPassword"
          component={ForgotPassword}
        />
        <RootStack.Screen
          options={{...header}}
          name="CreateAccount"
          component={CreateAccount}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
