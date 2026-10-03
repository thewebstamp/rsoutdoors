"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import type { ServiceContent, ImageAsset } from "@/data/types";
import styles from "./ServiceHero.module.css";

interface ServiceHeroProps {
    service: ServiceContent;
    image: ImageAsset;
}

export default function ServiceHero({ service, image }: ServiceHeroProps) {
    return (
        <section className={styles.hero}>
            <img src={image.src} alt={image.alt} className={styles.image} />
            <div className={styles.shade} aria-hidden="true" />
            <div className={styles.vignette} aria-hidden="true" />

            <div className={`container ${styles.content}`}>
                <motion.div
                    className={styles.textPanel}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        <ChevronRight size={13} />
                        <Link href="/services">Services</Link>
                        <ChevronRight size={13} />
                        <span>{service.shortTitle}</span>
                    </nav>

                    <h1 className={styles.headline}>{service.heroHeadline}</h1>

                    <a href="/contact" className={`btn btn-primary ${styles.cta}`}>
                        {service.ctaLabel}
                        <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}