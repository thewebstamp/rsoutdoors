"use client";

import { motion } from "framer-motion";
import { PhoneCall, ClipboardCheck, Wrench, Sparkles } from "lucide-react";
import content from "@/data/content";
import styles from "./HowItWorks.module.css";

const ICONS = [PhoneCall, ClipboardCheck, Wrench, Sparkles];

export default function HowItWorks() {
    const { howItWorks } = content.servicesOverview;

    return (
        <section className={`section ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className="eyebrow">The Process</span>
                    <h2>{howItWorks.heading}</h2>
                    <p className={styles.subheading}>{howItWorks.subheading}</p>
                </div>

                <div className={styles.steps}>
                    <span className={styles.connector} aria-hidden="true" />
                    {howItWorks.steps.map((step, i) => {
                        const Icon = ICONS[i] ?? PhoneCall;
                        return (
                            <motion.div
                                key={step.title}
                                className={styles.step}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
                                <div className={styles.iconWrap}>
                                    <Icon size={24} />
                                </div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepText}>{step.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}