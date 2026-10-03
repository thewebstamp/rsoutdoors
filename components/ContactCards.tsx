"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import content from "@/data/content";
import styles from "./ContactCards.module.css";

export default function ContactCards() {
    const { site, contact } = content;
    const { directInfo } = contact;

    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        site.address
    )}`;

    const cards = [
        {
            icon: Phone,
            label: directInfo.phoneLabel,
            value: site.phone,
            href: `tel:${site.phone}`,
            cta: "Call now",
        },
        {
            icon: Mail,
            label: directInfo.emailLabel,
            value: site.email,
            href: `mailto:${site.email}`,
            cta: "Send an email",
        },
        {
            icon: MapPin,
            label: directInfo.addressLabel,
            value: site.address,
            href: mapsUrl,
            cta: "Get directions",
            external: true,
        },
    ];

    return (
        <section className={`section ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className="eyebrow">Reach Out</span>
                    <h2>{directInfo.heading}</h2>
                </div>

                <div className={styles.grid}>
                    {cards.map((card, i) => {
                        const Icon = card.icon;
                        return (
                            <motion.a
                                key={card.label}
                                href={card.href}
                                target={card.external ? "_blank" : undefined}
                                rel={card.external ? "noopener noreferrer" : undefined}
                                className={styles.card}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.55, delay: i * 0.1 }}
                            >
                                <span className={styles.topRule} aria-hidden="true" />
                                <div className={styles.iconWrap}>
                                    <Icon size={26} />
                                </div>
                                <span className={styles.label}>{card.label}</span>
                                <p className={styles.value}>{card.value}</p>
                                <span className={styles.cardLink}>
                                    {card.cta} <ArrowRight size={16} />
                                </span>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}