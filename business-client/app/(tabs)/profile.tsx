import { ScrollView, Text, View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "~/components/ui/accordion";

import Gradient from "~/components/custom/gradient";
import CustomPressable from "~/components/custom/pressable";

export default function Profile() {
    const summaryItems = [
        {
            label: "Income today",
            value: "₱ 2,500.00"
        }, 
        {
            label: "Income this week",
            value: "₱ 6,250.00"
        }, 
        {
            label: "Income this month",
            value: "₱ 18,250.00"
        }, 
        {
            label: "Total income",
            value: "₱ 18,250.00"
        }, 
        {
            label: "Bookings today",
            value: "3"
        }, 
        {
            label: "Bookings this week",
            value: "8"
        }, 
        {
            label: "Bookings this month",
            value: "22"
        }, 
        {
            label: "Total bookings accepted",
            value: "26"
        }, 
        {
            label: "Total bookings cancelled",
            value: "4"
        }, 
        {
            label: "Total bookings completed",
            value: "22"
        }, 
        {
            label: "GO-Cash balance",
            value: "₱ 18,250.00"
        }, 
        {
            label: "Average income per booking",
            value: "₱ 830.00"
        }, 
        {
            label: "Number of services",
            value: "5"
        }, 
        {
            label: "Most in-demand service",
            value: "Design service #1"
        }, 
    ];

    const generalIconsColor = "#777";
    const generalIconsSize = 16;
    const generalItems = [
        {
            text: "Help Center",
            icon: <AntDesign name="questioncircleo" size={generalIconsSize} color={generalIconsColor} />
        },
        {
            text: "Terms & Policies",
            icon: <Ionicons name="document-text-outline" size={generalIconsSize} color={generalIconsColor} />
        },
        {
            text: "Customer Support",
            icon: <AntDesign name="customerservice" size={generalIconsSize} color={generalIconsColor} />
        },
    ];

    return (
        <>
            <ScrollView className="flex-1 flex flex-col">
                <Gradient radius={0}>
                    <View className="h-[30px]" />
                    <View className="flex flex-col items-center justify-center gap-2 h-[220px]">
                        <AntDesign 
                            name="user" 
                            size={34} 
                            color="#4676c0" 
                            className="bg-white flex-shrink p-4 rounded-full"
                        />
                        <View className="flex flex-col items-center gap-1">
                            <Text className="font-bold text-xl text-white">
                                John Doe
                            </Text>
                            <View className="flex flex-row gap-3">
                                <View className="flex flex-row justify-start gap-2">
                                    <Text className="text-white">
                                        Followers
                                    </Text>
                                    <Text className="text-white font-bold">
                                        32
                                    </Text>
                                </View>
                                <Text className="text-white font-light"> | </Text>
                                <View className="flex flex-row justify-start gap-2">
                                    <Text className="text-white">
                                        Following
                                    </Text>
                                    <Text className="text-white font-bold">
                                        7
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="bg-white rounded-t-[3rem] shadow-compact-top z-50 p-8">
                        <Accordion
                            type="multiple"
                            collapsible
                            defaultValue={["item-1"]}
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <Text className="font-bold text-lg">
                                        Business summary
                                    </Text>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <View className="flex flex-col gap-4">
                                        {summaryItems.map((item, i) =>
                                            <View key={i} className="flex flex-row justify-between items-center">
                                                <Text className="text-gray-500">
                                                    {item.label}
                                                </Text>
                                                <Text>
                                                    {item.value}
                                                </Text>
                                            </View>
                                        )}
                                    </View>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    <Text className="font-bold text-lg">
                                        General
                                    </Text>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <View className="flex flex-col">
                                        {generalItems.map((item, i) => 
                                            <View key={i} className="overflow-hidden">
                                                <CustomPressable
                                                    className="flex flex-row justify-between items-center py-5"
                                                    color="rgba(100, 100, 100, 0.4)"
                                                >
                                                    <View className="flex flex-row items-center gap-5">
                                                        {item.icon}
                                                        <Text>
                                                            {item.text}
                                                        </Text>
                                                    </View>
                                                    <AntDesign
                                                        name="right"
                                                        size={16}
                                                        color="#4676c0"
                                                    />
                                                </CustomPressable>
                                            </View>
                                        )}
                                    </View>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <View className="mt-[80px] mx-20 bg-white overflow-hidden rounded-lg border-gray-300 border-[1px]">
                            <CustomPressable
                                className="flex flex-row justify-center items-start py-4"
                                color="rgba(100, 100, 100, 0.2)"
                            >
                                <Text className="text-destructive">
                                    Logout
                                </Text>
                            </CustomPressable>
                        </View>
                        <View className="h-[50px]" />
                    </View>
                </Gradient>
            </ScrollView>
        </>
    );
}