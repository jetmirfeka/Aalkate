import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView} from 'react-native';
import menus from '../../../constants/menu';
import CategoryCard from '../../atoms/CategoryCard';
import styles from './styles.js';

export default function LoginOption({navigation}) {
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@logged', 'logged');
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    storeData();
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {menus.map(res => (
        <CategoryCard navigation={navigation} name={res.name} image={res.img} />
      ))}
    </ScrollView>
  );
}
