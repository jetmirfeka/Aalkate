import React from "react";
import { ScrollView, KeyboardAvoidingView, View } from "react-native";
import CreateAccount from "../components/organisms/CreateAccount";

export default function LoginEmail({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
        behavior="padding"
        enabled
        keyboardVerticalOffset={100}
      >
        <ScrollView
          contentContainerStyle={{
            backgroundColor:'white',
            paddingBottom:70,
            paddingTop:20
          }}
        >
          <CreateAccount navigation ={navigation} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
