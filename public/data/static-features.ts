import { staticFeaturesData } from "@/types/types";

export function staticFeatures(): staticFeaturesData[] {
    return [
        {
            id: 1,
            title: "End-to-End Digital Support",
            description: "We cover everything from digital strategy to execution. With Solid Consult and Solid Build, you get a complete journey from planning to launch without juggling multiple vendors.",
            icon: "ClockFadingIcon"
        },
        {
            id: 2,
            title: "Fast & Flexible Delivery",
            description: "Our process prioritizes speed and adaptability. Whether you need a quick launch or a scalable long-term plan, Solid delivers on time.",
            icon: "ZapIcon"
        },
        {
            id: 3,
            title: "Custom-Tailored Solutions",
            description: "Every business is unique. We design and build digital solutions that fit your exact needs, not cookie-cutter templates.",
            icon: "BlocksIcon"
        },
        {
            id: 4,
            title: "Bridge for Non-Tech Entrepreneurs",
            description: "We simplify technology for you. Focus on your business goals while we handle the technical heavy lifting.",
            icon: "WaypointsIcon"
        },
    ]
}