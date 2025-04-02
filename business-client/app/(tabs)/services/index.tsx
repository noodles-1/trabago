import { Image, ScrollView, Text, View } from "react-native";

import { useRouter } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";

import Header from "~/components/custom/header";
import CustomPressable from "~/components/custom/pressable";
import Gradient from "~/components/custom/gradient";
import Pill from "~/components/custom/pill";

export default function Services() {
    const router = useRouter();

    const categories = [
        [
            {
                name: "Repair",
                icon: require("~/assets/images/repair.png")
            },
            {
                name: "Cleaning",
                icon: require("~/assets/images/cleaning.png")
            },
        ],
        [
            {
                name: "Design",
                icon: require("~/assets/images/design.png")
            },
            {
                name: "Software",
                icon: require("~/assets/images/software.png")
            },
        ],
    ];

    const categoryNames = ["Home", "Digital"];

    return (
        <>
            <Header 
                title="My services"
                pill={
                    <Pill
                        text="Add service"
                        icon={
                            <AntDesign name="plus" size={14} color="#4676c0" />
                        }
                    />
                }
            />
            <ScrollView className="flex-1 px-2">
                {categories.map((category, i) => 
                    <View key={i} className="mt-4">
                        <Text className="text-lg mx-2 font-bold"> {categoryNames[i]} </Text>
                        <View className="flex flex-row flex-wrap">
                            {category.map((service, j) => (
                                <View key={j} className="w-[25%] p-2">
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
                                            className="bg-primary p-6 flex flex-row items-center justify-center"
                                        >
                                            <Image 
                                                source={service.icon} 
                                                className="h-10 w-10" 
                                            />
                                        </Gradient>
                                    </CustomPressable>
                                    <Text className="text-center mt-1 text-sm"> {service.name} </Text>
                                </View>
                            ))}
                        </View>
                    </View>
                )}
                <View className="h-[50px]" />
            </ScrollView>
        </>
    );
}
