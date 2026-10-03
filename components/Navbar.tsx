"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import content from "@/data/content";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const { site, nav } = content;
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Add a shadow once the page scrolls
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close the menu whenever the route changes
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Lock body scroll while the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header className={`${styles.header} ${scrolled || open ? styles.scrolled : ""}`}>
            <div className={`container ${styles.bar}`}>
                <Link href="/" className={styles.brand} aria-label={site.businessName}>
                    {site.businessName}
                </Link>

                <nav className={styles.desktopNav} aria-label="Main">
                    {nav.links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.link} ${isActive(link.href) ? styles.active : ""}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <a href={`tel:${site.phone}`} className={styles.phone}>
                        <Phone size={16} />
                        {site.phone}
                    </a>
                    <Link href="/contact" className={`btn btn-primary ${styles.cta}`}>
                        {nav.ctaLabel}
                    </Link>
                </div>

                <button
                    className={styles.toggle}
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className={styles.mobilePanel}
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <nav className={styles.mobileNav} aria-label="Mobile">
                            {nav.links.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.35, delay: 0.05 + i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`${styles.mobileLink} ${isActive(link.href) ? styles.mobileActive : ""
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className={styles.mobileFooter}>
                            <Link href="/contact" className="btn btn-primary">
                                {nav.ctaLabel}
                            </Link>
                            <a href={`tel:${site.phone}`} className={styles.mobilePhone}>
                                <Phone size={18} />
                                {site.phone}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}