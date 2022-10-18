import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {getSourceImage} from '../../../helpers/getImage';
import styles from './style.js';
// import Ionicons from '@expo/vector-icons/Ionicons';

export default function CategoryCard({
  name,
  image,
  price,
  navigation,
  styleName,
  detailsHeight,
  width,
}) {
  const handelClick = name => {
    switch (name) {
      case 'speisekarte Menu':
        navigation.navigate('Menu');
        break;
      case 'offnungszeiten':
      case 'BERUHRUNG':
        navigation.navigate('ContactUs');
        break;
      case 'HOTELS':
        navigation.navigate('Hotels');
        break;
      case 'SOCIAL MEDIA':
        navigation.navigate('SocialMedia');
        break;
      case 'Bestellen':
        navigation.navigate('Bestellen');
        break;
      case 'SHOP':
        navigation.navigate('Shop');
        break;
      default:
        break;
    }
  };

  const icon = name => {
    switch (name) {
      // case 'Facebook':
      //   return (
      //     <Ionicons
      //       style={styles.icon}
      //       name="logo-facebook"
      //       size={50}
      //       color="#383838"
      //     />
      //   );
      // case 'Instagram':
      //   return (
      //     <Ionicons
      //       style={styles.icon}
      //       name="logo-instagram"
      //       size={50}
      //       color="#383838"
      //     />
      //   );
      default:
        return null;
    }
  };
  return (
    <TouchableOpacity
      onPress={() => handelClick(name)}
      activeOpacity={0.9}
      style={[styles.conatiner, styles[styleName]]}
      key={name}>
      {image && (
        <Image
          resizeMode="cover"
          style={styles.image}
          source={getSourceImage(name)}
        />
      )}
      {icon(name)}
      <View style={styles.overlay} />
      <View
        style={[
          styles.details,
          detailsHeight && {height: detailsHeight, width: `${width}%`},
        ]}>
        <Text style={styles.name}>{name}</Text>
        {price && <Text style={styles.price}>{price} €</Text>}
        <View style={styles.left} />
        <View style={styles.right} />
      </View>
    </TouchableOpacity>
  );
}
