import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";

import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

import { Skeleton } from "~/components/ui/skeleton";
import Gradient from "~/components/custom/gradient";
import CustomPressable from "~/components/custom/pressable";

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
            name: "Design",
            icon: require("~/assets/images/design.png")
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
                <View className="flex flex-row items-center px-2 pt-10 pb-2">
                    <Image source={require("~/assets/images/trabago-logo.png")} className="h-12 w-12" />
                    <Text className="text-2xl text-primary font-bold"> Home </Text>
                </View>
                <Gradient 
                    className="p-6 bg-primary mx-4 my-1 flex flex-col gap-3"
                >
                    <Text className="text-white"> España Blvd, Sampaloc, Manila </Text>
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
                </Gradient>
                <View className="m-4">
                    {loading ?
                        <>
                            <Skeleton className="w-[50%] h-5 rounded-full bg-gray-300" />
                            <Skeleton className="w-full h-[100px] rounded-lg bg-gray-300 mt-4" />
                        </> 
                    :
                        <>
                            <View className="flex flex-row items-center justify-between gap-4">
                                <Text className="text-lg font-bold"> Ongoing bookings </Text>
                                <CustomPressable 
                                    className="rounded-full p-2" 
                                    onPress={() => router.navigate("/bookings")}
                                    color="#bbb"
                                >
                                    <AntDesign name="right" size={16} color="#4676c0" />
                                </CustomPressable>
                            </View>
                            <View className="rounded-lg border-[1px] border-gray-300 flex flex-row h-[80px] my-2 w-[80%]">
                                <View className="h-full w-[80px] bg-gray-300 rounded-tl-lg rounded-bl-lg" />
                                <View className="p-2 flex-1">
                                    <Text className="font-bold"> Cleaning service </Text>
                                    <Text> Worker is on the way... </Text>
                                    <Text className="text-right font-bold"> ₱440 </Text>
                                </View>
                            </View>
                        </>
                    }
                </View>
                <View className="m-4">
                    <View className="flex flex-row items-center justify-between gap-4">
                        <Text className="text-lg font-bold"> Popular services </Text>
                        <CustomPressable 
                            className="rounded-full p-2" 
                            onPress={() => router.navigate("/services")}
                            color="#bbb"
                        >
                            <AntDesign name="right" size={16} color="#4676c0" />
                        </CustomPressable>
                    </View>
                    <View className="flex flex-row justify-between mt-2">
                        {services.map((service, idx) => (
                            <View key={idx}>
                                <CustomPressable
                                    onPress={() => router.navigate({
                                        pathname: "/services/[service]",
                                        params: {
                                            service: service.name
                                        }
                                    })}
                                    color="rgba(255, 255, 255, 0.3)"
                                >
                                    <Gradient 
                                        className="bg-primary p-6 flex flex-row justify-center items-center"
                                    >
                                        <Image 
                                            source={service.icon} 
                                            className="h-10 w-10" 
                                        />
                                    </Gradient>
                                </CustomPressable>
                                <Text className="text-center mt-1"> {service.name} </Text>
                            </View>
                        ))}
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
                                <Text className="text-lg font-bold"> Featured </Text>
                                <CustomPressable 
                                    className="rounded-full p-2" 
                                    onPress={() => router.navigate("/services")}
                                    color="#bbb"
                                >
                                    <AntDesign name="right" size={16} color="#4676c0" />
                                </CustomPressable>
                            </View>
                            <View className="mt-2 mb-10">
                                <View className="rounded-lg w-[280px] h-[180px] bg-gray-300" />
                                <Text className="mt-1 font-bold"> Promote your service/business here </Text>
                            </View>
                        </>
                    }
                </View>
            </ScrollView>
        </>
    );
}
