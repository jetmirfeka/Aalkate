import React from 'react';
import {View, Image} from 'react-native';
import Menu from '../components/organisms/Menu';

export default function MenuScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Menu navigation={navigation} />
    </View>
  );
}
