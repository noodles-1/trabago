import {  withLayoutContext } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { Colors } from "~/constants/Colors";
import { useColorScheme } from "~/hooks/useColorScheme";

import {
    MaterialTopTabNavigationEventMap,
    MaterialTopTabNavigationOptions,
    createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";

import {
    type ParamListBase,
    type TabNavigationState
} from "@react-navigation/native";

const { Navigator } = createMaterialTopTabNavigator();

const MaterialTopTabs = withLayoutContext<
    MaterialTopTabNavigationOptions,
    typeof Navigator,
    TabNavigationState<ParamListBase>,
    MaterialTopTabNavigationEventMap
>(Navigator);

import Feather from "@expo/vector-icons/Feather";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <MaterialTopTabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                tabBarInactiveTintColor: 'grey',
                tabBarLabelStyle: {
                    fontSize: 12,
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                },
                tabBarIndicatorStyle: {
                    backgroundColor: "transparent",
                },
                tabBarScrollEnabled: false,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: "absolute",
                    },
                    default: {},
                }),
            }}
            tabBarPosition="bottom"
        >
            <MaterialTopTabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" size={24} color={color} />
                    ),
                }}
            />
        </MaterialTopTabs>
    );
}
