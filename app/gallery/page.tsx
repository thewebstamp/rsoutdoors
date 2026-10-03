import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBanner from "@/components/Ctabanner";
import content from "@/data/content";

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