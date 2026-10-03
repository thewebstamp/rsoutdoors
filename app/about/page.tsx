import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutValues from "@/components/AboutValues";
import TrustStrip from "@/components/TrustStrip";
import WorkBreak from "@/components/Workbreak";
import CtaBanner from "@/components/Ctabanner";
import content from "@/data/content";
import images from "@/data/images";

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