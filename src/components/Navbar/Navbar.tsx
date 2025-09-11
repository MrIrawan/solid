import Link from "next/link"
import { Separator } from "../ui/separator"

export default function Navbar() {
    return (
        <>
            <header className="w-full h-16 bg-custom-base">
                <nav className="container mx-auto h-full flex items-center justify-between bg-custom-base">
                    <div className="w-fit">
                        <p className="text-custom-primary font-alternate-bold text-3xl">solid</p>
                    </div>
                    <div className="w-4/5">
                        <ul className="w-full flex items-center justify-center gap-6">
                            <li>
                                <Link href={"#about"}>
                                    <p className="font-main-medium text-base">about us</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={"#about"}>
                                    <p className="font-main-medium text-base">services</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={"#about"}>
                                    <p className="font-main-medium text-base">solutions</p>
                                </Link>
                            </li>
                            <li>
                                <Link href={"#about"}>
                                    <p className="font-main-medium text-base">products</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-fit">
                        <div className="w-fit px-6 py-2.5 bg-custom-secondary rounded-full">
                            <p className="text-custom-primary font-main-semibold">contact us</p>
                        </div>
                    </div>
                </nav>
                <Separator orientation="horizontal"/>
            </header>
        </>
    )
}