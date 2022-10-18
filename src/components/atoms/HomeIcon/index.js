import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
export default function HomeIcon({ navigation }) {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPressIn={() => {
          navigation.navigate("Home");
        }}
        onPress={() => {}}
      >
      </TouchableOpacity>
    </View>
  );
}
