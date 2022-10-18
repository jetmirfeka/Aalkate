import React from 'react';
import {View, Text, Image} from 'react-native';
import food from '../../../assets/images/food.jpg';
import styles from './styles.js';
import {AntDesign} from '@expo/vector-icons';

export default function index(item) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.img}>
        <Image style={styles.imgg} source={food} />
      </View>
      <View style={styles.wraperText}>
        <View style={styles.nameRating}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <Text style={styles.desc}>{item.description}</Text>
        <View style={styles.raitingIcon}>
          <Text style={styles.price}>{item.price}€</Text>
          <AntDesign name="star" size={20} color="white" />
        </View>
      </View>
    </View>
  );
}
