import React, {useState} from 'react';
import {View, TextInput, ActivityIndicator, Dimensions} from 'react-native';
import {createUser} from '../../../helpers/login';
import Button from '../../atoms/Buttons/LoginOption';
import styles from './styles.js';

export default function CreateForm({navigation}) {
  const [email, onChangeEmail] = useState(null);
  const [name, onChangeName] = useState(null);
  const [surname, onChangeSurName] = useState(null);
  const [password, onChangePassword] = useState(null);
  const windowHeight = Dimensions.get('window').height;
  const [loading, setLoading] = useState(false);

  const clearState = () => {
    onChangeEmail(null);
    onChangeName(null);
    onChangeSurName(null);
    onChangePassword(null);
  };
  const addUser = async () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) !== true) {
      alert('Email is not valid');
      return;
    }

    if (email && name && surname && password) {
      setLoading(true);
      createUser(name, email, password) && clearState();
      setLoading(false);
    } else {
      alert('Please enter your data');
    }
  };

  return (
    <View style={[styles.container, {minHeight: windowHeight}]}>
      <View style={styles.form}>
        <View style={styles.fullname}>
          <TextInput
            style={[styles.input, {width: '48%'}]}
            onChangeText={onChangeName}
            placeholder={'name'}
            value={name}
          />
          <TextInput
            style={[styles.input, {width: '48%'}]}
            onChangeText={onChangeSurName}
            placeholder={'surname'}
            value={surname}
          />
        </View>
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
          placeholder={'password '}
          secureTextEntry={true}
        />
      </View>

      {!loading ? (
        <Button
          text="Create new account"
          background="#D4D4D4"
          borderColor="#000"
          textColor
          onPress={() => addUser()}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}
