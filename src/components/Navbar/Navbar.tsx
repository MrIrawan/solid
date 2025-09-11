"use client"

import { useState } from "react"

import Link from "next/link"

import { Separator } from "../ui/separator"
import { MenuIcon, XIcon } from "lucide-react"

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <header className="w-full bg-custom-base h-14 px-2.5">
                <nav className="w-full h-full flex items-center justify-between lg:container lg:mx-auto">
                    <h2 className="text-3xl font-alternate-bold text-custom-primary">solid</h2>
                    {
                        open
                        ? <XIcon className="w-7 h-7 text-black cursor-pointer md:hidden" onClick={() => setOpen(false)}/>
                        : <MenuIcon className="w-6 h-6 text-black cursor-pointer md:hidden" onClick={() => setOpen(true)}/>
                    }
                    <ul className="hidden md:flex items-center gap-3">
                        <li className="px-4">
                            <Link href={"#about"}>
                                <p className="text-lg font-main-semibold text-black">about us</p>
                            </Link>
                        </li>
                        <li className="px-4">
                            <Link href={"/solutions"}>
                                <p className="text-lg font-main-semibold text-black">get solutions</p>
                            </Link>
                        </li>
                        <li className="px-4">
                            <Link href={"/products"}>
                                <p className="text-lg font-main-semibold text-black">our products</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Separator orientation="horizontal"/>
            <div className={`absolute top-0 -translate-y-full w-full h-72 bg-custom-base p-3 flex flex-col items-center justify-between transition-all duration-500 ${open ? "top-14.5 translate-y-0" : ""} md:hidden`}>
                <div className="w-full h-full">
                    <ul className="w-full h-full flex flex-col items-start gap-3">
                        <li>
                            <Link href={"#about"}>
                                <p className="text-base font-main-medium capitalize">about us</p>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/solutions"}>
                                <p className="text-base font-main-medium capitalize">get solutions</p>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/products"}>
                                <p className="text-base font-main-medium capitalize">our products</p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="w-full pb-3">
                    <Link href={"/contact-us"}>
                        <button className="w-full bg-custom-accent rounded-full py-2">
                            <p className="text-lg font-main-semibold text-custom-primary">contact us now</p>
                        </button>
                    </Link>
                </div>
                <Separator orientation="horizontal"/>
            </div>
        </>
    )
}