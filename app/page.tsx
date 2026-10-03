import Hero from "@/components/Hero";
import PainPoints from "@/components/Painpoints";
import WorkBreak from "@/components/Workbreak";
import ServicesPreview from "@/components/Servicespreview";
import WhyUs from "@/components/Whyus";
import Reviews from "@/components/Reviews";
import CtaBanner from "@/components/Ctabanner";
import FeaturedWork from "@/components/Featuredwork";
import Faq from "@/components/Faq";
import type { Metadata } from "next";
import content from "@/data/content";
import images from "@/data/images";

const { title, description } = content.seo.home;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    images: [
      {
        url: images.home.heroImage.src,
        width: 1200,
        height: 630,
        alt: images.home.heroImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [images.home.heroImage.src],
  },
};

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