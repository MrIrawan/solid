import { staticFeaturesData } from "@/types/types";

import featureImage1 from "../../public/images/End-to-End Digital Support.jpg";
import featureImage2 from "../../public/images/Fast & Flexible Delivery.jpg";
import featureImage3 from "../../public/images/Custom-Tailored Solutions.jpg";
import featureImage4 from "../../public/images/Bridge for Non-Tech Entrepreneurs.jpg";

export function staticFeatures(): staticFeaturesData[] {
    return [
        {
            id: 1,
            title: "End-to-End Digital Support",
            description: "We cover everything from digital strategy to execution. With Solid Consult and Solid Build, you get a complete journey from planning to launch without juggling multiple vendors.",
            image: featureImage1.src
        },
        {
            id: 2,
            title: "Fast & Flexible Delivery",
            description: "Our process prioritizes speed and adaptability. Whether you need a quick launch or a scalable long-term plan, Solid delivers on time.",
            image: featureImage2.src
        },
        {
            id: 3,
            title: "Custom-Tailored Solutions",
            description: "Every business is unique. We design and build digital solutions that fit your exact needs, not cookie-cutter templates.",
            image: featureImage3.src
        },
        {
            id: 4,
            title: "Bridge for Non-Tech Entrepreneurs",
            description: "We simplify technology for you. Focus on your business goals while we handle the technical heavy lifting.",
            image: featureImage4.src
        },
    ]
}