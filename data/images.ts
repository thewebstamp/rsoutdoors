// ============================================================================
// images.ts
// ============================================================================

import type { SiteImages } from "./types";

const images: SiteImages = {
    logo: {
        src: "/images/logo.png",
        alt: "R & S Outdoors logo",
    },
    favicon: "/favicon.ico",

    home: {
        heroImage: {
            src: "/images/home-hero.png",
            alt: "R & S Outdoors equipment working on a Virginia Beach property",
        },
        workBreakImage: {
            src: "/images/rsob.jpg",
            alt: "The R & S Outdoors crew at work on a Virginia Beach property",
        },
        // TODO: rename to match whatever file you add for the second divider
        // (placed after Why Us, before Reviews).
        workBreakImageTwo: {
            src: "/images/brk2.jpg",
            alt: "R & S Outdoors equipment completing a project in Virginia Beach",
        },
        // Four images for the Featured Work gallery wall on Home — keep these
        // DIFFERENT from the hero/service/divider photos used elsewhere so the
        // section doesn't repeat imagery already seen on the page.
        featuredWork: [
            {
                src: "/images/nage.jpg",
                alt: "Completed drainage correction on a Virginia Beach property",
            },
            {
                src: "/images/tre.jpg",
                alt: "Multi-tree removal and stump grinding project",
            },
            {
                src: "/images/lot.jpg",
                alt: "Overgrown lot cleared and ready for landscaping",
            },
            {
                src: "/images/fll.jpg",
                alt: "Tree Removal",
            },
        ],
    },

    services: [
        {
            slug: "drainage-grading",
            heroImage: {
                src: "/images/drainagel.png",
                alt: "Drainage and grading work in progress",
            },
            detailHeroImage: {
                src: "/images/d1.png",
                alt: "Wide view of a drainage and grading project in Virginia Beach",
            },
            gallery: [
                {
                    src: "/images/services/drainage-grading-1.jpg",
                    alt: "Before and after drainage correction",
                },
                {
                    src: "/images/services/drainage-grading-2.jpg",
                    alt: "Regrading equipment on site",
                },
            ],
        },
        {
            slug: "tree-stump-removal",
            heroImage: {
                src: "/images/tr.jpg",
                alt: "Tree removal in progress",
            },
            detailHeroImage: {
                src: "/images/tr.jpg",
                alt: "Wide view of a tree and stump removal project in Virginia Beach",
            },
            gallery: [
                {
                    src: "/images/services/tree-stump-removal-1.jpg",
                    alt: "Stump removal and grinding",
                },
                {
                    src: "/images/services/tree-stump-removal-2.jpg",
                    alt: "Cleared area after tree removal",
                },
            ],
        },
        {
            slug: "land-property-clearing",
            heroImage: {
                src: "/images/lc.jpg",
                alt: "Land clearing equipment at work",
            },
            detailHeroImage: {
                src: "/images/lc.jpg",
                alt: "Wide view of a land clearing project in Virginia Beach",
            },
            gallery: [
                {
                    src: "/images/services/land-clearing-1.jpg",
                    alt: "Overgrown lot before clearing",
                },
                {
                    src: "/images/services/land-clearing-2.jpg",
                    alt: "Cleared lot ready for next steps",
                },
            ],
        },
        {
            slug: "fall-cleanup-mulching",
            heroImage: {
                src: "/images/m.jpg",
                alt: "Fall leaf cleanup in progress",
            },
            detailHeroImage: {
                src: "/images/f1.png",
                alt: "Wide view of a fall cleanup and mulching project in Virginia Beach",
            },
            gallery: [
                {
                    src: "/images/services/fall-cleanup-1.jpg",
                    alt: "Freshly mulched garden bed",
                },
                {
                    src: "/images/services/fall-cleanup-2.jpg",
                    alt: "Cleared yard after fall cleanup",
                },
            ],
        },
        {
            slug: "power-raking",
            heroImage: {
                src: "/images/powerra.png",
                alt: "Power raking equipment on a lawn",
            },
            detailHeroImage: {
                src: "/images/powerra.png",
                alt: "Wide view of a power raking project in Virginia Beach",
            },
            gallery: [
                {
                    src: "/images/services/power-raking-1.jpg",
                    alt: "Lawn before power raking",
                },
                {
                    src: "/images/services/power-raking-2.jpg",
                    alt: "Healthy lawn after power raking",
                },
            ],
        },
        {
            slug: "snow-removal",
            heroImage: {
                src: "/images/snowr.png",
                alt: "Snow removal equipment clearing a driveway",
            },
            detailHeroImage: {
                src: "/images/snowr.png",
                alt: "Wide view of a snow removal project in Virginia Beach",
            },
            gallery: [
                {
                    src: "/images/services/snow-removal-1.jpg",
                    alt: "Driveway before snow removal",
                },
                {
                    src: "/images/services/snow-removal-2.jpg",
                    alt: "Clear, accessible driveway after snow removal",
                },
            ],
        },
    ],

    servicesOverview: {
        workBreakImage: {
            src: "/images/brk3.jpg",
            alt: "R & S Outdoors equipment ready for a job in Virginia Beach",
        },
    },

    about: {
        heroImage: {
            src: "/images/abt2.jpg",
            alt: "R & S Outdoors team and equipment",
        },
        teamImage: {
            src: "/images/abt.jpg",
            alt: "R & S Outdoors team on a job site",
        },
        workBreakImage: {
            src: "/images/abt1.jpg",
            alt: "The R & S Outdoors crew and equipment on a Virginia Beach property",
        },
    },

    gallery: {
        heroImage: {
            src: "/images/gallery-hero.jpg",
            alt: "Collage of completed R & S Outdoors projects",
        },
        items: [
            {
                src: "/images/nage.jpg",
                alt: "Completed project photo 1",
                category: "drainage-grading",
            },
            {
                src: "/images/tr.jpg",
                alt: "Completed project photo 2",
                category: "tree-stump-removal",
            },
            {
                src: "/images/lot.jpg",
                alt: "Completed project photo 3",
                category: "land-property-clearing",
            },
            {
                src: "/images/m.jpg",
                alt: "Completed project photo 4",
                category: "fall-cleanup-mulching",
            },
            {
                src: "/images/powerra.png",
                alt: "Completed project photo 5",
                category: "power-raking",
            },
            {
                src: "/images/snowr.png",
                alt: "Completed project photo 6",
                category: "snow-removal",
            },
        ],
    },

    contact: {
        heroImage: {
            src: "/images/contact-hero.jpg",
            alt: "R & S Outdoors work truck and equipment",
        },
    },
};

export default images;