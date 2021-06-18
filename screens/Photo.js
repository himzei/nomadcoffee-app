import React from "react";
import { View, Text } from "react-native";

export default function Photo() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center'",
        height: 100,
      }}
    >
      <Text style={{ color: "white", fontSize: 20 }}>Photo</Text>
    </View>
  );
}
