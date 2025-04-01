import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

export default function Main() {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 5000);
    }, []);

    if (loading) {
        return (
            <View className="h-screen w-screen flex items-center justify-center">
                <Image 
                    source={require("~/assets/images/trabago-logo.png")}
                    className="h-28 w-28"
                />
                <View className="flex flex-row gap-[4px]">
                    <Text className="text-lg tracking-wider">
                        For
                    </Text>
                    <Text className="text-lg text-primary font-bold tracking-wider">
                        Business
                    </Text>
                </View>
            </View>
        );
    }

    return <Redirect href="/home" />;
}