import { Image, ScrollView, Text, View } from "react-native";

import { useRouter } from "expo-router";

import Header from "~/components/custom/header";
import CustomPressable from "~/components/custom/pressable";
import Gradient from "~/components/custom/gradient";

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
            {
                name: "Plumbing",
                icon: require("~/assets/images/plumbing.png")
            },
            {
                name: "Electrical",
                icon: require("~/assets/images/electrical.png")
            },
            {
                name: "Pest control",
                icon: require("~/assets/images/pest-control.png")
            },
            {
                name: "Relocation",
                icon: require("~/assets/images/relocation.png")
            },
        ],
        [
            {
                name: "Delivery",
                icon: require("~/assets/images/delivery.png")
            },
            {
                name: "Driver",
                icon: require("~/assets/images/car.png")
            },
            {
                name: "Courier",
                icon: require("~/assets/images/courier.png")
            },
        ],
        [
            {
                name: "Accounting",
                icon: require("~/assets/images/accounting.png"),
            },
            {
                name: "Catering",
                icon: require("~/assets/images/catering.png"),
            },
            {
                name: "Legal",
                icon: require("~/assets/images/legal.png"),
            },
            {
                name: "Marketing",
                icon: require("~/assets/images/marketing.png"),
            },
        ],
        [
            {
                name: "Massage",
                icon: require("~/assets/images/massage.png")
            },
            {
                name: "Fitness",
                icon: require("~/assets/images/fitness.png")
            },
            {
                name: "Makeup",
                icon: require("~/assets/images/makeup.png")
            },
        ],
        [
            {
                name: "Design",
                icon: require("~/assets/images/design.png")
            },
            {
                name: "Editing",
                icon: require("~/assets/images/editing.png")
            },
            {
                name: "Software",
                icon: require("~/assets/images/software.png")
            },
            {
                name: "Hardware",
                icon: require("~/assets/images/pc.png")
            },
            {
                name: "Support",
                icon: require("~/assets/images/tech-support.png")
            },
        ],
        [
            {
                name: "Grooming",
                icon: require("~/assets/images/grooming.png")
            },
            {
                name: "Training",
                icon: require("~/assets/images/pet-training.png")
            },
            {
                name: "Veterinary",
                icon: require("~/assets/images/veterinary.png")
            },
        ]
    ];

    const categoryNames = ["Home", "Transport", "Business", "Health & Wellness", "Digital", "Pet Care"];

    return (
        <>
            <Header title="All services" />
            <ScrollView className="flex-1 px-2">
                {categories.map((category, i) => 
                    <View key={i} className="mt-4">
                        <Text className="text-lg mx-2 font-bold">
                            {categoryNames[i]}
                        </Text>
                        <View className="flex flex-row flex-wrap">
                            {category.map((service, j) => (
                                <View key={j} className="w-[25%] p-2 flex flex-col items-center justify-center">
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
                                            className="flex flex-row items-center justify-center"
                                        >
                                            <Image 
                                                source={service.icon} 
                                                className="h-10 w-10 m-7" 
                                            />
                                        </Gradient>
                                    </CustomPressable>
                                    <Text className="text-center mt-1 text-sm">
                                        {service.name}
                                    </Text>
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
