"use client";

import { motion } from "framer-motion";
import { about } from "../../data/data";

export default function About() {
  return (
    <motion.div
      className="flex flex-col gap-2 mt-10 scroll-mt-14"
      id="about"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <h2 className="text-xl font-medium section-heading">About</h2>

      <div className="flex flex-col gap-2">
        <p className="text-base text-base-content/80 m-0 [overflow-wrap:anywhere]">
          I&apos;m Martin, a management engineering student at the University of
          Waterloo{" "}
          <img
            src="/uwlogo.png"
            alt="University of Waterloo"
            className="inline h-4 mx-1"
          />
          , originally from Peru{" "}
          <img src="/peru.svg" alt="Peru" className="inline h-3 mx-1" />, with
          interests in software development 💻, data science 📊, and quantitative
          finance 📈.
        </p>
      </div>
    </motion.div>
  );
}
