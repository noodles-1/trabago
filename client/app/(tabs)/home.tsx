import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";

import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

import { Skeleton } from "~/components/ui/skeleton";

export default function Home() {
    const router = useRouter();

    const [value, setValue] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);

    const onChangeText = (text: string) => {
        setValue(text);
    };

    const services = [
        {
            name: "Delivery",
            icon: require("~/assets/images/delivery.png")
        },
        {
            name: "Cleaning",
            icon: require("~/assets/images/cleaning.png")
        },
        {
            name: "Taxi",
            icon: require("~/assets/images/ride-hailing.png")
        },
        {
            name: "Repair",
            icon: require("~/assets/images/repair.png")
        }
    ];

    return (
        <>
            <View className="absolute top-0 left-0 right-0 z-10 bg-white h-8" />
            <ScrollView className="flex-1">
                <View className="flex flex-row items-center px-4 pt-8 pb-2">
                    <Image source={require("~/assets/images/trabago-logo.png")} className="h-12 w-12" />
                    <Text className="text-2xl text-primary font-bold"> Home </Text>
                </View>
                <LinearGradient 
                    className="p-6 bg-primary mx-6 my-1 flex flex-col gap-3"
                    colors={["#214f98", "#6090dc"]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 6 }}
                >
                    <Text className="text-white font-semibold"> España Blvd, Sampaloc, Manila </Text>
                    <View className="flex flex-row items-center bg-white px-4 py-2 gap-4 rounded-xl">
                        <Feather name="search" size={20} color="#666" />
                        <TextInput 
                            placeholder="Search for services near you"
                            value={value}
                            onChangeText={onChangeText}
                            className="p-0"
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </LinearGradient>
                <View className="m-6">
                    {loading ?
                        <>
                            <Skeleton className="w-[50%] h-5 rounded-full bg-gray-300" />
                            <Skeleton className="w-full h-[100px] rounded-lg bg-gray-300 mt-4" />
                        </> 
                    :
                        <>
                            <View className="flex flex-row items-center justify-between gap-4">
                                <Text className="text-lg font-semibold"> Ongoing bookings </Text>
                                <Pressable 
                                    className="rounded-full p-2" 
                                    onPress={() => router.navigate("/bookings")}
                                    android_ripple={{
                                        foreground: true,
                                        color: "#bbb",
                                        borderless: true
                                    }}
                                >
                                    <AntDesign name="right" size={16} color="#4676c0" />
                                </Pressable>
                            </View>
                            <View className="rounded-lg border-[1px] border-gray-300 flex flex-row h-[80px] my-2 w-[80%]">
                                <View className="h-full w-[80px] bg-gray-300 rounded-tl-lg rounded-bl-lg" />
                                <View className="p-2 flex-1">
                                    <Text className="font-semibold"> Cleaning service </Text>
                                    <Text> Worker is on the way... </Text>
                                    <Text className="text-right font-semibold"> ₱440 </Text>
                                </View>
                            </View>
                        </>
                    }
                </View>
                <View className="m-6">
                    <View className="flex flex-row items-center justify-between gap-4">
                        <Text className="text-lg font-semibold"> Popular services </Text>
                        <Pressable 
                            className="rounded-full p-2" 
                            onPress={() => router.navigate("/services")}
                            android_ripple={{
                                foreground: true,
                                color: "#bbb",
                                borderless: true
                            }}
                        >
                            <AntDesign name="right" size={16} color="#4676c0" />
                        </Pressable>
                    </View>
                    <View className="flex flex-row justify-between mt-2">
                        {services.map((service, idx) => (
                            <View key={idx}>
                                <Pressable
                                    onPress={() => router.navigate({
                                        pathname: "/services/[service]",
                                        params: {
                                            service: service.name
                                        }
                                    })}
                                    android_ripple={{
                                        foreground: true,
                                        color: "rgba(255, 255, 255, 0.3)",
                                    }}
                                >
                                    <LinearGradient 
                                        className="bg-primary p-6"
                                        colors={["#214f98", "#6090dc"]}
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 1, y: 0 }}
                                        style={{ borderRadius: 6 }}
                                    >
                                        <Image 
                                            source={service.icon} 
                                            className="h-12 w-12" 
                                        />
                                    </LinearGradient>
                                </Pressable>
                                <Text className="text-center mt-1"> {service.name} </Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View className="m-6">
                    {loading ?
                        <>
                            <Skeleton className="w-[20%] h-5 rounded-full bg-gray-300" />
                            <Skeleton className="w-full h-[150px] rounded-lg bg-gray-300 mt-4" />
                        </> 
                    :
                        <>
                            <View className="flex flex-row items-center justify-between gap-4">
                                <Text className="text-lg font-semibold"> Featured </Text>
                                <Pressable 
                                    className="rounded-full p-2" 
                                    onPress={() => router.navigate("/services")}
                                    android_ripple={{
                                        foreground: true,
                                        color: "#bbb",
                                        borderless: true
                                    }}
                                >
                                    <AntDesign name="right" size={16} color="#4676c0" />
                                </Pressable>
                            </View>
                            <View className="mt-2 mb-10">
                                <View className="rounded-lg w-[280px] h-[180px] bg-gray-300" />
                                <Text className="mt-1 font-semibold"> Promote your service/business here </Text>
                            </View>
                        </>
                    }
                </View>
            </ScrollView>
        </>
    );
}
