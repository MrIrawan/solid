import Link from "next/link"

export default function HomePage() {
    return (
        <section className="w-full h-screen">
            <div className="container mx-auto w-full h-full flex justify-center items-center">
                <div className="w-full flex items-center justify-center">
                    <div className="w-full flex flex-col items-center justify-center gap-6 px-3">
                        <p className="w-fit bg-custom-accent px-6 py-2 rounded-full text-custom-accent-foreground font-main-semibold">fast, flexible, and secure digital solutions</p>
                        <h2 className="font-alternate-bold text-4xl text-center">with solid plans, comes solid results</h2>
                        <p className="font-main-medium text-center">
                            With Solid you can build your business's digital foundation
                            fast, flexible, and secure so you can focus on what matters most: growing your business.
                        </p>
                        <div className="flex items-center justify-center gap-2.5">
                            <Link href={"/booking"}>
                                <button className="w-fit px-6 py-2 rounded-full bg-custom-accent-foreground text-white font-main-medium">
                                    free consultation
                                </button>
                            </Link>
                            <Link href={"/#core-features"}>
                                <button className="w-fit px-6 py-2 rounded-full bg-custom-accent text-custom-accent-foreground font-main-medium">
                                    see our services
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}