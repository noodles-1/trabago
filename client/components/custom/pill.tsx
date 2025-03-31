import { Pressable, Text, View } from "react-native";

export default function Pill({
    text,
    icon,
}: {
    text: string,
    icon?: () => React.ReactNode
}) {
    return (
        <View className="rounded-full overflow-hidden flex-shrink self-start">
            <Pressable
                className="flex-shrink self-start"
                android_ripple={{
                    color: "rgba(100, 100, 100, 0.2)",
                    borderless: true
                }}
            >
                <View className="px-4 py-2 rounded-full flex-shrink self-start border-gray-500 border-[1px] flex flex-row items-center gap-2">
                    {icon?.()}
                    <Text className="inline">
                        {text}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}