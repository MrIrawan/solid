import { staticFeatures } from "../../../public/data/static-features";

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription, CardAction } from "@/components/ui/card";

import * as LucideIcons from "lucide-react";

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
                        const Icon = (LucideIcons as any)[feature.icon];
                        return(
                            <Card className="w-full flex flex-col hover:shadow-xl transition-all duration-200 ease-in-out group" key={index}>
                                <CardHeader className="flex items-center justify-between">
                                    <div className="w-16 h-16 rounded-full bg-custom-accent flex items-center justify-center p-3">
                                        { Icon && <Icon className="w-14 h-14 text-custom-primary" /> }
                                    </div>
                                    <LucideIcons.ArrowUpRightIcon className="w-6 h-6 text-custom-base transition-all duration-200 ease-in-out group-hover:text-custom-primary" />
                                </CardHeader>
                                <CardContent>
                                    <CardTitle className="text-2xl font-main-bold text-black">{feature.title}</CardTitle>
                                    <CardDescription className="text-base font-main-medium">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="w-full mt-auto flex items-center gap-1.5 flex-wrap">
                                    <span className="px-4 py-0.5 border rounded-sm">
                                        <p className="text-xs font-main-medium">active customer service</p>
                                    </span>
                                    <span className="px-4 py-0.5 border rounded-sm">
                                        <p className="text-xs font-main-medium">active customer service</p>
                                    </span>
                                    <span className="px-4 py-0.5 border rounded-sm">
                                        <p className="text-xs font-main-medium">active customer service</p>
                                    </span>
                                    <span className="px-4 py-0.5 border rounded-sm">
                                        <p className="text-xs font-main-medium">customer</p>
                                    </span>
                                    <span className="px-4 py-0.5 border rounded-sm">
                                        <p className="text-xs font-main-medium">active customer service</p>
                                    </span>
                                    <span className="px-4 py-0.5 border rounded-sm">
                                        <p className="text-xs font-main-medium">active customer service</p>
                                    </span>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}