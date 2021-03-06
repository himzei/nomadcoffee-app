import React from "react";
import { View, ActivityIndicator } from "react-native";

export default function ScreenLayout({ loading, children }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loading ? <ActivityIndicator color="black" /> : children}
    </View>
  );
}
