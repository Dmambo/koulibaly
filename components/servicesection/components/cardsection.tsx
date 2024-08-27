import { Button } from "@/components/ui/button";
import Link from "next/link";

const CardSection = () => {
    const items = [
        {
            image: "supply.jpg",
            title: "Finance, supply chain",
            slogan: "Expanding the Solar Supply Chain Finance Program",
            description: "The great thing about solar panels is that they do not require a lot of maintenance. However, it is still important to get them checked regularly to ensure safe."
        },
        {
            image: "wind.jpg",
            title: "Energy, green energy",
            slogan: "Harnessing the Power of Wind Energy",
            description: "As wind turbines increase in size & height to capture more energy, and as wind power plants with many turbines spread out over greater areas and longer distances."
        },
        {
            image: "green.jpg",
            title: "ECO, Green Energy",
            slogan: "Smarter Ways to Manage EV Charging Infrastructure",
            description: "If you own an electric (EV), the recurring question you'll get is: how easy is it to charge the battery on the road? Clearly, people simply want to get."
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
                <div 
                    key={index} 
                    className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                    <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-48 object-cover" 
                    />
                    <div className="p-6">
                        <p className="font-bold mb-2 text-green-500">{item.title}</p>
                        {item.slogan && <h1 className="text-2xl font-semibold mb-4">{item.slogan}</h1>}
                        {item.description && <p className="text-gray-700 text-base">{item.description}</p>}
                    </div>
                    <div>
                <Link
                href="/services"
                >
                <Button className=" border border-black bg-white text-black flex justify-center items-center m-4">
                    Explore More →
                </Button>
                </Link>
            </div>
                </div>
            ))}
        </div>
    );
}

export default CardSection;
