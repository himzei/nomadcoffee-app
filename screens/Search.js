import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Search({ navigation }) {
  return (
    <View
      style={{
        flex: 1,

        alignItems: "center",
        justifyContent: "center'",
        height: 100,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text style={{ fontSize: 20 }}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}
