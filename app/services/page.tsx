import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorks from "@/components/HowItWorks";
import WorkBreak from "@/components/Workbreak";
import TrustStrip from "@/components/TrustStrip";
import CtaBanner from "@/components/Ctabanner";
import type { Metadata } from "next";
import content from "@/data/content";
import images from "@/data/images";

const { title, description } = content.seo.servicesOverview;

export const metadata: Metadata = {
    title,
    description,
    alternates: { canonical: "/services" },
    openGraph: {
        title,
        description,
        url: "/services",
        images: [
            {
                url: images.servicesOverview.workBreakImage.src,
                width: 1200,
                height: 630,
                alt: images.servicesOverview.workBreakImage.alt,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [images.servicesOverview.workBreakImage.src],
    },
};

export default function ServicesPage() {
    const { ctaLabel, finalCta, workBreak } = content.servicesOverview;

    return (
        <>
            <ServicesHero />
            <ServicesGrid />
            <HowItWorks />
            <WorkBreak
                image={images.servicesOverview.workBreakImage}
                caption={workBreak.caption}
            />
            <TrustStrip />
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