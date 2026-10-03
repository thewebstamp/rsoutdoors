"use client";

import { motion } from "framer-motion";
import { Tractor, HeartHandshake, CalendarCheck, ShieldCheck } from "lucide-react";
import content from "@/data/content";
import styles from "./TrustStrip.module.css";

const ICONS = [Tractor, HeartHandshake, CalendarCheck, ShieldCheck];

export default function TrustStrip() {
    const { items } = content.home.whyUs;

    return (
        <section className={styles.section}>
            <div className={`container ${styles.row}`}>
                {items.map((item, i) => {
                    const Icon = ICONS[i] ?? Tractor;
                    return (
                        <motion.div
                            key={item.title}
                            className={styles.item}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.6 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                        >
                            <span className={styles.iconWrap}>
                                <Icon size={18} />
                            </span>
                            <span>{item.title}</span>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}