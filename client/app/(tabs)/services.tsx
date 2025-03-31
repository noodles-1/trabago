import { Image, ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Services() {
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
            <View className="fixed top-0 left-0 right-0 flex flex-row items-center px-4 pt-10 pb-4 border-b-[1px] border-b-gray-200">
                <Text className="text-xl text-primary font-bold"> Services </Text>
            </View>
            <ScrollView className="flex-1">
                <View className="mx-2 mt-4">
                    <Text className="text-lg mx-2"> Home </Text>
                    <View className="flex flex-row flex-wrap">
                        {homeServices.map((service, idx) => (
                            <View key={idx} className="w-[25%] p-2">
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
                                <Text className="text-center mt-1"> {service.name} </Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View className="mx-2 mt-6">
                    <Text className="text-lg mx-2"> Transport </Text>
                    <View className="flex flex-row flex-wrap">
                        {transportServices.map((service, idx) => (
                            <View key={idx} className="w-[25%] p-2">
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
                                <Text className="text-center mt-1"> {service.name} </Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View className="mx-2 mt-6">
                    <Text className="text-lg mx-2"> Health & Wellness </Text>
                    <View className="flex flex-row flex-wrap">
                        {healthServices.map((service, idx) => (
                            <View key={idx} className="w-[25%] p-2">
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
                                <Text className="text-center mt-1"> {service.name} </Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </>
    );
}
