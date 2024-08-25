import Bottom from "./components/bottom";
import CardSection from "./components/cardSection";
import WordSection from "./components/wordSection";

const SecondSection = () => {
  return (
    <div className="bg-slate-800 text-white py-10 px-6 sm:px-10 md:py-20 md:px-40 flex flex-col  justify-between gap-16">
      <WordSection />
      <CardSection />
      <Bottom />
    </div>
  );
};

export default SecondSection;
