// ============================================================================
// types.ts
// Shared TypeScript types for content.ts and images.ts.
// Keeping these separate means both data files can be swapped for a new
// business while the type contracts (and therefore the page components)
// stay exactly the same.
// ============================================================================

export interface PainPoint {
    title: string;
    response: string;
}

export interface WhyUsItem {
    title: string;
    description: string;
}

export interface ServiceContent {
    slug: string;
    shortTitle: string;
    heroHeadline: string;
    painPoint: string;
    promise: string;
    whatWeDo: string[];
    ctaLabel: string;
}

export interface ValueItem {
    title: string;
    description: string;
}

export interface NavLink {
    label: string;
    href: string;
}

export interface ReviewItem {
    quote: string;
    name: string;
    location: string;
    service: string;
}

export interface FeaturedWorkItem {
    title: string;
    description: string;
    serviceSlug: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface SiteContent {
    site: {
        businessName: string;
        tagline: string;
        phone: string;
        email: string;
        address: string;
        serviceArea: string;
    };
    nav: {
        links: NavLink[];
        ctaLabel: string;
    };
    footer: {
        blurb: string;
        ctaLabel: string;
        copyrightName: string;
    };
    home: {
        hero: {
            eyebrow: string;
            headline: string;
            subheadline: string;
            ctaPrimary: string;
            ctaSecondary: string;
        };
        painPoints: {
            heading: string;
            subheading: string;
            items: PainPoint[];
        };
        servicesPreview: {
            heading: string;
            subheading: string;
            ctaLabel: string;
        };
        workBreak: {
            caption: string;
        };
        workBreakTwo: {
            caption: string;
        };
        whyUs: {
            heading: string;
            items: WhyUsItem[];
        };
        reviews: {
            heading: string;
            subheading: string;
            items: ReviewItem[];
        };
        midCta: {
            heading: string;
            subheading: string;
            ctaLabel: string;
        };
        featuredWork: {
            heading: string;
            subheading: string;
            items: FeaturedWorkItem[];
            galleryCtaLabel: string;
        };
        faq: {
            heading: string;
            subheading: string;
            items: FaqItem[];
        };
        finalCta: {
            heading: string;
            subheading: string;
            ctaLabel: string;
        };
    };
    servicesOverview: {
        hero: {
            eyebrow: string;
            headline: string;
            subheadline: string;
        };
        intro: string;
        ctaLabel: string;
        workBreak: {
            caption: string;
        };
        howItWorks: {
            heading: string;
            subheading: string;
            steps: { title: string; description: string }[];
        };
        finalCta: {
            heading: string;
            subheading: string;
        };
    };
    services: ServiceContent[];
    about: {
        hero: { eyebrow: string; headline: string; subheadline: string };
        story: string;
        values: {
            heading: string;
            items: ValueItem[];
        };
        ctaLabel: string;
        workBreak: {
            caption: string;
        };
        finalCta: {
            heading: string;
            subheading: string;
        };
    };
    gallery: {
        hero: {
            eyebrow: string;
            headline: string;
            subheadline: string;
        };
        emptyStateNote: string;
        ctaLabel: string;
        finalCta: {
            heading: string;
            subheading: string;
        };
    };
    contact: {
        hero: {
            eyebrow: string;
            headline: string;
            subheadline: string;
        };
        directInfo: {
            heading: string;
            phoneLabel: string;
            emailLabel: string;
            addressLabel: string;
        };
        mapCtaLabel: string;
    };
}

// --- Images ---

export interface ImageAsset {
    src: string;
    alt: string;
}

export interface ServiceImages {
    slug: string;
    heroImage: ImageAsset;
    // Used only on this service's own detail-page hero — keep it visually
    // distinct from heroImage, which appears on the Home/Services cards.
    detailHeroImage: ImageAsset;
    gallery: ImageAsset[];
}

export interface GalleryImage {
    src: string;
    alt: string;
    category: string;
}

export interface SiteImages {
    logo: ImageAsset;
    favicon: string;
    home: {
        heroImage: ImageAsset;
        workBreakImage: ImageAsset;
        workBreakImageTwo: ImageAsset;
        featuredWork: ImageAsset[];
    };
    services: ServiceImages[];
    servicesOverview: {
        workBreakImage: ImageAsset;
    };
    about: {
        heroImage: ImageAsset;
        teamImage: ImageAsset;
        workBreakImage: ImageAsset;
    };
    gallery: {
        heroImage: ImageAsset;
        items: GalleryImage[];
    };
    contact: {
        heroImage: ImageAsset;
    };
}