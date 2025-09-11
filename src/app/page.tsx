import Link from "next/link"

import { Separator } from "@/components/ui/separator"

import { GitMergeIcon, MoveRightIcon } from "lucide-react"

export default function Home() {
    return (
        <>
            <section className="w-full h-screen lg:flex lg:items-center lg:justify-center">
                <Separator orientation="vertical" className="hidden lg:block"/>
                <div className="container mx-auto h-full bg-custom-base flex flex-col items-center justify-center lg:justify-start lg:mx-0">
                    <Separator orientation="horizontal"/>
                    <div className="w-full h-1/2 bg-custom-base flex flex-col items-center justify-center gap-6 px-6">
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
                    <Separator orientation="horizontal"/>
                    <div className="hidden w-full h-1/2 lg:flex bg-custom-base p-6 items-center justify-between gap-6">
                        <div className="w-1/2 h-full rounded-xl ring-2 ring-custom-accent bg-linear-45 from-custom-base to-custom-secondary"></div>
                        <div className="w-1/2 h-full rounded-xl ring-2 ring-custom-accent bg-linear-45 from-custom-base to-custom-secondary"></div>
                    </div>
                </div>
                <Separator orientation="vertical" className="hidden lg:block"/>
            </section>
            <section className="w-full h-36 flex flex-col items-center justify-between">
                <Separator orientation="horizontal"/>
                <Separator orientation="horizontal"/>
            </section>
            <section className="h-screen w-full flex items-center justify-center">
                <Separator orientation="vertical"/>
                <div className="container h-full flex flex-col items-center justify-center">
                    <div className="w-full h-1/2 bg-custom-base flex items-center justify-between">
                        <div className="w-1/2 h-full"></div>
                        <div className="w-1/2 h-full"></div>
                    </div>
                    <Separator />
                    <div className="w-full h-1/2 bg-custom-base"></div>
                </div>
                <Separator orientation="vertical"/>
            </section>
        </>
    )
}