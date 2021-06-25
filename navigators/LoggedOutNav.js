import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabIcon from "../components/nav/TabIcon";
import StackNavFactory from "../components/nav/StackNavFactory";
import { Image } from "react-native";
import useMe from "../hooks/useMe";

const Tabs = createBottomTabNavigator();

export default function LoggedOutNav() {
  const { data } = useMe();

  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        style: {
          backgroundColor: "white",
          borderTopColor: "red",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"home"} color={color} focused={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName="Feed" />}
      </Tabs.Screen>

      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"search"} color={color} focused={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName="Search" />}
      </Tabs.Screen>

      <Tabs.Screen
        name="not"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={"heart"} color={color} focused={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName="Notifications" />}
      </Tabs.Screen>

      <Tabs.Screen
        name="Me"
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            data?.me?.avatarURL ? (
              <Image
                source={{ uri: data.me.avatarURL }}
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 13,
                  ...(focused && { borderColor: "tomato", borderWidth: 1 }),
                }}
              />
            ) : (
              <TabIcon iconName={"person"} color={color} focused={focused} />
            ),
        }}
      >
        {() => <StackNavFactory screenName="Me" />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
