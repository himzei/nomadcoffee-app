import React from "react";
import { View, Text } from "react-native";

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center'",
        height: 100,
      }}
    >
      <Text style={{ fontSize: 20 }}>Profile</Text>
    </View>
  );
}
