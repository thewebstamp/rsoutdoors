"use client";

import { motion } from "framer-motion";
import content from "@/data/content";
import images from "@/data/images";
import styles from "./AboutStory.module.css";

export default function AboutStory() {
    const { story } = content.about;
    const { teamImage } = images.about;
    const firstLetter = story.charAt(0);
    const rest = story.slice(1);

    return (
        <section className={`section ${styles.section}`}>
            <div className={`container ${styles.grid}`}>
                <motion.div
                    className={styles.imageWrap}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <img src={teamImage.src} alt={teamImage.alt} className={styles.image} />
                </motion.div>

                <motion.div
                    className={styles.textBlock}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="eyebrow">Our Story</span>
                    <p className={styles.story}>
                        <span className={styles.dropCap}>{firstLetter}</span>
                        {rest}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}