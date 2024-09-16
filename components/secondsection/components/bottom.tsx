/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Bottom = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between text-white text-sm p-4 md:p-8 md:gap-28">
      {/* Text Section */}
      <div className="relative z-10 md:w-1/2 flex flex-col items-start bg-black bg-opacity-50 p-4 rounded-lg md:bg-transparent md:p-0">
        <h4 className="mb-4">
          Vous avez des questions ou besoin d'assistance ? Notre équipe est là pour vous aider. Contactez-nous à tout moment ou appelez-nous au{" "}
          <span className="text-blue-500">(224) 613956391</span>.
        </h4>
        <Link href="#quote">
          <Button className="bg-transparent text-white border border-white hover:bg-white hover:text-black transition">
            Consultation gratuite <ArrowRightIcon className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="absolute top-0 right-0 bottom-0 left-0 md:relative md:w-1/2 md:top-auto md:right-auto md:bottom-auto md:left-auto">
        <Image
          src="/bottom.jpg"
          width={720}
          height={600}
          alt="bottom"
          className="relative rounded-2xl object-cover w-full h-full"
        />
        <span className="absolute bottom-2 p-2 hidden md:block">
          <Link href="https://www.youtube.com/watch?v=_Exyh_T07aY" target="_blank">
            <Button variant={"destructive"}>Regardez-nous sur YouTube</Button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Bottom;
