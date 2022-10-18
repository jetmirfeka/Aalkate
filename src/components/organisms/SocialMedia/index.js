import React from "react";
import { View, ScrollView } from "react-native";
import socialMedia from "../../../constants/socialMedia";
import Card from "../../atoms/CategoryCard";


export default function SocialMedia({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        marginTop: 20,
      }}
    >
      <ScrollView>
        {socialMedia.map((res) => {
          return( <Card
            styleName="hotels"
            image={true}
            name={res.name}
            detailsHeight={150}
            width={80}
          />);
        })}
      </ScrollView>
    </View>
  );
}
