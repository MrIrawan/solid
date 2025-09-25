import Link from "next/link";
import Image from "next/image";
import Meeting2 from "../../../public/images/Remote meeting-rafiki.svg"
import Startegy from "../../../public/images/strategy.svg"

import { ArrowUpRightIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function WorkflowPage() {
  return (
    <section className="w-full h-fit py-60">
      <div className="container mx-auto flex flex-col gap-20">
        <div className="flex flex-col gap-4 items-center">
          <p className="w-fit px-6 py-1.5 bg-custom-accent rounded-full text-custom-accent-foreground font-main-semibold lg:py-2">
            how solid brings your ideas to life
          </p>
          <h2 className="text-4xl font-alternate-bold text-black text-center lg:max-w-3xl">
            Our Proven Process to Build Your Digital Foundation
          </h2>
          <p className="text-base font-main-medium max-w-xl text-center">
            We make going digital simple. From first talk to final handover, our
            process is clear, fast, and built around your needs.
          </p>
        </div>

        <div className="grid grid-cols-6 grid-rows-6 gap-4">
          <div className="col-span-4 row-span-3 ring ring-accent flex items-center justify-between h-96">
            <div className="w-1/2 bg-custom-accent h-full flex items-center">
              <div className="flex flex-col gap-3 px-6">
                <h2 className="font-alternate-bold text-6xl text-custom-accent-foreground">01</h2>
                <h3 className="text-2xl font-main-bold capitalize">consultation & initial meeting</h3>
                <p className="text-base font-main-medium capitalize">Let’s talk about your goals. We listen, understand your needs, and map out what digital solution fits your business best.</p>
                <div className="w-full">
                  <Link href={"/booking"} className="w-full flex items-center gap-0 group">
                    <button className="py-2 px-6 rounded-full bg-foreground transition-all duration-200 ease group-hover:bg-custom-accent">
                      <p className="text-base font-main-medium text-custom-base transition-all duration-200 ease-in-out group-hover:text-custom-accent-foreground">book a free consultation</p>
                    </button>
                    <button className="p-2.5 rounded-full bg-foreground transition-all duration-200 ease group-hover:bg-custom-accent">
                      <ArrowUpRightIcon className="w-5 h-5 text-white transition-all duration-200 ease-in-out group-hover:rotate-45 group-hover:text-custom-accent-foreground"/>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <Separator orientation="vertical" className="bg-accent"/>
            <div className="w-1/2 h-full flex items-start justify-center">
                <Image 
                    src={Meeting2}
                    alt="meeting image"
                    width={490}
                    height={490}
                    className="w-full h-full object-cover"
                />
            </div>
          </div>
          <div className="col-span-2 row-span-3 col-start-5 ring ring-accent h-96">2</div>
          <div className="col-span-2 row-span-3 row-start-4 ring ring-accent h-96">3</div>
          <div className="col-span-2 row-span-3 col-start-3 row-start-4 ring ring-accent h-96">4</div>
          <div className="col-span-2 row-span-3 col-start-5 row-start-4 ring ring-accent h-96">5</div>
        </div>
      </div>
    </section>
  );
}
