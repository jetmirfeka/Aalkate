import React from "react";
import {
  View,
  ScrollView
} from "react-native";
import hotels from "../../../constants/hotels";
import Card from "../../atoms/CategoryCard";

export default function Hotels({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        marginTop:20
      }}
    >
      <ScrollView>
        {hotels.map(res => <Card styleName='hotels' image={true} name={res.name} detailsHeight={150} width={80} />)}
      </ScrollView>
    </View>
  );
}
