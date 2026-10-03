import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorks from "@/components/HowItWorks";
import WorkBreak from "@/components/Workbreak";
import TrustStrip from "@/components/TrustStrip";
import CtaBanner from "@/components/Ctabanner";
import content from "@/data/content";
import images from "@/data/images";

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