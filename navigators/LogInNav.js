import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useReactiveVar } from "@apollo/client";
import { isLoggedInVar } from "../apollo";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import Feed from "../screens/Feed";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";

const Stack = createStackNavigator();

export default function LoginNav({ screenName }) {
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  return (
    <Stack.Navigator headerMode="screen">
      {screenName === "Feed" ? (
        <Stack.Screen name="Feed" component={Feed} />
      ) : null}
      {screenName === "Search" ? (
        <Stack.Screen name="Search" component={Search} />
      ) : null}
      {screenName === "Notifications" ? (
        <Stack.Screen name="Notifications" component={Notifications} />
      ) : null}
      {screenName === "Me" ? <Stack.Screen name="Me" component={Me} /> : null}
      <Stack.Screen name="Profile" component={isLoggedIn ? Profile : Login} />
    </Stack.Navigator>
  );
}
