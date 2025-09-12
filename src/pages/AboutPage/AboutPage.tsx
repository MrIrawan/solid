import Link from "next/link"
import Image from "next/image"

import AboutPageImage from "../../../public/images/Software Development.svg"

export default function AboutPage() {
    return (
        <section className="w-full h-screen my-28" id="about">
            <div className="container mx-auto h-full">
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-1/2 h-1/2 flex flex-col gap-6">
                        <h3 className="text-custom-primary text-2xl font-main-semibold">let's learn about solid</h3>
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
                    <div className="w-1/2 h-1/2">
                        <Image 
                            src={AboutPageImage}
                            alt="about page image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}