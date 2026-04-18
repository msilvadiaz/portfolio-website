"use client";

import { motion } from "framer-motion";
import Marquee from "./Marquee";
import { skills } from "@/data/data";

export default function TechLists() {
  return (
    <motion.div
      className="mt-10"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <h2 className="text-xl font-medium section-heading">Tech Stack</h2>
      <Marquee duration="10s">
        <div className="flex gap-8 mt-4">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2 w-[80px] p-2">
              <div className="border-2 p-2 border-base-content/20 shadow-md rounded-sm dark:bg-base-content">
                <img src={`${skill.icon}`} className="w-10 h-10" alt={`${skill.alt}`} />
              </div>
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </Marquee>
    </motion.div>
  );
}
