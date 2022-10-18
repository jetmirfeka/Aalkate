import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles.js';
import MenuItems from '../../atoms/CategoryCard';

const DATA = [
  {
    id: '1',
    title: 'Fur den kleinen hunger/vorspeisen',
  },
  {
    id: '2',
    title: 'Salste',
  },
  {
    id: '3',
    title: 'Dit un Dat',
  },
  {
    id: '4',
    title: 'Fur den kleinen hunger/vorspeisen',
  },
  {
    id: '5',
    title: 'Salste',
  },
  {
    id: '6',
    title: 'Dit un Dat',
  },
];

const menu = [
  {
    name: 'Fisch-Curry',
    price: 17.9,
  },
  {
    name: 'Fisch-Curry',
    price: 17.9,
  },
  {
    name: 'Fisch-Curry',
    price: 17.9,
  },
  {
    name: 'Fisch-Curry',
    price: 17.9,
  },
  {
    name: 'Fisch-Curry',
    price: 17.9,
  },
  {
    name: 'Fisch-Curry',
    price: 17.9,
  },
  {
    name: 'Fisch-Curry',
    price: 17.9,
  },
  {
    name: 'Fisch-Curry',
    price: 17.9,
  },
];
export default function MenuList() {
  const menuItem = title => {
    return (
      <TouchableOpacity activeOpacity={0.5} style={styles.categoryButton}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View
        style={{
          minHeight: 46,
          backgroundColor: 'rgba(217, 217, 217, 0.27);',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          data={DATA}
          renderItem={({item}) => menuItem(item.title)}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 1,
            shadowRadius: 16.0,

            elevation: 24,
          }}
        />
      </View>
      <View style={{margin: 15}}>
        <FlatList
          data={menu}
          numColumns={1}
          renderItem={({item, index}) => (
            <MenuItems
              name={item.name}
              key={index}
              price={item.price}
              image={true}
              styleName="menu"
              detailsHeight={120}
              width={80}
            />
          )}
          contentContainerStyle={{paddingBottom: 150}}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
