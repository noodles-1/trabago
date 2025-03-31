import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { useLocalSearchParams, useRouter } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";
import Octicon from "@expo/vector-icons/Octicons";

import { Skeleton } from "~/components/ui/skeleton";
import Header from "~/components/custom/header";
import Pill from "~/components/custom/pill";

export default function ServicesList() {
    const router = useRouter();
    const { service } = useLocalSearchParams();

    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return (
        <>
            <Header title={`${service} services`} backButton />
            <ScrollView className="flex-1 px-2">
                <View className="mx-2 my-4 flex flex-row gap-2">
                    <Pill 
                        text="Sort" 
                        icon={() => <Octicon name="sort-asc" size={16} color="#444" />}
                    />
                    <Pill 
                        text="Ratings" 
                        icon={() => <AntDesign name="staro" size={16} color="#444" />}
                    />
                    <Pill 
                        text="Filter" 
                        icon={() => <AntDesign name="filter" size={16} color="#444" />}
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
                                        <Pressable
                                            onPress={() => router.navigate({
                                                pathname: "/service/[id]",
                                                params: {
                                                    id: `Service #${idx + 1}`
                                                }
                                            })}
                                            android_ripple={{
                                                foreground: true,
                                                color: "rgba(255, 255, 255, 0.4)",
                                                borderless: true
                                            }}
                                        >
                                            <View className="flex flex-col rounded-lg border-gray-400 border-[1px]">
                                                <View className="bg-gray-300 h-[150px] w-full" />
                                                <View className="p-2">
                                                    <Text> Service #{idx + 1} </Text>
                                                    <View className="mt-1 flex flex-row items-center justify-start">  
                                                        <Text className="font-bold text-primary"> ₱ </Text>
                                                        <Text className="text-lg font-bold text-primary left-[-7px]"> 550 </Text>
                                                    </View>
                                                    <View className="mt-1 flex flex-row items-center justify-start">  
                                                        <AntDesign name="star" size={14} color="#f4c948" />
                                                        <Text className="text-sm"> 4.8 </Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </Pressable>
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