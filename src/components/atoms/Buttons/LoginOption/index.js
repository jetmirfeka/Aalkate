import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles.js';
export default function LoginOption({
  text = 'Create an account',
  onPress,
  border = true,
  background = 'transparent',
  borderColor = '#fff',
  textColor = false,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.loginOption,
        border && {
          borderWidth: 2,
          borderColor: borderColor,
          backgroundColor: background,
        },
      ]}>
      <Text style={[styles.text, textColor && {color: '#000'}]}>{text}</Text>
    </TouchableOpacity>
  );
}
