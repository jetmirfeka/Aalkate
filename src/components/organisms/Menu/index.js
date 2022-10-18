import React from 'react';
import {View, Text, Image} from 'react-native';
import MenuList from '../../molecules/MenuList';
import styles from './styles.js';

export default function Menu({navigation}) {
  return (
    <View style={styles.menuContainer}>
      <MenuList />
    </View>
  );
}
