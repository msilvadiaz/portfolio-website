"use client";

import { motion } from "framer-motion";

export default function Marquee({ children, duration = "15s" }) {
  return (
    <motion.div
      className="overflow-hidden whitespace-nowrap"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="inline-block animate-(--animate-marquee)"
        style={{ animationDuration: duration }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
