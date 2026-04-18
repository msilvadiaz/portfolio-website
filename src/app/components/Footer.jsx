"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      className="mt-20 p-4"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <p className="text-sm">© 2025. All rights reserved.</p>
      <p className="text-xs">
        This site uses{" "}
        <a
          href="https://github.com/sachinbhujel/NextJS-Portfolio-Template"
          target="_blank"
          className="text-sm font-medium hover:underline"
        >
          NextJS Portfolio Template
        </a>{" "}
      </p>
    </motion.div>
  );
}
