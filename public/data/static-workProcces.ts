import { staticWorkProccessData } from "@/types/types";

import Image1 from "../../public/images/Consult Experts.svg"
import Image2 from "../../public/images/Conversation Businessman Customer 1.svg"
import Image3 from "../../public/images/Problem Solving 3.svg"
import Image4 from "../../public/images/Marketer Giving A Key Note 5.svg"
import Image5 from "../../public/images/Evaluate Performance Employee 3.svg"

export const staticData: staticWorkProccessData[] = [
    {
        id: 1,
        title: "Discovery & Consultation",
        description: "We begin by understanding your business goals, challenges, and opportunities in the digital space.",
        image: Image1.src,
        gridClassname: "col-span-4 row-span-3 ring ring-accent",
        titleClassname: "text-2xl font-main-bold capitalize",
        numberClassname: "font-alternate-bold text-6xl text-custom-accent-foreground"
    },
    {
        id: 2,
        title: "Strategy Design",
        description: "We develop a clear, tailored strategy and roadmap for your digital solution.",
        image: Image2.src,
        gridClassname: "col-span-2 row-span-3 col-start-5 ring ring-accent h-96 flex flex-col",
        titleClassname: "text-lg font-main-bold capitalize",
        numberClassname: "font-alternate-bold text-2xl text-custom-accent-foreground"
    },
    {
        id: 3,
        title: "Implementation",
        description: "Our team executes the plan — deploying technology, building assets, and integrating systems seamlessly.",
        image: Image3.src,
        gridClassname: "col-span-2 row-span-3 row-start-4 ring ring-accent h-96 flex flex-col",
        titleClassname: "text-lg font-main-bold capitalize",
        numberClassname: "font-alternate-bold text-2xl text-custom-accent-foreground"
    },
    {
        id: 4,
        title: "Optimization",
        description: "We review performance, fine-tune your digital tools, and ensure everything delivers maximum value.",
        image: Image4.src,
        gridClassname: "col-span-2 row-span-3 col-start-3 row-start-4 ring ring-accent h-96 flex felx-col",
        titleClassname: "text-lg font-main-bold capitalize",
        numberClassname: "font-alternate-bold text-2xl text-custom-accent-foreground"
    },
    {
        id: 5,
        title: "Support & Growth",
        description: "We provide ongoing support and fresh ideas to keep your business ahead in the digital era.",
        image: Image5.src,
        gridClassname: "col-span-2 row-span-3 col-start-5 row-start-4 ring ring-accent h-96 flex felx-col",
        titleClassname: "text-lg font-main-bold capitalize",
        numberClassname: "font-alternate-bold text-2xl text-custom-accent-foreground"
    },
]