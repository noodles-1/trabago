import { KeyboardAvoidingView, Pressable, ScrollView, Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import AntDesign from "@expo/vector-icons/AntDesign";

import BackButton from "~/components/custom/back-button";
import Pill from "~/components/custom/pill";

export default function Service() {
    const { id } = useLocalSearchParams();

    return (
        <>  
            <BackButton />
            <ScrollView className="flex-1">
                <View className="bg-gray-300 h-[350px] w-full" />
                <View className="px-4">
                    <Text className="mt-4 font-semibold text-2xl"> 
                        {id} 
                    </Text>
                    <Text className="mt-2 font-bold tracking-wider text-3xl text-primary"> 
                        ₱ 550 
                    </Text>
                    <View className="mt-1 flex flex-row items-center justify-start">  
                        <AntDesign name="star" size={14} color="#f4c948" />
                        <Text className="text-lg"> 4.8 / 5 </Text>
                    </View>
                    <View className="flex flex-col gap-2 mt-8">
                        <Text> 
                            By:
                            <Text className="font-semibold"> Service Provider Name </Text>
                        </Text>
                        <View>
                            <Text>
                                Service description:
                            </Text>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora repudiandae autem officiis dolorum expedita, aut rem voluptatum ducimus nihil inventore nesciunt quasi earum maiores, sequi ipsum ad reprehenderit architecto. Voluptates magni cupiditate voluptas accusantium exercitationem sint quis, impedit ipsum?
                            </Text>
                        </View>
                        <View>
                            <Text> 
                                About us: 
                            </Text>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem vitae laudantium labore modi culpa, eveniet itaque. Ipsam, dolorem corporis.
                            </Text>
                        </View>
                    </View>
                    <Text className="text-lg mt-8"> 
                        Service ratings 
                    </Text>
                    <View className="my-4 flex flex-row gap-2 flex-wrap">
                        <Pill text="5 stars" />
                        <Pill text="4 stars" />
                        <Pill text="3 stars" />
                        <Pill text="2 stars" />
                        <Pill text="1 star" />
                    </View>
                </View>
                <View className="h-[140px]" />
            </ScrollView>
            <KeyboardAvoidingView className="absolute bottom-0 left-0 right-0">
                <View className="m-4 p-4 rounded-lg bg-white shadow-compact shadow-black">
                    <View className="flex flex-row justify-between">
                        <Text className="font-xl font-bold py-2"> 
                            {id} 
                        </Text>
                        <Text className="font-xl font-bold py-2 text-primary tracking-wide"> 
                            ₱ 550 
                        </Text>
                    </View>
                    <Pressable
                        android_ripple={{
                            foreground: true,
                            color: "rgba(255, 255, 255, 0.3)",
                        }}
                    >
                        <LinearGradient 
                            className="bg-primary py-4"
                            colors={["#214f98", "#6090dc"]}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            style={{ borderRadius: 6 }}
                        >
                            <Text className="text-lg text-white text-center font-semibold"> Book now </Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </>
    );
}