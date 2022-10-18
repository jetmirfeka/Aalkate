import React from "react";
import { ScrollView, KeyboardAvoidingView, View } from "react-native";
import ForgotPasswordFrom from "../components/organisms/ForgotPasswordFrom";

export default function LoginEmail({navigation}) {
  return (
      <KeyboardAvoidingView
        style={{ flex: 1, flexDirection: "column", justifyContent: "center", height:'100%' }}
        behavior="padding"
        enabled
        keyboardVerticalOffset={100}
      >
        <ScrollView
          contentContainerStyle={{
            backgroundColor:'white',
            paddingBottom:70,
            paddingTop:20,
            flex:1
          }}
        >
          <ForgotPasswordFrom navigation ={navigation} />
        </ScrollView>
      </KeyboardAvoidingView>
  );
}
