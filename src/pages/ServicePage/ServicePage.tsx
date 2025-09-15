import Image from "next/image";
import { staticFeatures } from "../../../public/data/static-features";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription, CardAction } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import { ArrowUpRightIcon, ZapIcon } from "lucide-react";
import { UnplugIcon } from "lucide-react";
import Link from "next/link";

export default function ServicePage() {
    return (
        <section className="w-full h-fit py-10">
            <div className="container mx-auto flex flex-col gap-10 px-3">
                <div className="flex flex-col gap-4 items-center">
                    <p className="text-base font-main-semibold text-custom-primary w-fit px-6 py-1.5 rounded-full bg-custom-accent">our core feature's that you should know</p>
                    <h2 className="text-4xl font-alternate-bold max-w-lg text-center">everything your team needs to work smarter</h2>
                    <p className="text-base font-main-medium max-w-xl text-center">our's service have a many impact on your team's and don't worry we here to help if your team don't understand</p>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 w-full lg:mx-auto">
                    {staticFeatures().map((feature, index) => (
                        <Card className="w-full hover:shadow-xl transition-all duration-200 ease-in-out" key={index}>
                            <CardHeader>
                                <div className="w-16 h-16 rounded-full bg-custom-accent flex items-center justify-center p-3">
                                    <ZapIcon className="w-14 h-14 text-custom-accent-foreground"/>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <CardTitle className="text-2xl font-main-bold text-black">{feature.title}</CardTitle>
                                <CardDescription className="text-base font-main-medium">
                                    {feature.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}