import React from "react";
import { TouchableOpacity } from "react-native";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import styled from "styled-components/native";
import { colors } from "../colors";

export const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
`;

export default function Welcome({ navigation }) {
  const goToCreateAccount = () => navigation.navigate("CreateAccount");
  const goToLogin = () => navigation.navigate("Login");
  return (
    <AuthLayout>
      <AuthButton
        text="Create New Account"
        disabled={false}
        onPress={goToCreateAccount}
      />
      <TouchableOpacity onPress={goToLogin}>
        <LoginLink>Log in</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
}
