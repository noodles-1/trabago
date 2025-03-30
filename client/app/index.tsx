import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";

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
            </View>
        );
    }

    return <Redirect href="/home" />;
}