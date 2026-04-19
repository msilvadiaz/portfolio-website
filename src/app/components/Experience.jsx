"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import { experience } from "../../data/data";

export default function Experience() {
    const timelineRef = useRef(null);
    const itemRefs = useRef([]);
    const [itemProgressPoints, setItemProgressPoints] = useState([]);
    const [currentProgress, setCurrentProgress] = useState(0);

    const { scrollYProgress } = useScroll();

    const clampedProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const smoothProgress = useSpring(clampedProgress, {
        stiffness: 180,
        damping: 28,
        mass: 0.25,
    });

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        setCurrentProgress(latest);
    });

    useEffect(() => {
        const updateProgressPoints = () => {
            const timeline = timelineRef.current;
            if (!timeline) {
                return;
            }

            const timelineHeight = timeline.clientHeight;
            if (!timelineHeight) {
                return;
            }

            const points = itemRefs.current.map((item) => {
                if (!item) {
                    return 1;
                }

                const itemTop = item.offsetTop;
                const markerCenter = itemTop + 10;
                return Math.min(Math.max(markerCenter / timelineHeight, 0), 1);
            });

            setItemProgressPoints(points);
        };

        updateProgressPoints();

        const resizeObserver = new ResizeObserver(updateProgressPoints);
        if (timelineRef.current) {
            resizeObserver.observe(timelineRef.current);
        }

        window.addEventListener("resize", updateProgressPoints);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener("resize", updateProgressPoints);
        };
    }, []);

    const fallbackPoints = useMemo(() => {
        if (experience.length <= 1) {
            return [1];
        }

        return experience.map((_, index) => index / (experience.length - 1));
    }, []);

    return (
        <>
            <div className="mt-10 scroll-mt-14" id="experience">
                <h2 className="text-xl font-medium section-heading">Experience</h2>
                <div className="mt-6">
                    <ol ref={timelineRef} className="relative mt-4 space-y-8">
                        <motion.div
                            className="pointer-events-none absolute inset-y-0 left-1.5 w-0.5 origin-top rounded-full bg-base-content"
                            style={{ scaleY: smoothProgress }}
                        />

                        {experience.map((item, index) => {
                            const threshold = itemProgressPoints[index] ?? fallbackPoints[index] ?? 1;
                            const isReached = currentProgress >= threshold;

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
                                    ref={(el) => {
                                        itemRefs.current[index] = el;
                                    }}
                                    className="relative flex items-start gap-4 pl-8"
                                >
                                    <motion.span
                                        className="absolute left-1.5 top-1 z-10 size-3 -translate-x-1/2 rounded-full bg-base-content"
                                        animate={{ opacity: isReached ? 1 : 0, scale: isReached ? 1 : 0.4 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
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
