import { Text, View } from "react-native";

import CustomPressable from "~/components/custom/pressable";

export default function Pill({
    text,
    icon,
}: {
    text: string;
    icon?: React.ReactNode;
}) {
    return (
        <View className="rounded-full overflow-hidden flex-shrink self-start">
            <CustomPressable
                className="flex-shrink self-start"
                color="rgba(100, 100, 100, 0.2)"
            >
                <View className="px-4 py-2 rounded-full flex-shrink self-start border-gray-500 bg-white border-[1px] flex flex-row items-center gap-2">
                    {icon}
                    <Text className="inline">{text}</Text>
                </View>
            </CustomPressable>
        </View>
    );
}
