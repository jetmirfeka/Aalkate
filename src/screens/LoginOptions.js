import React from 'react';
import {View} from 'react-native';
import LoginOption from '../components/organisms/LoginOption';

export default function Login({navigation}){
  return (
    <View>
        <LoginOption navigation={navigation} />
    </View>
  );
};