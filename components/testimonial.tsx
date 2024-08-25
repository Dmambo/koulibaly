"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimony() {
  return (
    <div className="h-[30rem]  flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className=" text-green-500 text-sm py-7">
            <p>Hear what people say about us</p>
        </div>
        <div>
            <h1 className=" text-xl md:text-3xl text-white mb-5">
                Let's hear from our satisfied <br/>customers and partners.
            </h1>
        </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
      name: "Marie L.",
      quote: "The solar panel installation was smooth and efficient. Our electricity bills have drastically reduced, and we’re thrilled with the service!",
      title: "Homeowner",
    },
    {
      name: "Ahmed T.",
      quote: "Our company’s wind turbine setup was handled with great professionalism. The team provided excellent support throughout the process.",
      title: "Business Owner",
    },
    {
      name: "Sophie K.",
      quote: "The hydropower plant maintenance team was incredibly knowledgeable. They ensured everything was running smoothly. Highly recommend!",
      title: "Plant Manager",
    },
    {
      name: "Jean M.",
      quote: "Amazing service! The team’s expertise in renewable energy is unmatched. We’re seeing significant savings and a positive environmental impact.",
      title: "CEO, GreenTech Corp",
    },
    {
      name: "Laura R.",
      quote: "The consultation process was seamless. They provided clear, actionable advice that helped us make the best decisions for our project.",
      title: "Project Coordinator",
    },
  ];
  
