import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles.js";
import Form from "../../molecules/LoginForm";

export default function LoginWithEmail({navigation}) {
 
  return (
    <View style={styles.container}>
      <Form navigation={navigation}/>
    </View>
  );
}
