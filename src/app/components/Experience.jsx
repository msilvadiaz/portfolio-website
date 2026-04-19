"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { experience } from "../../data/data";

export default function Experience() {
    const { scrollYProgress } = useScroll();

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
                    <ol className="relative mt-4 space-y-8 pl-8">
                        <div className="pointer-events-none absolute inset-y-0 left-1.5 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500" />
                        <motion.div
                            className="pointer-events-none absolute inset-y-0 left-1.5 w-0.5 origin-top rounded-full bg-base-content"
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
                                <li key={index} className="relative flex items-start gap-4">
                                    <motion.span
                                        className="absolute left-1.5 top-1 z-10 size-3 -translate-x-1/2 rounded-full bg-base-content"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true, amount: 0.4 }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                    />

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
