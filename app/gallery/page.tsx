import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBanner from "@/components/Ctabanner";
import type { Metadata } from "next";
import content from "@/data/content";
import images from "@/data/images";

const { title, description } = content.seo.gallery;

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/gallery" },
    openGraph: {
        title,
        description,
        url: "/gallery",
        images: [
            {
                url: images.gallery.heroImage.src,
                width: 1200,
                height: 630,
                alt: images.gallery.heroImage.alt,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [images.gallery.heroImage.src],
    },
};

export default function GalleryPage() {
    const { ctaLabel, finalCta } = content.gallery;

    return (
        <>
            <GalleryHero />
            <GalleryGrid />
            <CtaBanner
                eyebrow="Let's Get Started"
                heading={finalCta.heading}
                subheading={finalCta.subheading}
                ctaLabel={ctaLabel}
                variant="gold"
                showContact
            />
        </>
    );
}