import React from 'react';

const FooterRight = () => {
    return (
 <div>
           <div className="flex justify-between items-start space-x-8 mb-10">
            {/* Company */}
            <div className="text-white">
                <div className="mb-4">
                    <h4 className="text-lg font-semibold">Company</h4>
                </div>
                <div className="space-y-2">
                    <p className="text-sm hover:text-green-400 cursor-pointer">About Us</p>
                    <p className="text-sm hover:text-green-400 cursor-pointer">Team</p>
                    <p className="text-sm hover:text-green-400 cursor-pointer">How it works</p>
                </div>
            </div>

            {/* Services */}
            <div className="text-white">
                <div className="mb-4">
                    <h4 className="text-lg font-semibold">Services</h4>
                </div>
                <div className="space-y-2">
                    <p className="text-sm hover:text-green-400 cursor-pointer">Solar Panels</p>
                    <p className="text-sm hover:text-green-400 cursor-pointer">Wind Turbines</p>
                    <p className="text-sm hover:text-green-400 cursor-pointer">Hydropower Plants</p>
                    <p className="text-sm hover:text-green-400 cursor-pointer">Fossil Resources</p>
                    <p className="text-sm hover:text-green-400 cursor-pointer">Battery Materials</p>
                    <p className="text-sm hover:text-green-400 cursor-pointer">Charge controllers</p>
                </div>
            </div>

            {/* Support */}
            <div className="text-white">
                <div className="mb-4">
                    <h4 className="text-lg font-semibold">Support</h4>
                </div>
                <div className="space-y-2">
                    <p className="text-sm hover:text-green-400 cursor-pointer">Contact Us</p>
                    <p className="text-sm hover:text-green-400 cursor-pointer">FAQs</p>
                    <p className="text-sm hover:text-green-400 cursor-pointer">Terms of Service</p>
                    <p className="text-sm hover:text-green-400 cursor-pointer">Privacy Policy</p>
                </div>
            </div>
            {/* copywright */}
           
        </div>
         <div className=" mt-28">
         <p className="text-white text-sm hover:text-green-500">© 2024 Koulibaly,All Rights Reserved</p>

     </div>
 </div>
    )
}

export default FooterRight;
