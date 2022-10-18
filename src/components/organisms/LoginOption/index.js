import React, {useState, useContext, useEffect} from 'react';
import {View, Image, Text, But} from 'react-native';
import styles from './styles.js';

import img from '../../../assets/images/second-splash.jpg';
import logo from '../../../assets/images/logo.png';
import Button from '../../atoms/Buttons/LoginOption';

import authContext from '../../../context/index.js';
import {getInfoFromToken} from '../../../helpers/login';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import SplashScreen from 'react-native-splash-screen';

export default function LoginOption({navigation}) {
  const {setAuthenticated} = useContext(authContext);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const handleLogin = () => {};
  const facebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
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
              GoogleSignin.configure({
                androidClientId:
                  '965191305920-fijnn21379t7g3jietsfpul13of914bp.apps.googleusercontent.com',
                iosClientId: 'ADD_YOUR_iOS_CLIENT_ID_HERE',
              });
              GoogleSignin.hasPlayServices()
                .then(hasPlayService => {
                  if (hasPlayService) {
                    GoogleSignin.signIn()
                      .then(userInfo => {
                        console.log(JSON.stringify(userInfo));
                        setAuthenticated(true);
                      })
                      .catch(e => {
                        console.log('ERROR IS: ' + JSON.stringify(e));
                        setAuthenticated(false);
                      });
                  }
                })
                .catch(e => {
                  console.log('ERROR IS: ' + JSON.stringify(e));
                });
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
