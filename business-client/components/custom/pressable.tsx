import { ReactNode } from "react";
import { Pressable } from "react-native";

const CustomPressable = ({
    className,
    color,
    onPress,
    children,
}: {
    className?: string,
    color: string,
    onPress?: () => void,
    children: ReactNode
}) => {
    return (
        <Pressable
            onPress={onPress}
            className={className}
            android_ripple={{
                foreground: true,
                borderless: true,
                color
            }}
        >
            {children}
        </Pressable>
    );
}
 
export default CustomPressable;