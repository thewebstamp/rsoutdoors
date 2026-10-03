"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import content from "@/data/content";
import styles from "./ContactMap.module.css";

export default function ContactMap() {
    const { site, contact } = content;

    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        site.address
    )}`;
    const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
        site.address
    )}&output=embed`;

    return (
        <section className="section">
            <div className="container">
                <motion.div
                    className={styles.frame}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <iframe
                        src={embedUrl}
                        className={styles.map}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map showing ${site.businessName}'s location`}
                    />

                    <div className={styles.overlay}>
                        <span className={styles.overlayLabel}>{site.businessName}</span>
                        <p className={styles.overlayAddress}>{site.address}</p>
                        <a
                            href={mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            {contact.mapCtaLabel}
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}