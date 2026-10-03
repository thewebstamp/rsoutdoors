"use client";

import { motion } from "framer-motion";
import {
    Droplets,
    TreeDeciduous,
    Shovel,
    Leaf,
    Wind,
    Snowflake,
    ArrowRight,
} from "lucide-react";
import content from "@/data/content";
import images from "@/data/images";
import styles from "./ServicesGrid.module.css";

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
    "drainage-grading": Droplets,
    "tree-stump-removal": TreeDeciduous,
    "land-property-clearing": Shovel,
    "fall-cleanup-mulching": Leaf,
    "power-raking": Wind,
    "snow-removal": Snowflake,
};

export default function ServicesGrid() {
    const { services } = content;

    return (
        <section className={`section ${styles.section}`}>
            <div className="container">
                <div className={styles.grid}>
                    {services.map((service, i) => {
                        const Icon = ICONS[service.slug] ?? Droplets;
                        const img = images.services.find((s) => s.slug === service.slug)?.heroImage;

                        return (
                            <motion.a
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className={styles.card}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
                            >
                                <div className={styles.imageWrap}>
                                    <div className={styles.imageInner}>
                                        {img && (
                                            <img src={img.src} alt={img.alt} className={styles.image} />
                                        )}
                                        <div className={styles.imageShade} aria-hidden="true" />
                                    </div>
                                    <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
                                    <div className={styles.iconWrap}>
                                        <Icon size={26} />
                                    </div>
                                </div>

                                <div className={styles.body}>
                                    <h3 className={styles.cardTitle}>{service.shortTitle}</h3>
                                    <p className={styles.tagline}>{service.heroHeadline}</p>
                                    <span className={styles.divider} aria-hidden="true" />
                                    <p className={styles.painPoint}>{service.painPoint}</p>
                                    <span className={styles.cardLink}>
                                        Learn more <ArrowRight size={16} />
                                    </span>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}