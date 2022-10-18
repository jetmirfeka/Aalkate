import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import Button from "../../atoms/Buttons/LoginOption";
import styles from "./styles.js";

export default function ForgotPasswordFrom({navigation}) {
  const [email, onChangeEmail] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        placeholder={"Email Address"}
        value={email}
      />
      <Button text="Sing in" background="#33346D" />
      <View style={styles.creatAcc}>
        <Text style={styles.dontAcc}>Haven’t received? </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('CreateAccount')}>
          <Text style={styles.createAccText}>Resend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
