import React, {useState, useContext, useEffect} from 'react';
import {View, Image, Text, But} from 'react-native';
import styles from './styles.js';

import img from '../../../assets/images/second-splash.jpg';
import logo from '../../../assets/images/logo.png';
import Button from '../../atoms/Buttons/LoginOption';

import authContext from '../../../context/index.js';
import {getInfoFromToken, loginWithGoogle} from '../../../helpers/login';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

import SplashScreen from 'react-native-splash-screen';

export default function LoginOption({navigation}) {
  const {setAuthenticated} = useContext(authContext);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const handleLogin = () => {};

  const facebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString();
            getInfoFromToken(accessToken);
            setAuthenticated(true);
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
        setAuthenticated(false);
      },
    );
  };

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.img} />
      <View style={styles.wrapper}>
        <Image style={styles.logo} source={logo} />
        <View style={{width: '100%'}}>
          <Button
            text="Sign in with Google"
            onPress={() => {
              loginWithGoogle() && setAuthenticated(true);
            }}
          />

          <Button
            logo="facebook"
            text="Login with Facebook"
            key="gmail"
            onPress={facebookLogin}
          />

          <Button
            key="CreateAccount"
            onPress={() => navigation.navigate('CreateAccount')}
          />
          <Button
            border={false}
            text="LOGIN"
            key="login"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </View>
  );
}
