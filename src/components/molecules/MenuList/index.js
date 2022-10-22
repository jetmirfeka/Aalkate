import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';
import mainUrl from '../../../config/mainUrl';
import styles from './styles.js';
import MenuItems from '../../atoms/CategoryCard';

export default function MenuList() {
  const [menu, setMenu] = useState();
  const [activeId, setActiveId] = useState(1);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`${mainUrl}/api/getCategory?restaurant_name=Aalkate`)
        .then(res => {
          setMenu(res.data);
          console.log(res);
        })
        .catch(err => console.log(err));
    }
    fetchData();
  }, []);
  let active = menu && menu.findIndex(item => item.id === activeId);
  const menuItem = (title, id) => {
    return (
      <TouchableOpacity
        onPress={() => setActiveId(id)}
        activeOpacity={0.5}
        style={styles.categoryButton}>
        <Text style={[styles.text, id === activeId && {fontWeight: 'bold'}]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          minHeight: 46,
          backgroundColor: 'rgba(217, 217, 217, 0.27);',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <FlatList
          data={menu}
          renderItem={({item}) => menuItem(item.name, item.id)}
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
      <View style={{margin: 25}}>
        <FlatList
          data={menu && menu[active].items}
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
