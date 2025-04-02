import { View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";

import CustomPressable from "~/components/custom/pressable";

const EditButton = () => {
    return (
        <View className="absolute right-2 top-8 z-10 flex flex-row items-center m-3 flex-shrink self-start bg-white opacity-75 rounded-full overflow-hidden">
            <CustomPressable
                className="p-3"
                color="#bbb"
            >
                <AntDesign name="edit" size={16} color="#4676c0" />
            </CustomPressable>
        </View>
    );
};

export default EditButton;
