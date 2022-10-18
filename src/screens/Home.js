import React from 'react';
import {View, Image} from 'react-native';
import Home from '../components/organisms/Home/index';

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Home navigation={navigation} />
    </View>
  );
}
