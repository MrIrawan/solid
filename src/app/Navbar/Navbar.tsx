import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
    NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import Image from "next/image"

import solidLogo from "../../../public/images/solid-logo.png"
import {Button} from "@/components/ui/button";

export default function Navbar() {
    return (
        <header className={"w-full h-[80px] flex items-center justify-around"}>
            <div className={"w-fit"}>
                <Image
                    src={solidLogo}
                    width={50}
                    height={50}
                    alt={"Solid Logo"}
                />
            </div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href={"#about us"} className={"text-lg font-semibold"}>about us</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href={"/solved-problem"} className={"text-lg font-semibold"}>what we solve</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                       <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                           <Link href={"/solutions"} className={"text-lg font-semibold"}>get solutions</Link>
                       </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <div className={"w-fit"}>
                <Link href={"/contact"}>
                    <Button className={"rounded-full px-6 py-2.5 bg-linear-to-r/oklch from-[#7ed957] to-[#00bf36]"}>
                        <p className={"text-base text-[#1e1e1e]"}>contact us</p>
                    </Button>
                </Link>
            </div>
        </header>
    )
}