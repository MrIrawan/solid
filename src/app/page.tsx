import HomePage from "@/pages/HomePage/HomePage"
import AboutPage from "@/pages/AboutPage/AboutPage"
import CoreFeaturePage from "@/pages/coreFeature/coreFeaturePage"
import WorkflowPage from "@/pages/WorkflowPage/WorkflowPage"
import TestimonialPage from "@/pages/TestimonialPage/TestimonialPage"

export default function Home() {
    return (
        <>
            <HomePage />
            <AboutPage />
            <CoreFeaturePage />
            <WorkflowPage />
            <TestimonialPage />
        </>
    )
}