import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { useRouter } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";
import { BanknoteIcon } from "lucide-react-native";

import { Skeleton } from "~/components/ui/skeleton";
import CustomPressable from "~/components/custom/pressable";
import Gradient from "~/components/custom/gradient";

export default function Home() {
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 0);
    }, []);

    return (
        <>
            <View className="absolute top-0 left-0 right-0 z-10 bg-white h-8" />
            <ScrollView className="flex-1">
                <View className="flex flex-row items-center px-2 pt-10 pb-2">
                    <Image
                        source={require("~/assets/images/trabago-logo.png")}
                        className="h-12 w-12"
                    />
                    <Text className="text-2xl text-primary font-bold">
                        Home
                    </Text>
                </View>
                <Gradient
                    className="px-6 py-4 bg-primary mx-4 my-1 flex flex-col gap-3"
                >
                    <Text className="text-white font-bold tracking-[3px] text-[10px] opacity-90">
                        TODAY'S EARNINGS
                    </Text>
                    <View className="flex flex-row justify-between items-center">
                        {loading ? (
                            <Skeleton className="h-[30px] w-[150px] bg-gray-300" />
                        ) : (
                            <Text className="text-white font-bold tracking-[2px] text-4xl">
                                ₱ 2,500.00
                            </Text>
                        )}
                        <View className="bg-white shadow-compact rounded-full items-center overflow-hidden">
                            <CustomPressable
                                className="py-3 px-4 flex flex-row gap-2"
                                color="rgba(100, 100, 100, 0.4)"
                            >
                                <BanknoteIcon size={18} color="#4676c0" />
                                <Text className="font-black text-primary text-sm tracking-wider">
                                    Cash Out
                                </Text>
                            </CustomPressable>
                        </View>
                    </View>
                </Gradient>
                <View className="flex flex-row gap-2 mt-2 mx-4 h-[100px]">
                    <View className="h-full border-gray-300 rounded-lg border-[1px] overflow-hidden flex-1">
                        <CustomPressable
                            className="p-6 flex flex-col gap-3"
                            color="rgba(100, 100, 100, 0.4)"
                        >
                            <Text className="tracking-[3px] font-bold text-[10px]">
                                TODAY'S BOOKINGS
                            </Text>
                            {loading ? (
                                <Skeleton className="h-[30px] w-[30px] bg-gray-300" />
                            ) : (
                                <Text className="font-bold tracking-[2px] text-2xl">
                                    3
                                </Text>
                            )}
                        </CustomPressable>
                    </View>
                    <View className="h-full border-gray-300 rounded-lg border-[1px] overflow-hidden flex-1">
                        <CustomPressable
                            className="p-6 flex flex-col gap-3"
                            color="rgba(100, 100, 100, 0.4)"
                        >
                            <Text className="tracking-[3px] font-bold text-[10px]">
                                GO-CASH BALANCE
                            </Text>
                            {loading ? (
                                <Skeleton className="h-[30px] w-[120px] bg-gray-300" />
                            ) : (
                                <Text className="font-bold tracking-wider text-2xl">
                                    ₱ 18,250.00
                                </Text>
                            )}
                        </CustomPressable>
                    </View>
                </View>
                <View className="m-4">
                    {loading ? (
                        <>
                            <Skeleton className="w-[50%] h-5 rounded-full bg-gray-300" />
                            <Skeleton className="w-full h-[100px] rounded-lg bg-gray-300 mt-4" />
                        </>
                    ) : (
                        <>
                            <View className="flex flex-row items-center justify-between gap-4">
                                <Text className="text-lg font-bold">
                                    Ongoing bookings
                                </Text>
                                <CustomPressable
                                    className="rounded-full p-2"
                                    onPress={() => router.navigate("/bookings")}
                                    color="#bbb"
                                >
                                    <AntDesign
                                        name="right"
                                        size={16}
                                        color="#4676c0"
                                    />
                                </CustomPressable>
                            </View>
                            <ScrollView horizontal>
                                <View className="flex flex-row gap-2">
                                    {Array.from({ length: 1 }).map((_, i) => (
                                        <View key={i} className="rounded-lg border-[1px] border-gray-300 my-2 w-[250px] overflow-hidden">
                                            <CustomPressable
                                                className="flex flex-row"
                                                color="rgba(100, 100, 100, 0.4)"
                                                onPress={() => router.navigate({
                                                    pathname: "/booking/[id]",
                                                    params: { id: `${i + 1}` }
                                                })}
                                            >
                                                <View className="w-[80px] bg-gray-300 rounded-tl-lg rounded-bl-lg" />
                                                <View className="p-3 flex-1">
                                                    <Text className="font-bold">
                                                        Software service
                                                    </Text>
                                                    <View className="flex flex-row gap-1">
                                                        <Text className="text-gray-500">
                                                            Client:
                                                        </Text>
                                                        <Text>
                                                            Juan Dela Cruz
                                                        </Text>
                                                    </View>
                                                    <View className="flex flex-row gap-1 mt-3">
                                                        <Text className="text-gray-500">
                                                            To earn:
                                                        </Text>
                                                        <Text className="font-bold">
                                                            ₱ 440
                                                        </Text>
                                                    </View>
                                                </View>
                                            </CustomPressable>
                                        </View>
                                    ))}
                                </View>
                            </ScrollView>
                        </>
                    )}
                </View>
                <View className="m-4">
                    {loading ? (
                        <>
                            <Skeleton className="w-[50%] h-5 rounded-full bg-gray-300" />
                            <Skeleton className="w-full h-[100px] rounded-lg bg-gray-300 mt-4" />
                        </>
                    ) : (
                        <>
                            <View className="flex flex-row items-center justify-between gap-4">
                                <Text className="text-lg font-bold">
                                    Accepted bookings
                                </Text>
                                <CustomPressable
                                    className="rounded-full p-2"
                                    onPress={() => router.navigate("/bookings")}
                                    color="#bbb"
                                >
                                    <AntDesign
                                        name="right"
                                        size={16}
                                        color="#4676c0"
                                    />
                                </CustomPressable>
                            </View>
                            <ScrollView horizontal>
                                <View className="flex flex-row gap-2">
                                    {Array.from({ length: 2 }).map((_, i) => (
                                        <View key={i} className="rounded-lg border-[1px] border-gray-300 my-2 w-[250px] overflow-hidden">
                                            <CustomPressable
                                                className="flex flex-row"
                                                color="rgba(100, 100, 100, 0.4)"
                                                onPress={() => router.navigate({
                                                    pathname: "/booking/[id]",
                                                    params: { id: `${i + 2}` }
                                                })}
                                            >
                                                <View className="w-[80px] bg-gray-300 rounded-tl-lg rounded-bl-lg" />
                                                <View className="p-3 flex-1">
                                                    <Text className="font-bold">
                                                        Design service
                                                    </Text>
                                                    <View className="flex flex-row gap-1">
                                                        <Text className="text-gray-500">
                                                            Client:
                                                        </Text>
                                                        <Text>
                                                            Juan Dela Cruz
                                                        </Text>
                                                    </View>
                                                    <View className="flex flex-row gap-1 mt-3">
                                                        <Text className="text-gray-500">
                                                            To earn:
                                                        </Text>
                                                        <Text className="font-bold">
                                                            ₱ 720
                                                        </Text>
                                                    </View>
                                                </View>
                                            </CustomPressable>
                                        </View>
                                    ))}
                                </View>
                            </ScrollView>
                        </>
                    )}
                </View>
            </ScrollView>
        </>
    );
}
