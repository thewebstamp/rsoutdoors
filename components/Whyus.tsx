"use client";

import { motion } from "framer-motion";
import { Tractor, HeartHandshake, CalendarCheck, ShieldCheck, ArrowRight } from "lucide-react";
import content from "@/data/content";
import styles from "./Whyus.module.css";

const ICONS = [Tractor, HeartHandshake, CalendarCheck, ShieldCheck];

export default function WhyUs() {
    const { whyUs } = content.home;

    return (
        <section className={styles.section}>
            <span className={styles.bigNumeral} aria-hidden="true">04</span>
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.intro}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.introRule} aria-hidden="true" />
                    <span className={`eyebrow ${styles.eyebrow}`}>The R &amp; S Difference</span>
                    <h2 className={styles.heading}>{whyUs.heading}</h2>
                    <a href="/contact" className={styles.introLink}>
                        Get your free estimate
                        <ArrowRight size={16} />
                    </a>
                </motion.div>

                <div className={styles.grid}>
                    {whyUs.items.map((item, i) => {
                        const Icon = ICONS[i] ?? Tractor;
                        return (
                            <motion.div
                                key={item.title}
                                className={styles.item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                            >
                                <Icon size={26} className={styles.icon} />
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <p className={styles.itemText}>{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}