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
        <section className="w-full h-screen">
            <div className="container mx-auto flex flex-col gap-10 px-3">
                <div className="flex flex-col gap-4 items-center">
                    <p className="text-base font-main-semibold text-custom-primary w-fit px-6 py-1.5 rounded-full bg-custom-accent">our core feature's that you should know</p>
                    <h2 className="text-4xl font-alternate-bold max-w-lg text-center">everything your team needs to work smarter</h2>
                    <p className="text-base font-main-medium max-w-xl text-center">our's service have a many impact on your team's and don't worry we here to help if your team don't understand</p>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:w-2/3 lg:mx-auto lg:hidden">
                    {staticFeatures().map((feature, index) => (
                        <article 
                            className="w-full ring ring-custom-accent h-96 rounded-xl flex flex-col overflow-hidden relative group"
                            key={index}
                        >
                            <div className="w-full h-1/2 overflow-hidden">
                                <Image 
                                    src={feature.image}
                                    alt="image-123"
                                    width={400}
                                    height={400}
                                    className="bg-center object-cover w-full h-full"
                                />
                            </div>
                            <Separator />
                            <div className="w-full h-1/2 flex flex-col gap-1.5 p-3">
                                <h2 className="text-2xl font-main-bold text-black">{feature.title}</h2>
                                <p className="text-base font-main-medium">
                                    {feature.description}
                                </p>
                            </div>
                            <div className="w-full flex justify-end absolute bottom-0 p-1.5 translate-y-full opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                                <Link href={""} className="w-fit flex items-center">
                                    <Button 
                                        className="w-fit px-6 py-1.5 bg-custom-accent-foreground rounded-full"
                                        size={"sm"}
                                    >
                                        <p className="text-base font-main-semibold text-custom-base">read more</p>
                                    </Button>
                                    <span className="w-9 h-9 rounded-full bg-custom-accent-foreground flex items-center justify-center">
                                        <ArrowUpRightIcon className="w-7 h-7 text-custom-base"/>
                                    </span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
                <Carousel className="hidden w-full bg-red-300 lg:block">
                    <CarouselContent className="w-1/2">
                        {staticFeatures().map((feature, index) => (
                            <CarouselItem key={index}>
                                <Card className="w-full h-full">
                                    <CardHeader className="w-full h-1/2 bg-red-500 overflow-hidden">
                                        <Image 
                                            src={feature.image}
                                            alt={`image-${index}`}
                                            width={500}
                                            height={500}
                                            className="w-full h-full object-cover"
                                        />
                                    </CardHeader>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}