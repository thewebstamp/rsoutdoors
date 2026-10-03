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
import styles from "./OtherServices.module.css";

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
    "drainage-grading": Droplets,
    "tree-stump-removal": TreeDeciduous,
    "land-property-clearing": Shovel,
    "fall-cleanup-mulching": Leaf,
    "power-raking": Wind,
    "snow-removal": Snowflake,
};

interface OtherServicesProps {
    currentSlug: string;
}

export default function OtherServices({ currentSlug }: OtherServicesProps) {
    const others = content.services.filter((s) => s.slug !== currentSlug);

    return (
        <section className={`section ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className="eyebrow">Explore More</span>
                    <h2>Other Services</h2>
                </div>

                <div className={styles.row}>
                    {others.map((service, i) => {
                        const Icon = ICONS[service.slug] ?? Droplets;
                        return (
                            <motion.a
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className={styles.item}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.45, delay: i * 0.06 }}
                            >
                                <span className={styles.iconWrap}>
                                    <Icon size={20} />
                                </span>
                                <span className={styles.label}>{service.shortTitle}</span>
                                <ArrowRight size={16} className={styles.arrow} />
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}