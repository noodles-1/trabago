import { Pressable, Text, View } from "react-native";

import { useRouter } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";

const Header = ({
    title,
    backButton,
}: {
    title: string;
    backButton?: boolean;
}) => {
    const router = useRouter();

    return (
        <View className="fixed top-0 left-0 right-0 flex flex-row items-center gap-2 px-4 pt-12 pb-4 border-gray-300 border-b-[1px]">
            {backButton && (
                <Pressable
                    className="rounded-full p-1"
                    onPress={() => router.back()}
                    android_ripple={{
                        foreground: true,
                        color: "#bbb",
                        borderless: true,
                    }}
                >
                    <AntDesign name="left" size={16} color="#4676c0" />
                </Pressable>
            )}
            <Text className="text-xl text-primary font-bold">
                {title}
            </Text>
        </View>
    );
};

export default Header;
