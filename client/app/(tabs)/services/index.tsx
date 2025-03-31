import { Image, Pressable, ScrollView, Text, View } from "react-native";

import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import Header from "~/components/custom/header";

export default function Services() {
    const router = useRouter();

    const homeServices = [
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
    ];

    const transportServices = [
        {
            name: "Delivery",
            icon: require("~/assets/images/delivery.png")
        },
        {
            name: "Driver",
            icon: require("~/assets/images/car.png")
        },
        {
            name: "Taxi",
            icon: require("~/assets/images/ride-hailing.png")
        },
        {
            name: "Courier",
            icon: require("~/assets/images/courier.png")
        },
    ];

    const healthServices = [
        {
            name: "Massage",
            icon: require("~/assets/images/massage.png")
        }
    ];

    return (
        <>
            <Header title="All services" />
            <ScrollView className="flex-1 px-2">
                <View className="mt-4">
                    <Text className="text-lg mx-2"> Home </Text>
                    <View className="flex flex-row flex-wrap">
                        {homeServices.map((service, idx) => (
                            <View key={idx} className="w-[25%] p-2">
                                <Pressable
                                    onPress={() => router.navigate({
                                        pathname: "/services/[service]",
                                        params: {
                                            service: service.name
                                        }
                                    })}
                                    android_ripple={{
                                        foreground: true,
                                        color: "rgba(255, 255, 255, 0.3)",
                                    }}
                                >
                                    <LinearGradient 
                                        className="bg-primary p-6"
                                        colors={["#214f98", "#6090dc"]}
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 1, y: 0 }}
                                        style={{ borderRadius: 6 }}
                                    >
                                        <Image 
                                            source={service.icon} 
                                            className="h-12 w-12" 
                                        />
                                    </LinearGradient>
                                </Pressable>
                                <Text className="text-center mt-1"> {service.name} </Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View className="mt-6">
                    <Text className="text-lg mx-2"> Transport </Text>
                    <View className="flex flex-row flex-wrap">
                        {transportServices.map((service, idx) => (
                            <View key={idx} className="w-[25%] p-2">
                                <Pressable
                                    onPress={() => router.navigate({
                                        pathname: "/services/[service]",
                                        params: {
                                            service: service.name
                                        }
                                    })}
                                    android_ripple={{
                                        foreground: true,
                                        color: "rgba(255, 255, 255, 0.3)",
                                    }}
                                >
                                    <LinearGradient 
                                        className="bg-primary p-6"
                                        colors={["#214f98", "#6090dc"]}
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 1, y: 0 }}
                                        style={{ borderRadius: 6 }}
                                    >
                                        <Image 
                                            source={service.icon} 
                                            className="h-12 w-12" 
                                        />
                                    </LinearGradient>
                                </Pressable>
                                <Text className="text-center mt-1"> {service.name} </Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View className="mt-6">
                    <Text className="text-lg mx-2"> Health & Wellness </Text>
                    <View className="flex flex-row flex-wrap">
                        {healthServices.map((service, idx) => (
                            <View key={idx} className="w-[25%] p-2">
                                <Pressable
                                    onPress={() => router.navigate({
                                        pathname: "/services/[service]",
                                        params: {
                                            service: service.name
                                        }
                                    })}
                                    android_ripple={{
                                        foreground: true,
                                        color: "rgba(255, 255, 255, 0.3)",
                                    }}
                                >
                                    <LinearGradient 
                                        className="bg-primary p-6"
                                        colors={["#214f98", "#6090dc"]}
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 1, y: 0 }}
                                        style={{ borderRadius: 6 }}
                                    >
                                        <Image 
                                            source={service.icon} 
                                            className="h-12 w-12" 
                                        />
                                    </LinearGradient>
                                </Pressable>
                                <Text className="text-center mt-1"> {service.name} </Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </>
    );
}
