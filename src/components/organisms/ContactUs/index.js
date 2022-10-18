/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles.js';

export default function ContactUs({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
      }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingTop: 30,
          }}>
          <View style={styles.itmes}>
            <Image
              style={styles.img}
              source={require('../../../assets/images/location.png')}
            />
            <Text style={styles.text}>
              Konigstrasse 20-22,23769 {'\n'}Fehmarn Germany
            </Text>
          </View>
          <View style={styles.itmes}>
            <Image
              style={styles.img}
              source={require('../../../assets/images/clock.png')}
            />
            <Text style={styles.text}>
              NOW Open- Opens 10AM Thu {'\n'}
              <Text style={{color: '#737373', fontSize: 14}}>
                Show Opening Hours
              </Text>
            </Text>
          </View>
          <View style={styles.itmes}>
            <Image
              style={styles.img}
              source={require('../../../assets/images/phone.png')}
            />
            <Text style={styles.text}>1800-420-8400</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
