import FooterLeft from "./components/footerLeft";
import FooterRight from "./components/footerRight";

const Footer = () => {
    return (
        <footer className=" bg-gray-800 text-white py-10 px-6 sm:px-10 md:py-20 md:px-40 flex flex-col md:flex-row justify-between items-center gap-16">
        <FooterRight/>
        <FooterLeft/>
        </footer>
    );
}

export default Footer;