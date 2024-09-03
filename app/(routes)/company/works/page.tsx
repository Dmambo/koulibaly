"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn, IconBoxAlignRightFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Works = () => {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const StepOne = () => (
  <motion.div className="flex flex-col items-center space-y-4">
    <Image
      src="https://images.unsplash.com/photo-1581091870685-1bfc0ab48f65"
      alt="Requirement Gathering"
      width={400}
      height={250}
      className="rounded-lg"
    />
    <p className="text-center text-sm text-neutral-500">
      Understand the problem and gather requirements.
    </p>
  </motion.div>
);

const StepTwo = () => (
  <motion.div className="flex flex-col items-center space-y-4">
    <Image
      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
      alt="Planning and Design"
      width={400}
      height={250}
      className="rounded-lg"
    />
    <p className="text-center text-sm text-neutral-500">
      Create a plan and design the solution.
    </p>
  </motion.div>
);

const StepThree = () => (
  <motion.div className="flex flex-col items-center space-y-4">
    <Image
      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      alt="Development"
      width={400}
      height={250}
      className="rounded-lg"
    />
    <p className="text-center text-sm text-neutral-500">
      Develop and implement the solution.
    </p>
  </motion.div>
);

const StepFour = () => (
  <motion.div className="flex flex-col items-center space-y-4">
    <Image
      src="https://images.unsplash.com/photo-1600291111082-053ced21da30"
      alt="Testing and Deployment"
      width={400}
      height={250}
      className="rounded-lg"
    />
    <p className="text-center text-sm text-neutral-500">
      Test, refine, and deploy the solution.
    </p>
  </motion.div>
);

const StepFive = () => (
  <motion.div className="flex flex-col items-center space-y-4">
    <Image
      src="https://images.unsplash.com/photo-1581091012184-cf9140c0bb39"
      alt="Support and Iteration"
      width={400}
      height={250}
      className="rounded-lg"
    />
    <p className="text-center text-sm text-neutral-500">
      Monitor, support, and iterate.
    </p>
  </motion.div>
);

const items = [
  {
    title: "Step 1: Requirement Gathering",
    description: (
      <span className="text-sm">
        We start by understanding your needs and gathering all necessary information.
      </span>
    ),
    header: <StepOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Step 2: Planning & Design",
    description: (
      <span className="text-sm">
        Our team creates a detailed plan and designs the solution.
      </span>
    ),
    header: <StepTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Step 3: Development",
    description: (
      <span className="text-sm">
        The solution is developed using the best practices and technologies.
      </span>
    ),
    header: <StepThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Step 4: Testing & Deployment",
    description: (
      <span className="text-sm">
        Rigorous testing is done to ensure the quality before deployment.
      </span>
    ),
    header: <StepFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Step 5: Support & Iteration",
    description: (
      <span className="text-sm">
        We provide ongoing support and continuous improvements.
      </span>
    ),
    header: <StepFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

export default Works;
