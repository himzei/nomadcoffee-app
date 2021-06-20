import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Search({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text style={{ fontSize: 20 }}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}
