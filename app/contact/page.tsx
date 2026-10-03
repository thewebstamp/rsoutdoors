import type { Metadata } from "next";
import ContactHero from "@/components/ContactHero";
import ContactCards from "@/components/ContactCards";
import ContactMap from "@/components/ContactMap";
import content from "@/data/content";
import images from "@/data/images";

const { title, description } = content.seo.contact;

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/contact" },
    openGraph: {
        title,
        description,
        url: "/contact",
        images: [
            {
                url: images.og.src,
                width: 1200,
                height: 630,
                alt: images.og.alt,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [images.og.src],
    },
};

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <ContactCards />
            <ContactMap />
        </>
    );
}