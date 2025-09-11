import { Separator } from "@/components/ui/separator"

export default function SolutionsPageLayout({
    children
} : Readonly<{
    children: React.ReactNode
}>) {
    return (
        <section className="h-screen w-full flex items-center justify-center">
            <Separator orientation="vertical"/>
            <div className="container h-full mx-0">
                {children}
            </div>
            <Separator orientation="vertical"/>
        </section>
    )
}