"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import content from "@/data/content";
import images from "@/data/images";
import styles from "./Featuredwork.module.css";

export default function FeaturedWork() {
    const { featuredWork } = content.home;
    const gallery = images.home.featuredWork;

    return (
        <section className="section">
            <div className="container">
                <div className={styles.header}>
                    <span className="eyebrow">Recent Projects</span>
                    <h2>{featuredWork.heading}</h2>
                    <p className={styles.subheading}>{featuredWork.subheading}</p>
                </div>

                <div className={styles.wall}>
                    {gallery.map((img, i) => (
                        <motion.div
                            key={img.src}
                            className={styles.frame}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.55, delay: i * 0.09 }}
                            whileHover={{ rotate: 0, scale: 1.03 }}
                        >
                            <img src={img.src} alt={img.alt} className={styles.image} />
                            <span className={styles.ring} aria-hidden="true" />
                        </motion.div>
                    ))}
                </div>

                <div className={styles.footerCta}>
                    <a href="/gallery" className="btn btn-dark">
                        {featuredWork.galleryCtaLabel}
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}