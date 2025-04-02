import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { Skeleton } from "~/components/ui/skeleton";
import Header from "~/components/custom/header";
import CustomPressable from "~/components/custom/pressable";
import { useRouter } from "expo-router";

export default function Bookings() {
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);

    const bookings = [
        {
            service: "Cleaning service",
            time: "10:42 AM",
            date: "3/30/2025",
            price: 550,
        },
        {
            service: "Repair service",
            time: "2:10 PM",
            date: "3/28/2025",
            price: 820,
        },
        {
            service: "Cleaning service",
            time: "11:35 AM",
            date: "3/21/2025",
            price: 470,
        },
    ];

    return (
        <>
            <Header title="My bookings" />
            <ScrollView className="flex-1">
                <View className="m-4">
                    {loading ? (
                        <>
                            <Skeleton className="w-[30%] h-5 rounded-full bg-gray-300" />
                            <Skeleton className="w-full h-[80px] rounded-lg bg-gray-300 mt-4" />
                        </>
                    ) : (
                        <>
                            <Text className="text-lg font-bold"> 
                                Current bookings 
                            </Text>
                            <View className="mt-2 flex flex-col gap-5 bg-white rounded-lg border-[1px] border-gray-300 overflow-hidden">
                                <CustomPressable
                                    className="flex flex-row"
                                    color="rgba(100, 100, 100, 0.4)"
                                    onPress={() => router.navigate({
                                        pathname: "/booking/[id]",
                                        params: { id: "1" }
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
                        </>
                    )}
                </View>
                <View className="m-4">
                    {loading ? (
                        <>
                            <Skeleton className="w-[30%] h-5 rounded-full bg-gray-300" />
                            <Skeleton className="w-full h-[80px] rounded-lg bg-gray-300 mt-4" />
                        </>
                    ) : (
                        <>
                            <Text className="text-lg font-bold"> 
                                Accepted bookings 
                            </Text>
                            <View className="mt-2 flex flex-col gap-5 bg-white">
                                {Array.from({ length: 2 }).map((_, i) => (
                                    <View
                                        key={i}
                                        className="rounded-lg border-[1px] border-gray-300 overflow-hidden"
                                    >
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
                        </>
                    )}
                </View>
                <View className="m-4">
                    {loading ? (
                        <>
                            <Skeleton className="w-[30%] h-5 rounded-full bg-gray-300" />
                            {Array.from({ length: 3 }).map((_, idx) => (
                                <Skeleton
                                    key={idx}
                                    className="w-full h-[80px] rounded-lg bg-gray-300 mt-4"
                                />
                            ))}
                        </>
                    ) : (
                        <>
                            <Text className="text-lg font-bold">
                                Completed bookings
                            </Text>
                            <View className="mt-2 flex flex-col gap-5">
                                {bookings.map((booking, i) => (
                                    <View
                                        key={i}
                                        className="rounded-lg border-[1px] bg-white border-gray-300 overflow-hidden"
                                    >
                                        <CustomPressable
                                            className="flex flex-row"
                                            color="rgba(100, 100, 100, 0.4)"
                                            onPress={() => router.navigate({
                                                pathname: "/booking/[id]",
                                                params: { id: `${i + 4}` }
                                            })}
                                        >
                                            <View className="w-[80px] bg-gray-300 rounded-tl-lg rounded-bl-lg" />
                                            <View className="p-3 flex-1">
                                                <Text className="font-bold">
                                                    {booking.service}
                                                </Text>
                                                <View className="flex flex-row gap-1">
                                                    <Text className="text-gray-500">
                                                        Client:
                                                    </Text>
                                                    <Text>
                                                        Juan Dela Cruz
                                                    </Text>
                                                </View>
                                                <Text className="text-gray-500">
                                                    {booking.date} - {booking.time}
                                                </Text>
                                                <View className="flex flex-row gap-1 mt-3">
                                                    <Text className="text-gray-500">
                                                        Earned:
                                                    </Text>
                                                    <Text className="font-bold">
                                                        ₱ {booking.price}
                                                    </Text>
                                                </View>
                                            </View>
                                        </CustomPressable>
                                    </View>
                                ))}
                            </View>
                        </>
                    )}
                </View>
            </ScrollView>
        </>
    );
}
