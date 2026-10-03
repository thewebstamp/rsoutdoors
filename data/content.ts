// ============================================================================
// content.ts
// ============================================================================

import type { SiteContent } from "./types";

const content: SiteContent = {
    // --------------------------------------------------------------------
    // SITE-WIDE
    // --------------------------------------------------------------------
    site: {
        businessName: "R & S Outdoors",
        tagline: "Virginia Beach's Trusted Outdoor Property Experts",
        phone: "757-282-3823",
        email: "rmchopper9@gmail.com",
        address: "3452 Old Carolina Rd, Virginia Beach, VA 23457",
        serviceArea: "Virginia Beach, VA and surrounding areas",
    },

    nav: {
        links: [
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "About", href: "/about" },
            { label: "Gallery", href: "/gallery" },
            { label: "Contact", href: "/contact" },
        ],
        ctaLabel: "Get a Free Estimate",
    },

    footer: {
        blurb:
            "R & S Outdoors keeps Virginia Beach properties clear, drained, and ready for every season — backed by real equipment and a neighbor-first attitude.",
        ctaLabel: "Request Your Estimate",
        copyrightName: "R & S Outdoors",
    },

    // --------------------------------------------------------------------
    // HOME PAGE
    // --------------------------------------------------------------------
    home: {
        hero: {
            eyebrow: "Virginia Beach Outdoor Property Specialists",
            headline: "Your Property, Finally Handled Right",
            subheadline:
                "Standing water, overgrown trees, leaf-covered lawns, or snow-buried driveways — we clear it, fix it, and leave it looking its best.",
            ctaPrimary: "Get Your Free Estimate",
            ctaSecondary: "See Our Work",
        },

        painPoints: {
            heading: "You Shouldn't Have to Fight Your Own Yard",
            subheading:
                "If any of this sounds like your property, you're in the right place.",
            items: [
                {
                    title: "\u201cWater keeps pooling in my yard.\u201d",
                    response:
                        "We regrade your property so water flows away from your home for good.",
                },
                {
                    title: "\u201cThat tree or stump has to go.\u201d",
                    response:
                        "We remove it safely, roots and all, and haul everything away.",
                },
                {
                    title: "\u201cMy lot is overgrown and unusable.\u201d",
                    response:
                        "We clear it fast and leave you a clean slate, ready for what's next.",
                },
                {
                    title: "\u201cLeaves are burying my yard.\u201d",
                    response:
                        "We clear it all and mulch your beds, so your yard looks sharp again.",
                },
                {
                    title: "\u201cMy lawn looks thin and tired.\u201d",
                    response:
                        "Power raking lets it breathe again, so it grows back thick and healthy.",
                },
                {
                    title: "\u201cSnow has me stuck at home.\u201d",
                    response:
                        "We clear your driveway and walkways fast, so you can get on with your day.",
                },
            ],
        },

        workBreak: {
            caption: "Real crews. Real equipment. Real results.",
        },

        workBreakTwo: {
            caption: "Properties handled right, every season.",
        },

        servicesPreview: {
            heading: "Full-Service Outdoor Care, One Trusted Team",
            subheading:
                "From the ground up and through every season, we cover it all.",
            ctaLabel: "View All Services",
        },

        whyUs: {
            heading: "Why Virginia Beach Homeowners Choose R & S Outdoors",
            items: [
                {
                    title: "Real Equipment, Real Capability",
                    description:
                        "Our tractor equipment handles the larger, tougher jobs that smaller crews simply can't take on — so your project gets done completely, not partially.",
                },
                {
                    title: "A Neighbor-First Reputation",
                    description:
                        "We've helped neighbors with equipment access at no charge when we could. That's the same care and honesty you get as a customer, every time.",
                },
                {
                    title: "Year-Round Reliability",
                    description:
                        "Spring drainage, summer clearing, fall cleanup, winter snow — we're not a seasonal contractor who disappears. We're here for your property all year.",
                },
                {
                    title: "We Get It Done Right, Guaranteed",
                    description:
                        "No half-finished jobs, no corners cut. You get a property that's genuinely handled — the way you wanted it done in the first place.",
                },
            ],
        },

        reviews: {
            heading: "What Virginia Beach Homeowners Are Saying",
            subheading:
                "We let the results speak — here's what it's like to actually work with us.",
            items: [
                {
                    quote:
                        "Water had been pooling by our foundation for two years. R & S came out, regraded the whole side yard, and it's never happened again. Wish we'd called them sooner.",
                    name: "Homeowner",
                    location: "Virginia Beach, VA",
                    service: "Drainage & Grading",
                },
                {
                    quote:
                        "They removed three dead trees and the stumps in a single day. No mess left behind, no damage to the lawn. Genuinely impressive equipment and crew.",
                    name: "Homeowner",
                    location: "Virginia Beach, VA",
                    service: "Tree & Stump Removal",
                },
                {
                    quote:
                        "Called them the morning after a big snowfall and they had our driveway clear before noon. That kind of reliability is rare.",
                    name: "Homeowner",
                    location: "Virginia Beach, VA",
                    service: "Snow Removal",
                },
                {
                    quote:
                        "Fall cleanup used to take us an entire weekend. R & S had our whole property cleared and mulched in an afternoon. Yard looked better than it has in years.",
                    name: "Homeowner",
                    location: "Virginia Beach, VA",
                    service: "Fall Cleanup & Mulching",
                },
            ],
        },

        midCta: {
            heading: "Ready to See the Difference?",
            subheading:
                "Join the Virginia Beach homeowners who've stopped fighting their properties and started enjoying them.",
            ctaLabel: "Get Your Free Estimate",
        },

        featuredWork: {
            heading: "Recent Work Around Virginia Beach",
            subheading:
                "A few properties we've recently helped transform.",
            items: [
                {
                    title: "Full Yard Drainage Correction",
                    description:
                        "Regraded a persistent low spot that had been pooling water against a home's foundation for years.",
                    serviceSlug: "drainage-grading",
                },
                {
                    title: "Multi-Tree Removal & Stump Grinding",
                    description:
                        "Cleared three large dead trees and ground the stumps flush, reclaiming usable yard space.",
                    serviceSlug: "tree-stump-removal",
                },
                {
                    title: "Overgrown Lot Clearing",
                    description:
                        "Cleared brush and unwanted vegetation from a neglected lot, preparing it for new landscaping.",
                    serviceSlug: "land-property-clearing",
                },
                {
                    title: "Same-Day Snow Response",
                    description:
                        "Cleared a full driveway and walkway within hours of a major snowfall.",
                    serviceSlug: "snow-removal",
                },
            ],
            galleryCtaLabel: "View Full Gallery",
        },

        faq: {
            heading: "Frequently Asked Questions",
            subheading: "Straight answers to what most homeowners want to know.",
            items: [
                {
                    question: "What areas do you serve?",
                    answer:
                        "We're based in Virginia Beach, VA and serve homeowners and property owners throughout Virginia Beach and the surrounding areas.",
                },
                {
                    question: "How quickly can you get to my property?",
                    answer:
                        "It depends on the season and job type, but we move fast — especially for time-sensitive needs like snow removal. Reach out and we'll give you a clear timeline upfront.",
                },
                {
                    question: "Do you provide free estimates?",
                    answer:
                        "Yes. Every project starts with a free, honest estimate — no pressure, no hidden costs, no obligation to move forward.",
                },
                {
                    question: "Can you handle larger or more difficult properties?",
                    answer:
                        "Yes — our tractor equipment is built for exactly that. We regularly take on larger jobs that smaller crews aren't equipped to handle.",
                },
                {
                    question: "Do you offer snow removal on a seasonal contract, or per-visit?",
                    answer:
                        "We can work with you either way — reach out and we'll figure out what makes sense for your property and the winter ahead.",
                },
            ],
        },

        finalCta: {
            heading: "Let's Get Your Property Handled",
            subheading:
                "Tell us what you're dealing with and we'll give you a clear, honest estimate — no pressure, no surprises.",
            ctaLabel: "Request Your Free Estimate",
        },
    },

    // --------------------------------------------------------------------
    // SERVICES — OVERVIEW PAGE
    // --------------------------------------------------------------------
    servicesOverview: {
        hero: {
            eyebrow: "What We Do",
            headline: "Everything Your Property Needs, Handled by One Team",
            subheadline:
                "No juggling multiple contractors. We cover drainage, clearing, cleanup, and snow — all with the same standard of care.",
        },
        intro:
            "Every service below solves a real, specific problem property owners face in Virginia Beach. Let us know what applies to you, or reach out and we'll help you figure out exactly what your property needs.",
        ctaLabel: "Get a Free Estimate",
        workBreak: {
            caption: "Equipped for jobs of every size.",
        },
        howItWorks: {
            heading: "How It Works",
            subheading: "Simple from the first call to the finished job.",
            steps: [
                {
                    title: "Reach Out",
                    description:
                        "Call, text, or send a message telling us what's going on with your property.",
                },
                {
                    title: "Free Estimate",
                    description:
                        "We take a look and give you a clear, honest estimate — no pressure, no obligation.",
                },
                {
                    title: "We Get to Work",
                    description:
                        "Once you're ready, we show up with the right equipment and get the job done right.",
                },
                {
                    title: "Enjoy the Results",
                    description:
                        "Your property is finally handled — and we're here again whenever you need us.",
                },
            ],
        },
        finalCta: {
            heading: "Not Sure Which Service You Need?",
            subheading:
                "Tell us what's going on and we'll help you figure out the right fix — no pressure, no obligation.",
        },
    },

    // --------------------------------------------------------------------
    // INDIVIDUAL SERVICE PAGES
    // --------------------------------------------------------------------
    services: [
        {
            slug: "drainage-grading",
            shortTitle: "Drainage & Grading",
            heroHeadline: "Stop Fighting Water That Shouldn't Be There",
            painPoint:
                "Standing water, soggy patches, and water creeping toward your foundation aren't just annoying — they're a sign your property isn't shedding water the way it should, and it only gets worse with time.",
            promise:
                "We regrade and redirect water flow so it moves away from your home and problem areas for good. The result: a healthier lawn, a protected foundation, and one less thing to worry about every time it rains.",
            whatWeDo: [
                "On-site assessment of water flow and problem areas",
                "Regrading to correct slope and drainage direction",
                "Drainage solutions tailored to your property's layout",
                "Long-term fixes, not temporary patches",
            ],
            ctaLabel: "Get a Drainage Estimate",
        },
        {
            slug: "tree-stump-removal",
            shortTitle: "Tree & Stump Removal",
            heroHeadline: "That Tree or Stump Doesn't Have to Be Your Problem Anymore",
            painPoint:
                "Whether it's a dead tree that's become a hazard, an overgrown shrub taking over your yard, or a stump you're tired of mowing around, removing it safely takes equipment most homeowners simply don't have.",
            promise:
                "We remove trees, stumps, and unwanted shrubs safely and completely — no hidden roots left behind, no property damage, no risk to you. Just a clear, usable space when we're done.",
            whatWeDo: [
                "Safe removal of trees of all sizes",
                "Full stump removal and grinding",
                "Unwanted shrub and vegetation removal",
                "Complete debris haul-away",
            ],
            ctaLabel: "Get a Tree Removal Estimate",
        },
        {
            slug: "land-property-clearing",
            shortTitle: "Land & Property Clearing",
            heroHeadline: "Turn an Overgrown Lot Into Usable Space",
            painPoint:
                "Overgrown trees, brush, and vegetation can make a property feel unusable — and stand in the way of landscaping, construction, or simply enjoying your own land.",
            promise:
                "We clear your property completely and efficiently, giving you a clean slate ready for whatever comes next — landscaping, building, or just breathing room.",
            whatWeDo: [
                "Clearing of unwanted trees, brush, and shrubs",
                "Preparation for landscaping or construction projects",
                "Full-property or targeted-area clearing",
                "Equipment capable of larger, tougher lots",
            ],
            ctaLabel: "Get a Clearing Estimate",
        },
        {
            slug: "fall-cleanup-mulching",
            shortTitle: "Fall Cleanup & Mulching",
            heroHeadline: "Fall Cleanup, Handled Before It Piles Up",
            painPoint:
                "Leaves, fallen branches, and seasonal debris build up fast every fall — and it can feel like a losing battle to keep up with a rake alone.",
            promise:
                "We clear your property completely and mulch your beds properly, so your yard looks intentional and cared for all season — without eating up every one of your weekends.",
            whatWeDo: [
                "Full leaf and debris removal",
                "Bed mulching for a clean, finished look",
                "Seasonal cleanup scheduling",
                "Haul-away of all cleared material",
            ],
            ctaLabel: "Get a Fall Cleanup Estimate",
        },
        {
            slug: "power-raking",
            shortTitle: "Power Raking",
            heroHeadline: "A Healthier Lawn Starts Underneath the Surface",
            painPoint:
                "Thatch and debris buildup can choke your lawn from below, even when the surface looks fine — leaving grass thin, patchy, or slow to green up.",
            promise:
                "Power raking clears out what's suffocating your lawn, opening it back up to air, water, and nutrients — so it can actually thrive.",
            whatWeDo: [
                "Thorough power raking to remove thatch and debris",
                "Improved lawn health and appearance",
                "Ideal seasonal timing guidance",
                "Clean, complete debris removal after the job",
            ],
            ctaLabel: "Get a Power Raking Estimate",
        },
        {
            slug: "snow-removal",
            shortTitle: "Snow Removal",
            heroHeadline: "Never Get Stuck Waiting on Winter",
            painPoint:
                "A snow-covered driveway or walkway isn't just inconvenient — it's a safety risk for you, your family, and anyone visiting your property.",
            promise:
                "We clear your property quickly and reliably when winter weather hits, so you can get on with your day instead of digging out.",
            whatWeDo: [
                "Prompt snow clearing for driveways and walkways",
                "Reliable service when weather hits",
                "Equipment suited for larger properties",
                "Safe, accessible property access all winter",
            ],
            ctaLabel: "Get a Snow Removal Estimate",
        },
    ],

    // --------------------------------------------------------------------
    // ABOUT PAGE
    // --------------------------------------------------------------------
    about: {
        hero: {
            eyebrow: "Who We Are",
            headline: "Built on Hard Work and Helping Neighbors",
            subheadline:
                "A local team with real equipment, straight answers, and a neighbor-first attitude toward every property we touch.",
        },
        story:
            "R & S Outdoors was built to give Virginia Beach homeowners a single, dependable team for the outdoor work that matters most — drainage, clearing, seasonal cleanup, and snow removal. With real tractor equipment behind us, we take on the larger jobs that smaller crews turn away, and we've never been afraid to lend a hand to a neighbor when they needed it, sometimes without charging a dime. That same mindset — do it right, help where you can — is what every customer gets when they work with us.",
        values: {
            heading: "What You Can Expect From Us",
            items: [
                {
                    title: "Reliability",
                    description: "We show up, we finish the job, and we do it well.",
                },
                {
                    title: "Honesty",
                    description:
                        "Clear estimates and straight answers — no surprise costs, no runaround.",
                },
                {
                    title: "Community",
                    description:
                        "We treat every property like it belongs to a neighbor, because in Virginia Beach, it often does.",
                },
            ],
        },
        ctaLabel: "Work With Us",
        workBreak: {
            caption: "The same crew, every time you call.",
        },
        finalCta: {
            heading: "Ready to Work With a Team You Can Trust?",
            subheading:
                "Tell us what your property needs and we'll give you a clear, honest estimate.",
        },
    },

    // --------------------------------------------------------------------
    // GALLERY PAGE
    // --------------------------------------------------------------------
    gallery: {
        hero: {
            eyebrow: "Our Work",
            headline: "See the Difference for Yourself",
            subheadline:
                "A look at real drainage fixes, clearing jobs, cleanups, and more from around Virginia Beach.",
        },
        emptyStateNote:
            "Gallery images to be added — see images.ts for where project photos should be placed.",
        ctaLabel: "Get a Project Like This",
        finalCta: {
            heading: "Like What You See?",
            subheading:
                "Tell us about your property and let's get your project started.",
        },
    },

    // --------------------------------------------------------------------
    // CONTACT PAGE
    // --------------------------------------------------------------------
    contact: {
        hero: {
            eyebrow: "Get In Touch",
            headline: "Let's Talk About Your Property",
            subheadline:
                "Call, text, or email us directly — we'll get back to you with a clear, honest estimate. No pressure, no obligation.",
        },
        directInfo: {
            heading: "Reach Us Directly",
            phoneLabel: "Call or Text",
            emailLabel: "Email",
            addressLabel: "Visit Us",
        },
        mapCtaLabel: "Get Directions",
    },
};

export default content;