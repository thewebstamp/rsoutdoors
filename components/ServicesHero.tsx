"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import content from "@/data/content";
import styles from "./ServicesHero.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServicesHero() {
    const { hero, intro, ctaLabel } = content.servicesOverview;

    return (
        <section className={styles.hero}>
            <div className={`container ${styles.inner}`}>
                <motion.span
                    className="eyebrow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease }}
                >
                    {hero.eyebrow}
                </motion.span>

                <motion.h1
                    className={styles.headline}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease }}
                >
                    {hero.headline}
                </motion.h1>

                <motion.span
                    className={styles.rule}
                    aria-hidden="true"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 72, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3, ease }}
                />

                <motion.p
                    className={styles.subheadline}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25, ease }}
                >
                    {hero.subheadline}
                </motion.p>

                <motion.p
                    className={styles.intro}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35, ease }}
                >
                    {intro}
                </motion.p>

                <motion.div
                    className={styles.ctaWrap}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45, ease }}
                >
                    <a href="/contact" className="btn btn-primary">
                        {ctaLabel}
                        <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}