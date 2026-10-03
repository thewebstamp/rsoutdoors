"use client";

import { motion } from "framer-motion";
import { CircleAlert, CircleCheck } from "lucide-react";
import type { ServiceContent } from "@/data/types";
import styles from "./ServiceProblemSolution.module.css";

interface ServiceProblemSolutionProps {
    service: ServiceContent;
}

export default function ServiceProblemSolution({ service }: ServiceProblemSolutionProps) {
    return (
        <section className="section">
            <div className={`container ${styles.grid}`}>
                <motion.div
                    className={`${styles.panel} ${styles.problem}`}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.tag}>
                        <CircleAlert size={18} />
                        The Problem
                    </div>
                    <p className={styles.text}>{service.painPoint}</p>
                </motion.div>

                <motion.div
                    className={`${styles.panel} ${styles.solution}`}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className={styles.tag}>
                        <CircleCheck size={18} />
                        Our Fix
                    </div>
                    <p className={styles.text}>{service.promise}</p>
                </motion.div>
            </div>
        </section>
    );
}