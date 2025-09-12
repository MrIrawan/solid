import Link from "next/link"

import { Separator } from "@/components/ui/separator"

import Image from "next/image"
import AboutSectionImage from "../../public/images/Software Development.svg"

export default function Home() {
    return (
        <>
            <section className="w-full h-screen bg-pattern">
                <div className="container mx-auto h-full">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-6 px-6">
                        <div className="w-fit px-6 py-1 bg-[#DBEAFE] rounded-full lg:py-2.5">
                            <p className="text-base text-[#155DFC] font-main-semibold">fast, flexible, and ready-to-use digital solutions</p>
                        </div>
                        <div className="w-full">
                            <h2 className="text-4xl font-alternate-bold text-center lg:text-5xl">with solid plans, comes solid results.</h2>
                        </div>
                        <div className="w-full">
                            <h4 
                                className="text-lg font-main-medium text-center max-w-4xl mx-auto"
                            >
                                With Solid you can build your business's digital foundation —
                                fast, flexible, and secure — so you can focus on what matters most: growing your business.
                            </h4>
                        </div>
                        <div className="w-full flex items-center justify-center gap-3">
                            <Link href={"/solutions"} className="rounded-full ring-2 ring-[#155DFC] px-6 py-1.5 bg-[#155DFC] font-main-semibold text-white lg:py-2.5 lg:px-7">
                                get started
                            </Link>
                            <Link href={"/solutions"} className="rounded-full ring-2 ring-[#DBEAFE] px-6 py-1.5 bg-[#DBEAFE] font-main-semibold text-[#155DFC] lg:py-2.5 lg:px-7">
                                learn about us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full h-screen my-36" id="about">
                <div className="container mx-auto h-full flex flex-col justify-center items-center">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-6 lg:h-1/2 lg:flex-row">
                        <div className="w-full h-full flex flex-col gap-4 px-3 lg:px-0">
                            <div className="w-fit px-6 py-1.5 rounded-full bg-custom-accent">
                                <p className="text-base font-main-medium text-custom-primary">let's learn about solid</p>
                            </div>
                            <h2 className="text-4xl font-main-bold text-black">Your Bridge from Ideas to Digital Reality.</h2>
                            <div className="w-full flex flex-col justify-center gap-4">
                                <p className="text-base font-main-medium">
                                    Solid is a digital solutions company that helps businesses
                                    transform their ideas into ready-to-use digital foundations.
                                    We bridge the gap between non-technical entrepreneurs and the
                                    fast-moving world of technology.
                                </p>
                                <p className="text-base font-main-medium">
                                    With <Link href={"/solid/consult"} className="font-main-semibold hover:underline">Solid Consult</Link>, we guide you through digital 
                                    strategy, technology planning, and brand positioning—so
                                    you know exactly where to go and how to get there.
                                </p>
                                <p className="text-base font-main-medium">
                                    With <Link href={"solid/build"} className="font-main-semibold hover:underline">Solid Build</Link>, we bring those plans to life by creating
                                    customized, fast, and modern digital infrastructures—whether 
                                    it's a website, an application, a network, or a complete system.
                                </p>
                                <p className="text-base font-main-medium">
                                    Our mission is simple: to make digital transformation <span className="font-main-semibold">faster, easier, and more accessible.</span>
                                    We focus on speed, customization, affordability, and a true plug-and-play experience—so
                                    you can focus on running your business while we handle the technical side.
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-full relative">
                            <Image 
                                src={AboutSectionImage}
                                alt="man-smile-image"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="hidden w-full h-1/2 bg-custom-base lg:block"></div>
                </div>
            </section>
        </>
    )
}