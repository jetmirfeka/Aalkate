import React, {useState, useContext} from 'react';
import {View, TextInput, Text, ActivityIndicator} from 'react-native';
import Button from '../../atoms/Buttons/LoginOption';
import styles from './styles.js';
import axios from 'axios';
import url from '../../../config/mainUrl';
import authContext from '../../../context';

export default function LoginWithEmail({navigation}) {
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);

  const {setAuthenticated} = useContext(authContext);

  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) !== true) {
      alert('Email is not valid');
      return;
    }

    if (email && password) {
      setLoading(true);
      await axios
        .post(`${url}/api/login`, {
          email: email,
          password: password
        })
        .then(res => {
          console.log(res);
          onChangeEmail(null);
          onChangePassword(null);
          setAuthenticated(true);
        })
        .catch(err => {
          console.log(err);
          alert('Somthing went wrong.');
        });
      setLoading(false);
    } else {
      alert('Please enter your data');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        placeholder={'email'}
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder={'password'}
        secureTextEntry={true}
      />
      {!loading ? (
        <Button
          onPress={handleLogin}
          text="Sing in"
          background="#EBEBEB"
          borderColor="#000"
          textColor={true}
        />
      ) : (
        <View style={{height: 48, margin: 10}}>
          <ActivityIndicator />
        </View>
      )}

      <Button
        background="#D4D4D4"
        borderColor="#000"
        textColor={true}
        onPress={() => navigation.navigate('CreateAccount')}
      />
    </View>
  );
}
