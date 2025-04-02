import { ScrollView, Text, View } from "react-native";

import Header from "~/components/custom/header";

export default function Inbox() {
    return (
        <>
            <Header title="Inbox" />
            <ScrollView className="flex-1 bg-gray-100">
                <Text className="text-gray-500 text-center p-[5rem]">
                    No conversations yet. Book a service and chat with your provider.
                </Text>
            </ScrollView>
        </>
    );
}