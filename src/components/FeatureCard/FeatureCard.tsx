import * as LucideIcons from "lucide-react";
import { staticFeaturesData } from "@/types/types";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";

interface FeaturedCardProps {
  data: staticFeaturesData;
}

export default function FeatureCard({ data }: FeaturedCardProps) {
  const Icon = (LucideIcons as any)[data.icon];
  return (
    <>
      {data && (
        <Card
          className="w-full flex flex-col hover:shadow-xl transition-all duration-200 ease-in-out group"
          key={data.id}
        >
          <CardHeader className="flex items-center justify-between">
            <div className="w-16 h-16 rounded-full bg-custom-accent flex items-center justify-center p-3">
              {Icon && <Icon className="w-14 h-14 text-custom-primary" />}
            </div>
            <LucideIcons.ArrowUpRightIcon className="w-6 h-6 text-custom-base transition-all duration-200 ease-in-out group-hover:text-custom-primary" />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl font-main-bold text-black">
              {data.title}
            </CardTitle>
            <CardDescription className="text-base font-main-medium">
              {data.description}
            </CardDescription>
          </CardContent>
          <CardFooter className="w-full mt-auto flex items-center gap-1.5 flex-wrap">
            <span className="px-4 py-0.5 border rounded-sm">
              <p className="text-xs font-main-medium">
                active customer service
              </p>
            </span>
            <span className="px-4 py-0.5 border rounded-sm">
              <p className="text-xs font-main-medium">
                active customer service
              </p>
            </span>
            <span className="px-4 py-0.5 border rounded-sm">
              <p className="text-xs font-main-medium">
                active customer service
              </p>
            </span>
            <span className="px-4 py-0.5 border rounded-sm">
              <p className="text-xs font-main-medium">customer</p>
            </span>
            <span className="px-4 py-0.5 border rounded-sm">
              <p className="text-xs font-main-medium">
                active customer service
              </p>
            </span>
            <span className="px-4 py-0.5 border rounded-sm">
              <p className="text-xs font-main-medium">
                active customer service
              </p>
            </span>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
