import { Stack } from "expo-router";

export default function ServicesLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="[service]" options={{ headerShown: false }} />
        </Stack>
    );
}