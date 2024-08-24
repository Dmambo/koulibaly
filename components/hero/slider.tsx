"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import Card3d from "../3dcard";
import Image from "next/image";
import Link from "next/link";

export function Slider() {
  const images = [
    "https://images.pexels.com/photos/8853510/pexels-photo-8853510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/15751131/pexels-photo-15751131/free-photo-of-solar-panels-on-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9799715/pexels-photo-9799715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <ImagesSlider className="h-screen md:h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50"
      >
        <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-10 py-10 md:ml-20 gap-35 md:gap-80">
          {/* Text Section */}
          <div className="text-left md:w-1/2">
            <motion.p className="font-bold text-2xl sm:text-3xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 py-4">
              Énergiser la société <br /> en utilisant l&apos;énergie durable
            </motion.p>
            <p className="text-neutral-300 mt-4">
              Nous fournissons les meilleures solutions énergétiques durables
              pour alimenter votre maison, bureau et communauté.
            </p>
            <div className="flex gap-10 p-5">
              {/* Icon 1 */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
              >
                <Image src="/icon.png" alt="icon" width="50" height="50" />
              </motion.div>

              {/* Icon 2 */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
              >
                <Image src="/icon2.png" alt="icon" width="50" height="50" />
              </motion.div>

              {/* Icon 3 */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
              >
                <Image src="/icon3.png" alt="icon" width="50" height="50" />
              </motion.div>
            </div>
         <Link href="/services" className="mt-5">
         <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto md:mx-0 text-center rounded-full relative mt-4 hover:bg-green-400">
              <span>Notre service →</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
            </Link>
          </div>

          {/* 3D Card Section */}
          <div className="hidden md:flex justify-center mt-8 md:mt-0 md:w-1/2">
            <Card3d />
          </div>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
