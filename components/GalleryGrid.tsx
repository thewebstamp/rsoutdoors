"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import content from "@/data/content";
import images from "@/data/images";
import styles from "./GalleryGrid.module.css";

export default function GalleryGrid() {
    const { services } = content;
    const items = images.gallery.items;

    const filters = useMemo(
        () => [
            { slug: "all", label: "All" },
            ...services.map((s) => ({ slug: s.slug, label: s.shortTitle })),
        ],
        [services]
    );

    const [activeFilter, setActiveFilter] = useState("all");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const filtered = useMemo(
        () =>
            activeFilter === "all"
                ? items
                : items.filter((item) => item.category === activeFilter),
        [items, activeFilter]
    );

    const categoryLabel = (slug: string) =>
        services.find((s) => s.slug === slug)?.shortTitle ?? "";

    const closeLightbox = () => setLightboxIndex(null);
    const showPrev = () =>
        setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
    const showNext = () =>
        setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));

    useEffect(() => {
        if (lightboxIndex === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
        };
        window.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lightboxIndex, filtered.length]);

    const activeImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

    return (
        <section className="section">
            <div className="container">
                <div className={styles.filters}>
                    {filters.map((f) => (
                        <button
                            key={f.slug}
                            className={`${styles.filterBtn} ${activeFilter === f.slug ? styles.filterActive : ""
                                }`}
                            onClick={() => setActiveFilter(f.slug)}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                <div className={styles.masonry}>
                    {filtered.map((item, i) => (
                        <motion.button
                            key={item.src + i}
                            className={styles.tile}
                            onClick={() => setLightboxIndex(i)}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
                        >
                            <img src={item.src} alt={item.alt} className={styles.image} />
                            <div className={styles.overlay} aria-hidden="true">
                                <Expand size={22} />
                                <span className={styles.overlayLabel}>{categoryLabel(item.category)}</span>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {activeImage && (
                    <motion.div
                        className={styles.lightbox}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={closeLightbox}
                    >
                        <button
                            className={styles.closeBtn}
                            onClick={closeLightbox}
                            aria-label="Close"
                        >
                            <X size={26} />
                        </button>

                        <button
                            className={`${styles.navBtn} ${styles.navPrev}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                showPrev();
                            }}
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={28} />
                        </button>

                        <motion.div
                            className={styles.lightboxImageWrap}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={activeImage.src} alt={activeImage.alt} className={styles.lightboxImage} />
                            <span className={styles.lightboxCaption}>
                                {categoryLabel(activeImage.category)}
                            </span>
                        </motion.div>

                        <button
                            className={`${styles.navBtn} ${styles.navNext}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                showNext();
                            }}
                            aria-label="Next image"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}