import { ScrollView, Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";

import { Separator } from "~/components/ui/separator";
import Pill from "~/components/custom/pill";
import BackButton from "~/components/custom/back-button";
import EditButton from "~/components/custom/edit-button";

export default function Service() {
    const { id } = useLocalSearchParams();

    return (
        <>  
            <BackButton />
            <EditButton />
            <ScrollView className="flex-1">
                <View className="bg-gray-300 h-[350px] w-full" />
                <View className="px-4">
                    <Text className="mt-4 font-bold text-2xl"> 
                        {id} 
                    </Text>
                    <Text className="mt-2 font-bold tracking-wider text-3xl text-primary"> 
                        ₱ 550 
                    </Text>
                    <View className="mt-1 flex flex-row items-center justify-start">  
                        <AntDesign name="star" size={12} color="#f4c948" />
                        <Text className="text-md text-gray-500"> 4.8 / 5 </Text>
                    </View>
                    <Text className="text-lg font-bold mt-8"> 
                        Service information
                    </Text>
                    <Separator className="my-4" />
                    <View className="flex flex-col gap-2">
                        <View className="flex flex-row gap-1">
                            <Text className="text-gray-500"> 
                                By:
                            </Text>
                            <Text className="font-bold">
                                Service Provider Name
                            </Text>
                        </View>
                        <View>
                            <Text className="text-gray-500">
                                Service description:
                            </Text>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora repudiandae autem officiis dolorum expedita, aut rem voluptatum ducimus nihil inventore nesciunt quasi earum maiores, sequi ipsum ad reprehenderit architecto. Voluptates magni cupiditate voluptas accusantium exercitationem sint quis, impedit ipsum?
                            </Text>
                        </View>
                        <View>
                            <Text className="text-gray-500"> 
                                About us: 
                            </Text>
                            <Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem vitae laudantium labore modi culpa, eveniet itaque. Ipsam, dolorem corporis.
                            </Text>
                        </View>
                    </View>
                    <Text className="text-lg font-bold mt-8"> 
                        Service ratings 
                    </Text>
                    <Separator className="my-4" />
                    <View className="flex flex-row gap-2 flex-wrap">
                        <Pill text="5 stars" />
                        <Pill text="4 stars" />
                        <Pill text="3 stars" />
                        <Pill text="2 stars" />
                        <Pill text="1 star" />
                    </View>
                </View>
                <View className="h-[140px]" />
            </ScrollView>
        </>
    );
}