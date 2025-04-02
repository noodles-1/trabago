import { ReactNode } from "react";

import { LinearGradient } from "expo-linear-gradient";

const Gradient = ({
    className,
    children,
    radius,
}: {
    className?: string;
    children?: ReactNode;
    radius?: number;
}) => {
    return (
        <LinearGradient
            className={className}
            colors={["#214f98", "#6090dc"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: radius ?? 6 }}
        >
            {children}
        </LinearGradient>
    );
};

export default Gradient;
