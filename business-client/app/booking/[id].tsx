import { KeyboardAvoidingView, ScrollView, Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

import { Separator } from "~/components/ui/separator";
import Header from "~/components/custom/header";
import CustomPressable from "~/components/custom/pressable";
import Gradient from "~/components/custom/gradient";

export default function Booking() {
    const { id } = useLocalSearchParams<{ id: string }>();

    return (
        <>
            <Header title="Booking" backButton />
            <ScrollView className="flex-1">
                <View className="m-8 flex flex-col gap-12">
                    <View>
                        <Text className="font-bold">
                            Booking information
                        </Text>
                        <Separator className="my-4" />
                        <View className="flex flex-col gap-4">
                            <View className="flex flex-row justify-between">
                                <Text>
                                    Name
                                </Text>
                                <Text className="font-bold text-primary">
                                    Software service
                                </Text>
                            </View>
                            <View className="flex flex-row justify-between">
                                <Text>
                                    ID
                                </Text>
                                <Text className="font-bold text-primary">
                                    #{id}
                                </Text>
                            </View>
                            <View className="flex flex-row justify-between">
                                <Text>
                                    Date
                                </Text>
                                <Text className="font-bold text-primary">
                                    4/1/2025
                                </Text>
                            </View>
                            <View className="flex flex-row justify-between">
                                <Text>
                                    Time
                                </Text>
                                <Text className="font-bold text-primary">
                                    4:20 PM
                                </Text>
                            </View>
                            <View className="flex flex-row justify-between">
                                <Text>
                                    Status
                                </Text>
                                <Text className="font-bold text-primary">
                                    Accepted
                                </Text>
                            </View>
                            <View className="flex flex-row justify-between">
                                <Text>
                                    To earn
                                </Text>
                                <Text className="font-bold text-primary">
                                    ₱ 550
                                </Text>
                            </View>
                            <View className="flex flex-row justify-between">
                                <Text>
                                    Payment method
                                </Text>
                                <Text className="font-bold text-primary">
                                    GO-Cash
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text className="font-bold">
                            Client notes
                        </Text>
                        <Separator className="my-4" />
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nostrum!
                        </Text>
                    </View>
                    <View>
                        <Text className="font-bold">
                            About client
                        </Text>
                        <Separator className="my-4" />
                        <View className="flex flex-row gap-4">
                            <AntDesign 
                                name="user" 
                                size={34} 
                                color="#4676c0" 
                                className="bg-white flex-shrink self-start p-4 rounded-full border-gray-300 border-[1px]"
                            />
                            <View className="flex flex-col gap-[2px]">
                                <Text className="font-bold">
                                    Juan Dela Cruz
                                </Text>
                                <Text>
                                    juandelacruz@gmail.com
                                </Text>
                                <Text>
                                    España Blvd, Sampaloc, Manila
                                </Text>
                            </View>
                        </View>
                        <View className="mt-4 flex flex-row gap-2">
                            <View className="border-gray-300 border-[1px] rounded-lg flex-1 overflow-hidden">
                                <CustomPressable
                                    className="py-2 flex flex-row items-center justify-center"
                                    color="rgba(100, 100, 100, 0.4)"
                                >
                                    <View className="flex flex-row gap-2 items-center">
                                        <Feather name="mail" size={16} color="#4676c0" />
                                        <Text>
                                            Message
                                        </Text>
                                    </View>
                                </CustomPressable>
                            </View>
                            <View className="border-gray-300 border-[1px] rounded-lg flex-1 overflow-hidden">
                                <CustomPressable
                                    className="py-2 flex flex-row items-center justify-center"
                                    color="rgba(100, 100, 100, 0.4)"
                                >
                                    <View className="flex flex-row gap-2 items-center">
                                        <Feather name="phone-call" size={14} color="#4676c0" />
                                        <Text>
                                            Call
                                        </Text>
                                    </View>
                                </CustomPressable>
                            </View>
                        </View>
                    </View>
                </View>
                <View className="h-[100px]" />
            </ScrollView>
            <KeyboardAvoidingView className="absolute bottom-0 left-0 right-0">
                <View className="m-4 p-4 rounded-lg bg-white shadow-compact shadow-black flex flex-row gap-2">
                    <View 
                        className="bg-white rounded-lg border-gray-300 border-[1px] flex-1 overflow-hidden"
                    >
                        <CustomPressable
                            className="flex flex-row justify-center items-center h-full"
                            color="rgba(100, 100, 100, 0.4)"
                        >
                            <Text className="text-lg text-center font-bold text-destructive"> Cancel </Text>
                        </CustomPressable>
                    </View>
                    <CustomPressable
                        className="flex-1"
                        color="rgba(255, 255, 255, 0.3)"
                    >
                        <Gradient 
                            className="py-4"
                        >
                            <Text className="text-lg text-white text-center font-bold"> Start </Text>
                        </Gradient>
                    </CustomPressable>
                </View>
            </KeyboardAvoidingView>
        </>
    );
}