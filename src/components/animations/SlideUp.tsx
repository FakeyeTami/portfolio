"use client";
import { motion } from "framer-motion";

const SlideUpAnimation = ({ children, duration = 0.7, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration,
                delay: delay * 0.1,
            }}
        >
            {children}
        </motion.div>
    );
};

export default SlideUpAnimation;
