import { gql, useQuery } from "@apollo/client";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { logUserOut } from "../apollo";

const FEED_QUERY = gql`
  query seeCoffeeShops {
    seeCoffeeShops {
      id
      name
      latitude
      longitude
      user {
        username
        avatarURL
      }
      photos {
        id
        url
      }
      categories {
        id
        name
      }
    }
  }
`;

export default function Feed({ navigation }) {
  const { data } = useQuery(FEED_QUERY);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>Home</Text>
      <TouchableOpacity onPress={logUserOut}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
