import { View } from "react-native";

import { useRouter } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";

import CustomPressable from "~/components/custom/pressable";

const BackButton = () => {
    const router = useRouter();

    return (
        <View className="absolute left-2 top-8 z-10 flex flex-row items-center m-3 flex-shrink self-start bg-white opacity-75 rounded-full overflow-hidden">
            <CustomPressable
                className="p-3"
                onPress={() => router.back()}
                color="#bbb"
            >
                <AntDesign name="left" size={16} color="#4676c0" />
            </CustomPressable>
        </View>
    );
};

export default BackButton;
