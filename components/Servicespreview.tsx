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
import styles from "./Servicespreview.module.css";

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
    "drainage-grading": Droplets,
    "tree-stump-removal": TreeDeciduous,
    "land-property-clearing": Shovel,
    "fall-cleanup-mulching": Leaf,
    "power-raking": Wind,
    "snow-removal": Snowflake,
};

export default function ServicesPreview() {
    const { services } = content;
    const { heading, subheading, ctaLabel } = content.home.servicesPreview;

    return (
        <section className={`section ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className="eyebrow">What We Do</span>
                    <h2>{heading}</h2>
                    <p className={styles.subheading}>{subheading}</p>
                </div>

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
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
                            >
                                <div className={styles.imageWrap}>
                                    <div className={styles.imageInner}>
                                        {img && (
                                            <img src={img.src} alt={img.alt} className={styles.image} />
                                        )}
                                        <div className={styles.imageShade} aria-hidden="true" />
                                    </div>
                                    <div className={styles.iconWrap}>
                                        <Icon size={24} />
                                    </div>
                                </div>

                                <div className={styles.body}>
                                    <h3 className={styles.cardTitle}>{service.shortTitle}</h3>
                                    <p className={styles.cardText}>{service.heroHeadline}</p>
                                    <span className={styles.cardLink}>
                                        Learn more <ArrowRight size={16} />
                                    </span>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>

                <div className={styles.footerCta}>
                    <a href="/services" className="btn btn-secondary">
                        {ctaLabel}
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}