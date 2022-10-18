import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import Button from "../../atoms/Buttons/LoginOption";
import styles from "./styles.js";

export default function CreateForm({ navigation }) {
  const [email, onChangeEmail] = useState(null);
  const [name, onChangeName] = useState(null);
  const [password, onChangePassword] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.fullname}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            placeholder={"name"}
            value={name}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            placeholder={"surname"}
            value={name}
          />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder={"username / email"}
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder={"password "}
          secureTextEntry={true}
        />
      </View>

      <Button text="Create new account" background="#D4D4D4" borderColor='#000' textColor />
    </View>
  );
}
