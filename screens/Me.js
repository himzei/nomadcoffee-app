import React from "react";
import { useReactiveVar, gql, useQuery } from "@apollo/client";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { isLoggedInVar, tokenVar } from "../apollo";
import LogInNav from "../navigators/LogInNav";
import { useParams } from "react-router-dom";

const SEE_PROFILE_QUERY = gql`
  query seeProfile($username: String!) {
    seeProfile(username: $username) {
      username
      email
      name
      location
      avatarURL
      githubUsername
      isMe
    }
  }
`;

const LogInForm = styled.View`
  width: 100%;
  height: 100%;
`;

export default function Me({ route }) {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  console.log(route);

  // const { data } = useQuery(SEE_PROFILE_QUERY, {
  //   variables: {
  //     username,
  //   },
  // });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoggedIn ? (
        <Text>hello</Text>
      ) : (
        <LogInForm>
          <LogInNav />
        </LogInForm>
      )}
      <Text style={{ fontSize: 20 }}>Me</Text>
    </View>
  );
}
