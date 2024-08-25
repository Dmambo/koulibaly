"use client"

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

const Middle = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById("middle-section")?.offsetTop || 0;

      if (position >= elementPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="middle-section" className="flex flex-col md:flex-row mt-20 gap-20">
      <div>
        <Image src="/earth.png" alt="Solar Panel" width={825} height={1220} />
      </div>
      <div>
        {/* Upper Section */}
        <div>
          <div className="flex gap-2 items-center mb-10">
            <h1 className="text-3xl text-green-500">
              {isVisible && <CountUp end={6154} duration={2} />}
            </h1>
            <span className="italic font-bold mt-2 text-white">Projects</span>
          </div>
          <p className="text-sm">
            Yet those that embrace change are
            <br />
            thriving, building bigger, better, faster,
            <br />
            and stronger products than ever.
          </p>
        </div>
        <Separator className="w-24 my-5 items-center" />
        {/* Lower Section */}
        <div>
          <div className="flex gap-2 items-center mb-10">
            <h1 className="text-3xl text-green-500">
              {isVisible && <CountUp end={2512} duration={2} />}
            </h1>
            <span className="italic font-bold mt-2 text-white">Employees</span>
          </div>
          <p className="text-sm">
            Yet those that embrace change are
            <br />
            thriving, building bigger, better, faster,
            <br />
            and stronger products than ever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Middle;
