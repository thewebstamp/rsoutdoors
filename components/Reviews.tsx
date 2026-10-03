"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import content from "@/data/content";
import styles from "./Reviews.module.css";

export default function Reviews() {
  const { reviews } = content.home;
  const [featured, ...rest] = reviews.items;

  return (
    <section className={styles.section}>
      <Quote className={styles.watermark} aria-hidden="true" />
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className="eyebrow">Real Results</span>
          <h2>{reviews.heading}</h2>
          <p className={styles.subheading}>{reviews.subheading}</p>
        </div>

        <div className={styles.bento}>
          {featured && (
            <motion.div
              className={styles.featured}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <Quote className={styles.featuredIcon} size={34} />
              <p className={styles.featuredQuote}>{featured.quote}</p>
              <div className={styles.meta}>
                <span className={styles.name}>{featured.name}</span>
                <span className={styles.divider} aria-hidden="true" />
                <span className={styles.location}>{featured.location}</span>
              </div>
              <span className={styles.serviceTag}>{featured.service}</span>
            </motion.div>
          )}

          <div className={styles.stack}>
            {rest.map((review, i) => (
              <motion.div
                key={review.name + i}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <p className={styles.quoteText}>{review.quote}</p>
                <div className={styles.meta}>
                  <span className={styles.name}>{review.name}</span>
                  <span className={styles.divider} aria-hidden="true" />
                  <span className={styles.location}>{review.location}</span>
                </div>
                <span className={styles.serviceTag}>{review.service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}