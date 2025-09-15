import Link from "next/link"
import Image from "next/image"

import AboutPageImage from "../../../public/images/Software Development.svg"

export default function AboutPage() {
    return (
        <section className="w-full py-60">
            <div className="container mx-auto flex flex-col gap-6 md:flex-row lg:gap-0 lg:justify-between">
                <div className="w-full flex flex-col items-center gap-4 px-4 md:w-1/2 md:items-start">
                    <div className="w-fit px-6 py-1 rounded-full bg-custom-accent">
                        <p className="text-base font-main-semibold text-custom-accent-foreground">learn about solid and what makes us different</p>
                    </div>
                    <h2 className="text-4xl font-alternate-bold leading-normal text-center md:text-left">Your Bridge from Ideas to Digital Reality.</h2>
                    <div className="flex flex-col gap-2 mt-6 lg:mt-0">
                        <h3 className="text-lg font-main-bold">what are we?</h3>
                        <p className="text-base font-main-medium text-justify">
                            Solid is your digital partner in planning and realizing a modern, ready-to-use digital foundation. We combine software, hardware, and strategy to ensure your business stands strong in the digital world.
                        </p>
                        <h3 className="text-lg font-main-bold">what focuses us?</h3>
                        <p className="text-base font-main-medium text-justify">
                            We focus on speed, satisfaction, and customization. With our 'pay as you want' and 'ready-to-use digital solutions' systems, you only pay for what you need, receive ready-made digital solutions, and manage them effortlessly.
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center gap-4 px-4 md:w-1/2">
                    <Image 
                        src={AboutPageImage}
                        alt="about page image"
                        width={600}
                        height={600}
                    />
                </div>
            </div>
        </section>
    )
}