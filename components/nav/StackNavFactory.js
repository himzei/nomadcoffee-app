import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../../screens/Profile";
import Photo from "../../screens/Photo";
import Search from "../../screens/Search";
import Notifications from "../../screens/Notifications";
import Me from "../../screens/Me";
import Feed from "../../screens/Feed";
import { Image } from "react-native";
import { isLoggedInVar } from "../../apollo";
import { useReactiveVar } from "@apollo/client";
import Login from "../../screens/Login";
import Comments from "../../screens/Comments";

const Stack = createStackNavigator();

export default function StackNavFactory({ screenName }) {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTintColor: "black",
        headerStyle: {
          backgroundColor: "white",
        },
      }}
    >
      {screenName === "Feed" ? (
        <Stack.Screen
          name={"Feed"}
          component={Feed}
          options={{
            headerTitle: () => (
              <Image
                resizeMode="contain"
                style={{ maxHeight: 40 }}
                source={require("../../assets/logo.png")}
              />
            ),
          }}
        />
      ) : null}
      {screenName === "Search" ? (
        <Stack.Screen name={"Search"} component={Search} />
      ) : null}

      {screenName === "Notifications" ? (
        <Stack.Screen name={"Notifications"} component={Notifications} />
      ) : null}

      {screenName === "Me" ? (
        <Stack.Screen name={"Me"} component={isLoggedIn ? Me : Login} />
      ) : null}

      <Stack.Screen name="Profile" component={isLoggedIn ? Profile : Login} />
      <Stack.Screen name="Photo" component={Photo} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
}
