"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const FadeInAnimation = ({
    children,
    delay = 0,
}: {
    children: ReactNode;
    delay?: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.5,
                delay,
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInAnimation;
