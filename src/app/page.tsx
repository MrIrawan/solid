import Link from "next/link"

export default function Home() {
    return (
        <>
            <section className="w-full h-screen">
                <div className="container mx-auto h-full bg-gray-300 flex items-center">
                    <div className="w-full h-1/2 bg-white flex flex-col items-center justify-center gap-6 px-6">
                        <div className="w-fit px-6 py-1 bg-[#DBEAFE] rounded-full">
                            <p className="text-base text-[#155DFC] font-main-semibold">fast, flexible, and ready-to-use digital solutions</p>
                        </div>
                        <div className="w-full">
                            <h2 className="text-4xl font-alternate-bold text-center">with solid plans, comes solid results.</h2>
                        </div>
                        <div className="w-full">
                            <h4 className="text-lg font-main-medium text-center">with us you can make your digital foundation for your business, fast, modern, and secure.</h4>
                        </div>
                        <div className="w-full flex items-center justify-center gap-3">
                            <Link href={"/solutions"} className="rounded-full ring-2 ring-[#155DFC] px-6 py-1.5 bg-[#155DFC] font-main-semibold text-white">
                                get started
                            </Link>
                            <Link href={"/solutions"} className="rounded-full ring-2 ring-[#DBEAFE] px-6 py-1.5 bg-[#DBEAFE] font-main-semibold text-[#155DFC]">
                                learn about us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}