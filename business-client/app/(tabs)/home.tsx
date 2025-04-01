import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";

import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BanknoteIcon } from "lucide-react-native";

import { Skeleton } from "~/components/ui/skeleton";

export default function Home() {
    const router = useRouter();

    const [value, setValue] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1);
    }, []);

    const onChangeText = (text: string) => {
        setValue(text);
    };

    return (
        <>
            <View className="absolute top-0 left-0 right-0 z-10 bg-white h-8" />
            <ScrollView className="flex-1">
                <View className="flex flex-row items-center px-2 pt-8 pb-2">
                    <Image source={require("~/assets/images/trabago-logo.png")} className="h-12 w-12" />
                    <Text className="text-2xl text-primary font-bold"> Home </Text>
                </View>
                <LinearGradient 
                    className="px-6 py-4 bg-primary mx-4 my-1 flex flex-col gap-3"
                    colors={["#214f98", "#6090dc"]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 6 }}
                >
                    <Text className="text-white font-semibold tracking-[3px] text-[10px] opacity-90"> 
                        TODAY'S EARNINGS 
                    </Text>
                    <View className="flex flex-row justify-between items-center">
                        <Text className="text-white font-bold tracking-[2px] text-4xl">
                            ₱ 2,500.00
                        </Text>
                        <View className="bg-white shadow-compact rounded-full items-center overflow-hidden">
                            <Pressable
                                className="py-3 px-4 flex flex-row gap-2"
                                android_ripple={{
                                    foreground: true,
                                    color: "rgba(100, 100, 100, 0.4)",
                                    borderless: true,
                                }}
                            >
                                <BanknoteIcon size={18} color="#4676c0" />
                                <Text className="font-black text-primary text-sm tracking-wider">
                                    Cash Out
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </LinearGradient>
                <View className="flex flex-row gap-2 mt-2 mx-4 h-[100px]">
                    <View className="h-full border-gray-300 rounded-lg border-[1px] overflow-hidden flex-1">
                        <Pressable
                            className="p-6 flex flex-col gap-3"
                            android_ripple={{
                                foreground: true,
                                color: "rgba(100, 100, 100, 0.4)",
                                borderless: true
                            }}
                        >
                            <Text className="tracking-[3px] font-semibold text-[10px]">
                                TODAY'S BOOKINGS
                            </Text>
                            <Text className="font-bold tracking-[2px] text-2xl">
                                4
                            </Text>
                        </Pressable>
                    </View>
                    <View className="h-full border-gray-300 rounded-lg border-[1px] overflow-hidden flex-1">
                        <Pressable
                            className="p-6 flex flex-col gap-3"
                            android_ripple={{
                                foreground: true,
                                color: "rgba(100, 100, 100, 0.4)",
                                borderless: true
                            }}
                        >
                            <Text className="tracking-[3px] font-semibold text-[10px]">
                                GO-CASH BALANCE
                            </Text>
                            <Text className="font-bold tracking-wider text-2xl">
                                ₱ 18,250.00
                            </Text>
                        </Pressable>
                    </View>
                </View>
                <View className="m-4">
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
                                    onPress={() => {}}
                                    android_ripple={{
                                        foreground: true,
                                        color: "#bbb",
                                        borderless: true
                                    }}
                                >
                                    <AntDesign name="right" size={16} color="#4676c0" />
                                </Pressable>
                            </View>
                            <ScrollView horizontal>
                                <View className="flex flex-row gap-2">
                                    {Array.from({ length: 3 }).map((_, i) => 
                                        <View key={i} className="rounded-lg border-[1px] border-gray-300 flex flex-row my-2 w-[250px]">
                                            <View className="h-full w-[80px] bg-gray-300 rounded-tl-lg rounded-bl-lg" />
                                            <View className="p-3 flex-1">
                                                <Text className="font-semibold"> 
                                                    Cleaning service 
                                                </Text>
                                                <View className="flex flex-row gap-1">
                                                    <Text>
                                                        Client: 
                                                    </Text>
                                                    <Text className="font-semibold">
                                                        Juan Dela Cruz
                                                    </Text>
                                                </View>
                                                <Text className="text-right font-semibold mt-2"> 
                                                    ₱440 
                                                </Text>
                                            </View>
                                        </View>
                                    )}
                                </View>
                            </ScrollView>
                        </>
                    }
                </View>
                <View className="m-4">
                    <View className="flex flex-row items-center justify-between gap-4">
                        <Text className="text-lg font-semibold"> Popular services </Text>
                        <Pressable 
                            className="rounded-full p-2" 
                            onPress={() => {}}
                            android_ripple={{
                                foreground: true,
                                color: "#bbb",
                                borderless: true
                            }}
                        >
                            <AntDesign name="right" size={16} color="#4676c0" />
                        </Pressable>
                    </View>
                </View>
                <View className="m-4">
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
                                    onPress={() => {}}
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
