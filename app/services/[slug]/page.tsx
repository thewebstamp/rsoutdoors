import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceHero from "@/components/ServiceHero";
import ServiceProblemSolution from "@/components/ServiceProblemSolution";
import ServiceChecklist from "@/components/ServiceChecklist";
import ServiceGallery from "@/components/ServiceGallery";
import OtherServices from "@/components/OtherServices";
import CtaBanner from "@/components/Ctabanner";
import content from "@/data/content";
import images from "@/data/images";

export function generateStaticParams() {
    return content.services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const service = content.services.find((s) => s.slug === slug);
    const serviceImages = images.services.find((s) => s.slug === slug);

    if (!service || !serviceImages) {
        return {};
    }

    const title = `${service.shortTitle} in Virginia Beach, VA`;
    const description = `${service.heroHeadline}. ${service.painPoint}`.slice(0, 155);
    const ogImage = serviceImages.detailHeroImage;

    return {
        title,
        description,
        alternates: { canonical: `/services/${slug}` },
        openGraph: {
            title,
            description,
            url: `/services/${slug}`,
            images: [{ url: ogImage.src, width: 1200, height: 630, alt: ogImage.alt }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage.src],
        },
    };
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = content.services.find((s) => s.slug === slug);
    const serviceImages = images.services.find((s) => s.slug === slug);

    if (!service || !serviceImages) {
        notFound();
    }

    return (
        <>
            <ServiceHero service={service} image={serviceImages.detailHeroImage} />
            <ServiceProblemSolution service={service} />
            <ServiceChecklist service={service} />
            <ServiceGallery images={serviceImages.gallery} />
            <OtherServices currentSlug={service.slug} />
            <CtaBanner
                eyebrow="Ready When You Are"
                heading={`Ready to Get Your ${service.shortTitle} Handled?`}
                subheading="Tell us about your property and we'll give you a clear, honest estimate."
                ctaLabel={service.ctaLabel}
                variant="gold"
                showContact
            />
        </>
    );
}