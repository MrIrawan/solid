import Image from "next/image";
// import ServiceImageMeeting from "../../../public/images/service-image-1.jpg"
// import ServiceImageSupport from "../../../public/images/service-image-2.jpg"

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { ArrowUpRightIcon, ZapIcon } from "lucide-react";
import { UnplugIcon } from "lucide-react";
import Link from "next/link";

export default function ServicePage() {
    return (
        <section className="w-full h-screen py-16">
            <div className="container mx-auto flex flex-col gap-10 px-3">
                <div className="flex flex-col gap-4 items-center">
                    <p className="text-base font-main-semibold text-custom-primary w-fit px-6 py-1.5 rounded-full bg-custom-accent">our core feature's that you should know</p>
                    <h2 className="text-4xl font-alternate-bold max-w-lg text-center">everything your team needs to work smarter</h2>
                    <p className="text-base font-main-medium max-w-xl text-center">our's service have a many impact on your team's and don't worry we here to help if your team don't understand</p>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:w-2/3 lg:mx-auto">
                    <article className="w-full ring ring-custom-accent h-96 rounded-xl flex flex-col overflow-hidden">
                        <div className="w-full h-1/2 overflow-hidden">
                            <Image 
                                src={""}
                                alt="image-123"
                            />
                        </div>
                        <Separator />
                        <div className="w-full h-1/2 flex flex-col gap-1.5 p-3">
                            <h2 className="text-2xl font-main-bold text-black">End-toEnd Digital Support</h2>
                            <p className="text-base font-main-medium">
                                We cover everything from digital strategy to execution. With Solid Consult and Solid Build, you get a complete journey from planning to launch without juggling multiple vendors.
                            </p>
                        </div>
                    </article>
                    <article className="w-full ring ring-custom-accent h-96 rounded-xl flex flex-col overflow-hidden">
                        <div className="w-full h-1/2 overflow-hidden p-3">
                            <div className="w-14 h-14 bg-custom-accent rounded-full flex items-center justify-center">
                                <ZapIcon className="w-10 h-10 text-custom-primary"/>
                            </div>
                        </div>
                        <Separator />
                        <div className="w-full h-1/2 flex flex-col gap-1.5 p-3">
                            <h2 className="text-2xl font-main-bold text-black">Fast & Flexible Delivery</h2>
                            <p className="text-base font-main-medium">
                                Our process prioritizes speed and adaptability. Whether you need a quick launch or a scalable long-term plan, Solid delivers on time.
                            </p>
                        </div>
                    </article>
                    <article className="w-full ring ring-custom-accent h-96 rounded-xl flex flex-col overflow-hidden">
                        <div className="w-full h-1/2 overflow-hidden">
                            <Image 
                                src={""}
                                alt="image-123"
                            />
                        </div>
                        <Separator />
                        <div className="w-full h-1/2 flex flex-col gap-1.5 p-3">
                            <h2 className="text-2xl font-main-bold text-black">End-toEnd Digital Support</h2>
                            <p className="text-base font-main-medium">
                                We cover everything from digital strategy to execution. With Solid Consult and Solid Build, you get a complete journey from planning to launch without juggling multiple vendors.
                            </p>
                        </div>
                    </article>
                    <article className="w-full ring ring-custom-accent h-96 rounded-xl flex flex-col overflow-hidden relative group">
                        <div className="w-full h-1/2 overflow-hidden">
                            <Image 
                                src={""}
                                alt="image-123"
                            />
                        </div>
                        <Separator />
                        <div className="w-full h-1/2 flex flex-col gap-1.5 p-3">
                            <h2 className="text-2xl font-main-bold text-black">End-toEnd Digital Support</h2>
                            <p className="text-base font-main-medium">
                                We cover everything from digital strategy to execution. With Solid Consult and Solid Build, you get a complete journey from planning to launch without juggling multiple vendors.
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
                </div>
            </div>
        </section>
    )
}