"use client";

import { motion } from "framer-motion";
import { ArrowRight, Images } from "lucide-react";
import content from "@/data/content";
import images from "@/data/images";
import styles from "./Hero.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
    const { hero } = content.home;
    const { heroImage } = images.home;

    return (
        <section className={styles.hero}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.textBlock}>
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
                        className={styles.divider}
                        aria-hidden="true"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 72, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.35, ease }}
                    />

                    <motion.p
                        className={styles.subheadline}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease }}
                    >
                        {hero.subheadline}
                    </motion.p>

                    <motion.div
                        className={styles.ctaRow}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.45, ease }}
                    >
                        <a href="/contact" className="btn btn-primary">
                            {hero.ctaPrimary}
                            <ArrowRight size={18} />
                        </a>
                        <a href="/gallery" className="btn btn-secondary">
                            <Images size={18} />
                            {hero.ctaSecondary}
                        </a>
                    </motion.div>
                </div>

                <div className={styles.visual}>
                    <motion.div
                        className={styles.circle}
                        aria-hidden="true"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.2, ease }}
                    />
                    <motion.div
                        className={styles.imageWrap}
                        initial={{ opacity: 0, y: 40, x: 20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 0.9, delay: 0.25, ease }}
                    >
                        <img src={heroImage.src} alt={heroImage.alt} className={styles.image} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}