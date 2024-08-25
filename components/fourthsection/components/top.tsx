import { Button } from "@/components/ui/button";

const Top = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 lg:gap-32 px-4 md:px-8 lg:px-16 py-8">
            <div className="max-w-lg text-center md:text-left">
                <p className="text-sm text-green-500 mb-4">
                    Pioneers Of Solar & Renewable Energy!
                </p>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Commercial, Residential & Industrial Solar Systems!
                </h1>
            </div>
            <div className="max-w-lg text-center md:text-left">
                <p className="text-base md:text-lg mb-8">
                    Today, our company is one of the most important PV suppliers in North America and Europe. Our sales offices and warehouses include PV industry experience, enabling us to provide in-depth material sourcing and supply chain expertise for every step of the production and installation process.
                </p>
                <Button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4">
                    Projects →
                </Button>
            </div>
        </div>
    );
};

export default Top;
