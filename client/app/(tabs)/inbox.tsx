import { StyleSheet, Text, View } from "react-native";

export default function Inbox() {
    return (
        <View style={styles.view}>
            <Text> Inbox page </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        padding: 20,
    },
});
