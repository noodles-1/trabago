import { Pressable, View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const BackButton = () => {
    const router = useRouter();

    return (
        <View className="absolute left-2 top-8 z-10 flex flex-row items-center m-3 flex-shrink self-start bg-white opacity-75 rounded-full overflow-hidden">
            <Pressable
                className="p-3"
                onPress={() => router.back()}
                android_ripple={{
                    foreground: true,
                    color: "#bbb",
                    borderless: true,
                }}
            >
                <AntDesign name="left" size={16} color="#4676c0" />
            </Pressable>
        </View>
    );
};

export default BackButton;
