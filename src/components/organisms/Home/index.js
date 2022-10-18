import React from 'react';
import {ScrollView} from 'react-native';
import menus from '../../../constants/menu';
import CategoryCard from '../../atoms/CategoryCard';
import styles from './styles.js';

export default function LoginOption({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {menus.map(res => (
        <CategoryCard navigation={navigation} name={res.name} image={res.img} />
      ))}
    </ScrollView>
  );
}
