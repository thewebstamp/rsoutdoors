"use client";

import { motion } from "framer-motion";
import {
    Droplets,
    TreeDeciduous,
    Shovel,
    Leaf,
    Wind,
    Snowflake,
} from "lucide-react";
import content from "@/data/content";
import styles from "./Painpoints.module.css";

// Items are authored in the same order as the six services, so each pain
// point pairs with the icon of the service that resolves it.
const ICONS = [Droplets, TreeDeciduous, Shovel, Leaf, Wind, Snowflake];

// Strips the leading/trailing curly quotes from the title — the icon now
// carries that visual weight instead.
const stripQuotes = (text: string) => text.replace(/^[\u201c"]|[\u201d"]$/g, "");

export default function PainPoints() {
    const { painPoints } = content.home;

    return (
        <section className={`section ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className="eyebrow">Sound Familiar?</span>
                    <h2>{painPoints.heading}</h2>
                    <p className={styles.subheading}>{painPoints.subheading}</p>
                </div>

                <div className={styles.grid}>
                    {painPoints.items.map((item, i) => {
                        const Icon = ICONS[i] ?? Droplets;
                        return (
                            <motion.div
                                key={item.title}
                                className={styles.card}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.35 }}
                                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                            >
                                <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>

                                <div className={styles.iconWrap}>
                                    <Icon size={24} />
                                </div>

                                <p className={styles.quote}>{stripQuotes(item.title)}</p>
                                <span className={styles.rule} aria-hidden="true" />
                                <p className={styles.response}>{item.response}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}