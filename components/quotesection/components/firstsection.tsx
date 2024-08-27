import { Button } from "@/components/ui/button";
import { CircleCheck, BadgeAlert } from "lucide-react";

const FirstSection = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Title and Subtitle */}
      <div className="text-center md:text-left">
        <p className="text-base  mb-4">
          Improving The Performance Of Solar Energy.
        </p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Discover Independence
          <br />
          Through Using The Power
          <br />
          Of Solar Panels!
        </h1>
      </div>

      {/* Description */}
      <div className="text-center md:text-left">
        <p className=" ">
          We offer products, solutions, and services across the entire energy
          <br />
          value chain. We support our customers on their way to a more <br />
          sustainable future – no matter how far along the journey to <br />
          energize society with affordable energy systems.
        </p>
      </div>

      {/* List of Benefits */}
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Efficient",
            "Cost-effective",
            "Reliable",
            "Environmentally friendly",
            "50% more energy output",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <CircleCheck
                size={18}
                className="text-green-500 bg-gray-800 rounded-full p-1"
              />
              <span className=" ">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action Button */}
      <div className="text-center md:text-left">
        <Button className="bg-white text-black px-6 py-3 rounded-lg border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300">
          Learn More
        </Button>
      </div>
      {/* botton side */}
      <div className=" flex items-center gap-2">
        <BadgeAlert size={44} color="white" className="text-green-500" />
        <span>
          Receive an accurate quote within 3-5 days when you fill out <br/> this form.
          Or, give us a call: <span className=" underline hover:no-underline hover:text-green-500">(224) 956391</span>
        </span>
      </div>
    </div>
  );
};

export default FirstSection;
