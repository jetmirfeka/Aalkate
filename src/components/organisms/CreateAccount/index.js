import React from 'react';
import {View, Text} from 'react-native';
import Title from "../../atoms/BigTitle";
import Form from "../../molecules/CreateForm";
import styles from './styles.js'

export default function index({navigation}) {
  return (
    <View  style={styles.container}>
        <Form navigation={navigation} />
    </View>
  )
}
