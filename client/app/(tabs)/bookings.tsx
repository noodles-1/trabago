import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import { Skeleton } from "~/components/ui/skeleton";
import Header from "~/components/custom/header";

export default function Bookings() {
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
                    {loading ? 
                        <>
                            <Skeleton className="w-[30%] h-5 rounded-full bg-gray-300" />
                            <Skeleton className="w-full h-[80px] rounded-lg bg-gray-300 mt-4" />
                        </>
                    :
                        <>
                            <Text className="text-lg font-bold"> Current bookings </Text>
                            <View className="mt-2 flex flex-col gap-5 bg-white">
                                <View className="rounded-lg border-[1px] border-gray-300 flex flex-row h-[80px]">
                                    <View className="h-full w-[80px] bg-gray-300 rounded-tl-lg rounded-bl-lg" />
                                    <View className="p-2 flex-1">
                                        <Text className="font-bold"> Cleaning service </Text>
                                        <Text> Worker is on the way... </Text>
                                        <Text className="text-right font-bold"> ₱ 440 </Text>
                                    </View>
                                </View>
                            </View>
                        </>
                    }
                </View>
                <View className="m-4">
                    {loading ?
                        <>
                            <Skeleton className="w-[30%] h-5 rounded-full bg-gray-300" />
                            {Array.from({ length: 3 }).map((_, idx) => (
                                <Skeleton key={idx} className="w-full h-[80px] rounded-lg bg-gray-300 mt-4" />
                            ))}
                        </>
                    :
                        <>
                            <Text className="text-lg font-bold"> Bookings this month </Text>
                            <View className="mt-2 flex flex-col gap-5">
                                {bookings.map((booking, idx) => (
                                    <View key={idx} className="rounded-lg border-[1px] bg-white border-gray-300 flex flex-row h-[80px]">
                                        <View className="h-full w-[80px] bg-gray-300 rounded-tl-lg rounded-bl-lg" />
                                        <View className="p-2 flex-1">
                                            <Text className="font-bold"> {booking.service} </Text>
                                            <Text className="text-gray-500"> {booking.date} </Text>
                                            <View className="flex flex-row justify-between">
                                                <Text className="text-gray-500"> {booking.time} </Text>
                                                <Text className="font-bold"> ₱ {booking.price} </Text>
                                            </View>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </>
                    }
                </View>
            </ScrollView>
        </>
    );
}
