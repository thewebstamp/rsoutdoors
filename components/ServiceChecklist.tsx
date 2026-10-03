"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { ServiceContent } from "@/data/types";
import styles from "./ServiceChecklist.module.css";

interface ServiceChecklistProps {
    service: ServiceContent;
}

export default function ServiceChecklist({ service }: ServiceChecklistProps) {
    return (
        <section className={`section ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className="eyebrow">What's Included</span>
                    <h2>What We Do</h2>
                </div>

                <div className={styles.list}>
                    {service.whatWeDo.map((item, i) => (
                        <motion.div
                            key={item}
                            className={styles.item}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.45, delay: i * 0.07 }}
                        >
                            <span className={styles.check}>
                                <Check size={16} />
                            </span>
                            <p>{item}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}