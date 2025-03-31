import { Pressable, ScrollView, Text, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

import Header from "~/components/custom/header";

export default function Profile() {
    const items = [
        {
            name: "GO-Cash",
            description: "Bal: ₱1,000",
            icon: <Ionicons 
                name="wallet-outline" 
                size={30} 
                color="#4676c0"
                className="flex-shrink self-start p-3"
            />
        },
        {
            name: "Payment",
            description: "GCash",
            icon: <AntDesign 
                name="creditcard" 
                size={30} 
                color="#4676c0"
                className="flex-shrink self-start p-3"
            />
        },
        {
            name: "Saved",
            icon: <AntDesign 
                name="save" 
                size={30} 
                color="#4676c0"
                className="flex-shrink self-start p-3"
            />
        },
        {
            name: "Reviews",
            icon: <AntDesign 
                name="staro" 
                size={30} 
                color="#4676c0" 
                className="flex-shrink self-start p-3"
            />
        },
    ];

    const aboutItems = ["Traba-GO for Partners", "Terms & Conditions", "Privacy Policy", "Refund Policy", "Customer Support", "FAQs"];

    return (
        <>
            <Header title="My profile" />
            <ScrollView className="flex-1 bg-gray-100">
                <LinearGradient 
                    className="bg-primary px-4 pt-8 pb-4 h-[150px] w-full flex flex-col justify-end"
                    colors={["#214f98", "#6090dc"]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                >
                    <View className="flex flex-row gap-4">
                        <AntDesign 
                            name="user" 
                            size={34} 
                            color="#4676c0" 
                            className="bg-white flex-shrink self-start p-4 rounded-full"
                        />
                        <View className="flex flex-col gap-1">
                            <Text className="font-semibold text-xl text-white">
                                Juan Dela Cruz
                            </Text>
                            <View className="flex flex-row gap-3">
                                <View className="flex flex-row justify-start gap-2">
                                    <Text className="text-white">
                                        Followers
                                    </Text>
                                    <Text className="text-white font-bold">
                                        14
                                    </Text>
                                </View>
                                <Text className="text-white font-light"> | </Text>
                                <View className="flex flex-row justify-start gap-2">
                                    <Text className="text-white">
                                        Following
                                    </Text>
                                    <Text className="text-white font-bold">
                                        21
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
                <View className="p-4 bg-white">
                    <View className="flex flex-row flex-wrap">
                        {items.map((item, i) => 
                            <View key={i} className="w-[25%]">
                                <Pressable
                                    className="flex flex-row justify-center items-start overflow-hidden"
                                    android_ripple={{
                                        foreground: true,
                                        color: "rgba(100, 100, 100, 0.2)",
                                    }}
                                >
                                    <View className="flex flex-col items-center">
                                        <View className="flex flex-row items-center">
                                            {item.icon}
                                        </View>
                                        <Text className="text-sm">
                                            {item.name}
                                        </Text>
                                        <Text className="text-sm text-primary">
                                            {item?.description}
                                        </Text>
                                    </View>
                                </Pressable>
                            </View>
                        )}
                    </View>
                </View>
                <View className="p-4 bg-white mt-4">
                    <Text className="text-xl"> 
                        General
                    </Text>
                    {aboutItems.map((item, i) =>
                        <Text key={i} className="mt-4 text-blue-500 underline">
                            {item}
                        </Text>
                    )}
                </View>
                <View className="mt-8 mx-20 bg-white">
                    <Pressable
                        className="flex flex-row justify-center items-start overflow-hidden py-4"
                        android_ripple={{
                            foreground: true,
                            color: "rgba(100, 100, 100, 0.2)",
                        }}
                    >
                        <Text className="text-destructive"> Logout </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </>
    );
}