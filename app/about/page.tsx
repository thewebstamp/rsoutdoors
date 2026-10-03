import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutValues from "@/components/AboutValues";
import TrustStrip from "@/components/TrustStrip";
import WorkBreak from "@/components/Workbreak";
import CtaBanner from "@/components/Ctabanner";
import type { Metadata } from "next";
import content from "@/data/content";
import images from "@/data/images";

const { title, description } = content.seo.about;

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/about" },
    openGraph: {
        title,
        description,
        url: "/about",
        images: [
            {
                url: images.about.heroImage.src,
                width: 1200,
                height: 630,
                alt: images.about.heroImage.alt,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [images.about.heroImage.src],
    },
};

export default function AboutPage() {
    const { ctaLabel, finalCta, workBreak } = content.about;

    return (
        <>
            <AboutHero />
            <AboutStory />
            <AboutValues />
            <TrustStrip />
            <WorkBreak
                image={images.about.workBreakImage}
                caption={workBreak.caption}
            />
            <CtaBanner
                eyebrow="Let's Get Started"
                heading={finalCta.heading}
                subheading={finalCta.subheading}
                ctaLabel={ctaLabel}
                variant="dark"
                showContact
            />
        </>
    );
}