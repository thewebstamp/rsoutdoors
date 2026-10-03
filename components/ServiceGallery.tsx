"use client";

import { motion } from "framer-motion";
import type { ImageAsset } from "@/data/types";
import styles from "./ServiceGallery.module.css";

interface ServiceGalleryProps {
    images: ImageAsset[];
}

export default function ServiceGallery({ images }: ServiceGalleryProps) {
    if (images.length === 0) return null;

    return (
        <section className="section">
            <div className="container">
                <div className={styles.grid}>
                    {images.map((img, i) => (
                        <motion.div
                            key={img.src}
                            className={styles.frame}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <img src={img.src} alt={img.alt} className={styles.image} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}