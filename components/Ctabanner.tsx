"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import content from "@/data/content";
import styles from "./Ctabanner.module.css";

interface CtaBannerProps {
    eyebrow?: string;
    heading: string;
    subheading: string;
    ctaLabel: string;
    href?: string;
    variant?: "dark" | "gold";
    showContact?: boolean;
}

export default function CtaBanner({
    eyebrow,
    heading,
    subheading,
    ctaLabel,
    href = "/contact",
    variant = "dark",
    showContact = false,
}: CtaBannerProps) {
    const { site } = content;

    return (
        <section className={`${styles.section} ${variant === "gold" ? styles.gold : styles.dark}`}>
            <div className="container">
                <motion.div
                    className={styles.inner}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.rule} aria-hidden="true" />
                    {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
                    <h2 className={styles.heading}>{heading}</h2>
                    <p className={styles.subheading}>{subheading}</p>
                    <a href={href} className={`btn ${variant === "dark" ? "btn-primary" : "btn-dark"}`}>
                        {ctaLabel}
                        <ArrowRight size={18} />
                    </a>

                    {showContact && (
                        <div className={styles.contactRow}>
                            <a href={`tel:${site.phone}`} className={styles.contactItem}>
                                <Phone size={16} />
                                {site.phone}
                            </a>
                            <span className={styles.contactDivider} aria-hidden="true" />
                            <a href={`mailto:${site.email}`} className={styles.contactItem}>
                                <Mail size={16} />
                                {site.email}
                            </a>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}