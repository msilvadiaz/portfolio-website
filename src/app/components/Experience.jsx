"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { experience } from "../../data/data";

export default function Experience() {
    const timelineRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 0.8", "end 0.2"],
    });

    const clampedProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const smoothProgress = useSpring(clampedProgress, {
        stiffness: 180,
        damping: 28,
        mass: 0.25,
    });

    return (
        <>
            <div className="mt-10 scroll-mt-14" id="experience">
                <h2 className="text-xl font-medium section-heading">Experience</h2>
                <div className="mt-6">
                    <ol ref={timelineRef} className="relative mt-4 space-y-8 p-2">
                        <div className="pointer-events-none absolute inset-y-0 left-2.5 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500" />
                        <motion.div
                            className="pointer-events-none absolute inset-y-0 left-2.5 w-0.5 origin-top rounded-full bg-base-content"
                            style={{ scaleY: smoothProgress }}
                        />

                        {experience.map((item, index) => {
                            const cardContent = (
                                <div className="flex items-start gap-3">
                                    <div className="shrink-0 rounded-2xl border-2 border-base-content/20 p-1">
                                        <div className="h-16 w-16 overflow-hidden rounded-md border-2 border-base-content/20 bg-base-100">
                                            <img
                                                src={item.logo}
                                                alt={item.logoAlt}
                                                className="h-full w-full scale-110 object-cover"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col">
                                        <time className="text-xs font-medium text-base-content/80">
                                            {item.date}
                                        </time>

                                        <p className="text-base font-semibold text-base-content">
                                            {item.role} • {item.company}
                                        </p>

                                        <p className="mt-1 max-w-[52ch] text-sm text-base-content/80">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );

                            return (
                                <li
                                    key={index}
                                    className="relative -ms-1.5 flex items-start gap-4"
                                >
                                    <span className="relative z-10 size-3 shrink-0 rounded-full bg-base-content"></span>

                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-lg transition-transform duration-200 hover:scale-[1.01]"
                                        >
                                            {cardContent}
                                        </a>
                                    ) : (
                                        cardContent
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}
