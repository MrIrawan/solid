import { Separator } from "@/components/ui/separator"

export default function SolutionsPage() {
    return (
        <>
            <section className="h-screen w-full flex items-center justify-center">
                <Separator orientation="vertical"/>
                    <div className="container h-full mx-0 flex justify-center items-center">
                        <div className="w-full h-1/2"></div>
                        <Separator />
                        <div className="w-full h-1/2"></div>
                    </div>
                <Separator orientation="vertical"/>
        </section>
        </>
    )
}