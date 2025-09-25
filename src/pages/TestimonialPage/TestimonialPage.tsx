import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import { testimonialData } from "../../../public/data/static-testimonial";

export default function TestimonialPage() {
  return (
    <section className="w-full h-fit">
      <div className="w-full container mx-auto flex flex-col gap-20 px-3">
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="w-fit px-6 py-2 bg-custom-accent rounded-full text-custom-accent-foreground font-main-semibold">
            <p>our testimonnials that make us more trusted</p>
          </div>
          <h2 className="text-4xl font-alternate-bold text-center">
            give it a try, we promise you won't regret it
          </h2>
          <p className="font-main-medium text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam nemo
            nulla dignissimos, qui enim ad?
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-7 flex flex-col gap-5 border border-custom-accent/20 hover:shadow-xl transition duration-200 h-full"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  className="w-14 h-14 rounded-full ring-2 ring-custom-accent-foreground"
                  width={50}
                  height={50}
                />
                <div>
                  <p className="font-main-semibold text-lg text-black">
                    {item.name}
                  </p>
                  <span className="text-sm text-gray-500 font-main-medium">
                    {item.role}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill={i < item.stars ? "#FFD700" : "#E5E7EB"}
                    className="w-5 h-5"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                  </svg>
                ))}
              </div>
              <p className="text-black font-main-medium text-base">
                "{item.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
