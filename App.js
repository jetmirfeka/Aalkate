import React, {useEffect, useState} from 'react';
import {StatusBar, View} from 'react-native';
import Context from './src/context';
import {Screens, loginScreens} from './src/navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  const [authenticated, setAuthenticated] = useState(null);

  const getData = async () => {
    await AsyncStorage.getAllKeys().then(console.log);
    try {
      const value = await AsyncStorage.getItem('@logged').then(e => {
        console.log(e);
        e === 'logged' ? setAuthenticated(true) : setAuthenticated(false);
      });
      if (value !== null) {
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };
  getData();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Context.Provider value={{authenticated, setAuthenticated}}>
      <StatusBar animated={true} backgroundColor="#000" />
      {authenticated === null ? (
        <View></View>
      ) : authenticated === false ? (
        loginScreens()
      ) : (
        Screens()
      )}
    </Context.Provider>
  );
}
