"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ScrollText, Users } from "lucide-react";
import content from "@/data/content";
import styles from "./AboutValues.module.css";

const ICONS = [BadgeCheck, ScrollText, Users];

export default function AboutValues() {
    const { values } = content.about;

    return (
        <section className="section">
            <div className="container">
                <div className={styles.header}>
                    <span className="eyebrow">What Drives Us</span>
                    <h2>{values.heading}</h2>
                </div>

                <div className={styles.grid}>
                    {values.items.map((item, i) => {
                        const Icon = ICONS[i] ?? BadgeCheck;
                        return (
                            <motion.div
                                key={item.title}
                                className={styles.card}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.55, delay: i * 0.1 }}
                            >
                                <span className={styles.topRule} aria-hidden="true" />
                                <div className={styles.iconWrap}>
                                    <Icon size={26} />
                                </div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardText}>{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}