import { ReactNode } from "react";

import { LinearGradient } from "expo-linear-gradient";

const Gradient = ({
    className,
    children,
}: {
    className?: string
    children?: ReactNode
}) => {
    return (
        <LinearGradient
            className={className}
            colors={["#214f98", "#6090dc"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: 6 }}
        >
            {children}
        </LinearGradient>
    );
}
 
export default Gradient;