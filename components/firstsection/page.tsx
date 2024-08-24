import SectionCard from "./components/sectionCard";
import SectionWord from "./components/sectionWord";

const FirstSection = () => {
    return (
        <div className="py-10 px-6 sm:px-10 md:py-20 md:px-40 flex flex-col md:flex-row justify-between gap-16">
            <SectionCard />
            <SectionWord />
        </div>
    );
};

export default FirstSection;
