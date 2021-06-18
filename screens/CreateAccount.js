import React, { useEffect, useRef } from "react";
import { gql, useMutation } from "@apollo/client";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import { TextInput } from "../components/auth/authShared";
import { useForm } from "react-hook-form";

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $name: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      name: $name
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;

export default function CreateAccount({ navigation }) {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const onCompleted = (data) => {
    const {
      createAccount: { ok },
    } = data;
    const { username, password } = getValues();
    if (ok) {
      navigation.navigate("Login", {
        username,
        password,
      });
    }
  };
  const [createAccountMutation, { loading }] = useMutation(
    CREATE_ACCOUNT_MUTATION,
    {
      onCompleted,
    }
  );

  const nameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onValid = (data) => {
    if (!loading) {
      createAccountMutation({
        variables: {
          ...data,
        },
      });
    }
  };

  useEffect(() => {
    register("name");
    register("username", {
      required: true,
    });
    register("email", {
      required: true,
    });
    register("password");
  }, [register]);

  return (
    <AuthLayout>
      <TextInput
        autoFocus
        ref={nameRef}
        placeholder="Name"
        returnKeyType="next"
        placeholderTextColor={"rgb(192, 192, 192)"}
        style={{ width: "100%" }}
        onChangeText={(text) => setValue("name", text)}
      />
      <TextInput
        ref={usernameRef}
        autoCapitalize={"none"}
        placeholder="Username"
        returnKeyType="next"
        placeholderTextColor={"rgb(192, 192, 192)"}
        style={{ width: "100%" }}
        onChangeText={(text) => setValue("username", text)}
      />
      <TextInput
        ref={emailRef}
        placeholder="Email"
        autoCapitalize={"none"}
        placeholderTextColor={"rgb(192, 192, 192)"}
        keyboardType="email-address"
        returnKeyType="next"
        style={{ width: "100%" }}
        onChangeText={(text) => setValue("email", text)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        placeholderTextColor={"rgb(192, 192, 192)"}
        style={{ width: "100%" }}
        lastOne={true}
        onChangeText={(text) => setValue("password", text)}
        onPress={handleSubmit(onValid)}
      />
      <AuthButton
        text="Create Account"
        disabled={false}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
