"use client";
import { motion } from "framer-motion";

const DropDownAnimation = ({ children, duration = 0.3, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration,
                delay: delay * 0.1,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
};

export default DropDownAnimation;
