import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";

import Header from "~/components/custom/header";

export default function ServicesList() {
    const { service } = useLocalSearchParams();

    return (
        <>
            <Header title={`${service} services`} backButton />
            <ScrollView className="flex-1 px-2">
                <View className="mx-2 my-4 flex flex-row gap-2">
                    <Pill text="Sort" />
                    <Pill 
                        text="Ratings" 
                        icon={() => <AntDesign name="staro" size={16} color="#444" />}
                    />
                    <Pill 
                        text="Filter" 
                        icon={() => <AntDesign name="filter" size={16} color="#444" />}
                    />
                </View>
                <View className="mt-6">
                    
                </View>
            </ScrollView>
        </>
    );
}

function Pill({
    text,
    icon,
}: {
    text: string,
    icon?: () => React.ReactNode
}) {
    return (
        <View className="rounded-full overflow-hidden flex-shrink self-start">
            <Pressable
                className="flex-shrink self-start"
                android_ripple={{
                    color: "rgba(100, 100, 100, 0.2)",
                    borderless: true
                }}
            >
                <View className="px-4 py-2 rounded-full flex-shrink self-start border-gray-500 border-[1px] flex flex-row items-center gap-2">
                    {icon?.()}
                    <Text className="inline">
                        {text}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}