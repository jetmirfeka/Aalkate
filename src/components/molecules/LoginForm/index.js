import React, { useState, useContext } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import Button from "../../atoms/Buttons/LoginOption";
import styles from "./styles.js";
import authContext from "../../../context";

export default function LoginWithEmail({navigation}) {
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);

  const { setAuthenticated } = useContext(authContext);

  const handleLogin = () => setAuthenticated(true);

  return (
    <View style={styles.container}>
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
        placeholder={"password"}
        secureTextEntry={true}
      />
      <Button onPress={handleLogin} text="Sing in" background="#EBEBEB" borderColor='#000' textColor={true}/>
      <Button background="#D4D4D4" borderColor="#000" textColor={true} onPress={() => navigation.navigate("CreateAccount")} />
    </View>
  );
}
