import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles.js";
import Title from "../../atoms/BigTitle";
import Form from "../../molecules/ForgotForm";

export default function ForgotPassword({ navigation }) {
  return (
    <View style={styles.container}>
      <Title title="Forgot your account Password?" />
      <Text style={styles.infoText}>
        Enter your email address and we will send you a reset instructions.
      </Text>
      <Form navigation={navigation} />
    </View>
  );
}
