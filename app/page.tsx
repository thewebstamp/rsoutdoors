import Hero from "@/components/Hero";
import PainPoints from "../components/Painpoints";
import ServicesPreview from "../components/Servicespreview";
import WhyUs from "../components/Whyus";
import Reviews from "../components/Reviews";
import CtaBanner from "../components/Ctabanner";
import FeaturedWork from "../components/Featuredwork";
import Faq from "@/components/Faq";
import content from "@/data/content";
import WorkBreak from "@/components/Workbreak";
import images from "@/data/images";

export default function HomePage() {
  const { midCta, finalCta } = content.home;

  return (
    <>
      <Hero />
      <PainPoints />
      <WorkBreak
        image={images.home.workBreakImage}
        caption={content.home.workBreak.caption}
      />
      <ServicesPreview />
      <WhyUs />
      <WorkBreak
        image={images.home.workBreakImageTwo}
        caption={content.home.workBreakTwo.caption}
      />
      <Reviews />
      <CtaBanner
        eyebrow="Ready When You Are"
        heading={midCta.heading}
        subheading={midCta.subheading}
        ctaLabel={midCta.ctaLabel}
        variant="dark"
      />
      <FeaturedWork />
      <Faq />
      <CtaBanner
        eyebrow="Let's Get Started"
        heading={finalCta.heading}
        subheading={finalCta.subheading}
        ctaLabel={finalCta.ctaLabel}
        variant="gold"
        showContact
      />
    </>
  );
}