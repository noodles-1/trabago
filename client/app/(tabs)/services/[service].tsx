import React, { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

import { useLocalSearchParams, useRouter } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";
import Octicon from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";

import { Skeleton } from "~/components/ui/skeleton";
import Header from "~/components/custom/header";
import Pill from "~/components/custom/pill";
import CustomPressable from "~/components/custom/pressable";

export default function ServicesList() {
    const router = useRouter();
    const { service } = useLocalSearchParams<{ service: string }>();

    const [value, setValue] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    const onChangeText = (text: string) => {
        setValue(text);
    };

    return (
        <>
            <Header title={`${service} services`} backButton />
            <ScrollView className="flex-1 px-2">
                <View className="flex flex-row items-center bg-white px-4 py-2 gap-4 rounded-xl border-[1px] border-gray-500 mx-2 mt-4">
                    <Feather name="search" size={20} color="#666" />
                    <TextInput 
                        placeholder={`Search for ${service.toLowerCase()} services`}
                        value={value}
                        onChangeText={onChangeText}
                        className="p-0"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View className="mx-2 my-4 flex flex-row gap-2">
                    <Pill 
                        text="Sort" 
                        icon={<Octicon name="sort-asc" size={16} color="#444" />}
                    />
                    <Pill 
                        text="Ratings" 
                        icon={<AntDesign name="staro" size={16} color="#444" />}
                    />
                    <Pill 
                        text="Filter" 
                        icon={<AntDesign name="filter" size={16} color="#444" />}
                    />
                </View>
                <View className="my-4">
                    <View className="flex flex-row flex-wrap">
                        {loading ?
                            <>
                                {Array.from({ length: 4 }).map((_, idx) =>
                                    <View key={idx} className="w-[50%] p-2 overflow-hidden rounded-lg flex flex-col gap-2">
                                        <Skeleton className="h-[150px] w-full bg-gray-300" />
                                        <Skeleton className="h-4 w-[80%] bg-gray-300" />
                                        <Skeleton className="h-4 w-[40%] bg-gray-300" />
                                    </View>
                                )}
                            </>
                        :
                            <>
                                {Array.from({ length: 8 }).map((_, idx) => 
                                    <View key={idx} className="w-[50%] p-2 overflow-hidden rounded-lg">
                                        <CustomPressable
                                            onPress={() => router.navigate({
                                                pathname: "/service/[id]",
                                                params: {
                                                    id: `Service #${idx + 1}`
                                                }
                                            })}
                                            color="rgba(255, 255, 255, 0.4)"
                                        >
                                            <View className="flex flex-col rounded-lg border-gray-400 border-[1px] bg-white">
                                                <View className="bg-gray-300 h-[150px] rounded-t-lg w-full" />
                                                <View className="p-3 flex flex-col gap-2">
                                                    <View>
                                                        <Text>
                                                            Service #{idx + 1}
                                                        </Text>
                                                        <View className="flex flex-row items-center gap-2">  
                                                            <Text className="font-bold">
                                                                ₱
                                                            </Text>
                                                            <Text className="text-xl font-bold left-[-7px]">
                                                                {" "}550
                                                            </Text>
                                                        </View>
                                                    </View>
                                                    <View className="flex flex-row items-center justify-start gap-1">  
                                                        <AntDesign name="star" size={12} color="#f4c948" />
                                                        <Text className="text-sm text-gray-500"> 4.8 </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </CustomPressable>
                                    </View>
                                )}
                            </>
                        }
                    </View>
                </View>
            </ScrollView>
        </>
    );
}