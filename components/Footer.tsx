import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import content from "@/data/content";
import styles from "./Footer.module.css";

export default function Footer() {
    const { site, nav, footer, services } = content;
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.glow} aria-hidden="true" />

            <div className={`container ${styles.top}`}>
                <div className={styles.brandCol}>
                    <span className={styles.brand}>{site.businessName}</span>
                    <p className={styles.blurb}>{footer.blurb}</p>
                    <Link href="/contact" className={`btn btn-primary ${styles.cta}`}>
                        {footer.ctaLabel}
                        <ArrowRight size={16} />
                    </Link>
                </div>

                <div className={styles.linkCol}>
                    <h3 className={styles.colHeading}>Quick Links</h3>
                    <ul className={styles.linkList}>
                        {nav.links.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.linkCol}>
                    <h3 className={styles.colHeading}>Services</h3>
                    <ul className={styles.linkList}>
                        {services.map((service) => (
                            <li key={service.slug}>
                                <Link href={`/services/${service.slug}`}>{service.shortTitle}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.contactCol}>
                    <h3 className={styles.colHeading}>Contact</h3>
                    <ul className={styles.contactList}>
                        <li>
                            <a href={`tel:${site.phone}`}>
                                <Phone size={16} />
                                {site.phone}
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${site.email}`}>
                                <Mail size={16} />
                                {site.email}
                            </a>
                        </li>
                        <li className={styles.address}>
                            <MapPin size={16} />
                            {site.address}
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`${styles.bottom}`}>
                <p className={styles.copyRight}>
                    &copy; {year} {footer.copyrightName}. All rights reserved.
                </p>
                <p className={styles.serviceArea}>{site.serviceArea}</p>
            </div>
        </footer>
    );
}