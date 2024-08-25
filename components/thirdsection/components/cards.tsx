import { Button } from "@/components/ui/button";
import { Sun, Wind, Droplet, CircleCheckBig } from "lucide-react";

const Cards = () => {
    const items = [
        {
            icon: Sun,
            title: "Solar Panels Services",
            desc: "The great thing about solar panels is that they can be installed on any roof. We offer a wide range of solar panels for sale and installation.",
            list: [
                "Cleaning of Inverter",
                "Perform Shading Tests",
                "90 day repairs warranty"
            ],
        },
        {
            icon: Wind,
            title: "Wind Turbines Services",
            desc: "Wind turbines are a great way to generate electricity. We offer a wide range of wind turbines for sale and installation.",
            list: [
                "Proactive is better",
                "Lower costs for you",
                "Maintenance warranty"
            ],
        },
        {
            icon: Droplet,
            title: "Hydropower Plants Services",
            desc: "Hydropower systems are capital intensive assets that can produce significant income for decades provided they are operated and maintained to a high standard.",
            list: [
                "Optimizations of assets",
                "Operation & maintenance",
                "Digitalization & automation"
            ],
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, index) => (
                <div 
                    key={index} 
                    className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white transform transition-transform hover:scale-105 hover:shadow-xl group"
                >
                    <div className="flex items-center mb-4">
                        <item.icon 
                            className="w-8 h-8 text-green-500 mr-4 transition-transform transform group-hover:rotate-180 duration-500" 
                        />
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                    <ul className="list-none space-y-2">
                        {item.list.map((listItem, idx) => (
                            <li key={idx} className="flex items-center">
                                <CircleCheckBig className="bg-green-500 w-4 h-4 rounded-3xl mr-2 text-gray-500"/>
                                <span>{listItem}</span>
                               
                            </li>
                      
                        ))}
                    </ul>
                    <div className='flex items-center justify-center mt-10 '>
                             <Button className='hover:bg-green-500'>
                                 Learn More →
                             </Button>
                         </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
