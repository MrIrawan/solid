import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SearchIcon } from "lucide-react"
import Link from "next/link"

export default function SolutionsPage() {
    return (
        <>
            <section className="h-screen w-full flex items-center justify-center">
                <Separator orientation="vertical"/>
                    <div className="container mx-0 h-full flex flex-col items-center justify-center">
                        <div className="w-full h-1/2 bg-custom-base">
                            <div className="w-full h-full flex flex-col items-center justify-center gap-6 px-6">
                                <button className="w-fit bg-custom-accent px-6 py-2.5 rounded-full">
                                    <p className="text-base font-main-semibold text-custom-primary">well designed for your business</p>
                                </button>
                                <h2 className="text-4xl font-alternate-bold">have a digital problem? we have a digital solution!</h2>
                                <p className="text-lg font-main-semibold max-w-xl text-center">solid have a many digital solutions that help you to grow your business. scroll and see it all</p>
                                <div className="w-2/5 flex items-center justify-center gap-3">
                                    <Input 
                                        type="search"
                                        placeholder="browse our solutions"
                                        className="w-full px-6 py-2.5 rounded-full font-main-semibold text-black ring-2 ring-custom-accent"
                                    />
                                    <Button 
                                        className="px-6 py-2.5 rounded-full bg-custom-accent"
                                        size={"lg"}
                                    >
                                        <SearchIcon className="w-6 h-6 text-custom-primary"/>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <Separator orientation="horizontal"/>
                        <div className="w-full h-1/2 bg-custom-base"></div>
                    </div>
                <Separator orientation="vertical"/>
        </section>
        </>
    )
}