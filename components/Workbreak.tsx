"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ImageAsset } from "@/data/types";
import styles from "./Workbreak.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

interface WorkBreakProps {
    image: ImageAsset;
    caption: string;
}

export default function WorkBreak({ image, caption }: WorkBreakProps) {
    const ref = useRef<HTMLDivElement>(null);

    // Image drifts slightly slower than the page for a smooth parallax feel
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    ref={ref}
                    className={styles.frame}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease }}
                >
                    <motion.img
                        src={image.src}
                        alt={image.alt}
                        className={styles.image}
                        style={{ y }}
                    />
                    <div className={styles.shade} aria-hidden="true" />
                    <div className={styles.caption}>
                        <span className={styles.line} aria-hidden="true" />
                        <p>{caption}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}