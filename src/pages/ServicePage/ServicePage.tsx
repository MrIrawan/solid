import { staticFeatures } from "../../../public/data/static-features";

import FeatureCard from "@/components/FeatureCard/FeatureCard";

export default function ServicePage() {
    return (
        <section className="w-full h-fit py-10">
            <div className="container mx-auto flex flex-col gap-10 px-3">
                <div className="flex flex-col gap-4 items-center">
                    <p className="text-base font-main-semibold text-custom-primary w-fit px-6 py-1.5 rounded-full bg-custom-accent">our core feature's that you should know</p>
                    <h2 className="text-4xl font-alternate-bold max-w-lg text-center">Core Features That Power Your Digital Growth</h2>
                    <p className="text-base font-main-medium max-w-xl text-center">Discover what makes Solid different — fast, flexible, and custom-tailored digital solutions designed for every business scale.</p>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 w-full lg:mx-auto">
                    {staticFeatures().map((feature, index) => {
                        return(
                            <FeatureCard key={index} data={feature} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}