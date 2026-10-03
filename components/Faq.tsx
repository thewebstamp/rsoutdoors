"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Phone } from "lucide-react";
import content from "@/data/content";
import styles from "./Faq.module.css";

export default function Faq() {
    const { faq } = content.home;
    const { site } = content;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className={`section ${styles.section}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.intro}>
                    <span className={styles.rule} aria-hidden="true" />
                    <span className="eyebrow">Questions</span>
                    <h2>{faq.heading}</h2>
                    <p className={styles.subheading}>{faq.subheading}</p>

                    <div className={styles.contactCard}>
                        <p className={styles.contactLabel}>Still have a question?</p>
                        <a href={`tel:${site.phone}`} className={styles.contactLink}>
                            <Phone size={18} />
                            {site.phone}
                        </a>
                    </div>
                </div>

                <div className={styles.list}>
                    {faq.items.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={item.question}
                                className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                            >
                                <button
                                    className={styles.question}
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{item.question}</span>
                                    <motion.span
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        className={styles.icon}
                                    >
                                        <Plus size={18} />
                                    </motion.span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                            className={styles.answerWrap}
                                        >
                                            <p className={styles.answer}>{item.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}