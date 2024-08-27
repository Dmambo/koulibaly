import BackgroundImage from "../backgroundImage";
import FirstSection from "./components/firstsection";
import SecondSection from "./components/secondsection";

const QuoteSection = () => {
  return (
    <BackgroundImage
      src="/bottom.jpg"
      alt="background Image"
    //   className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
    >
      <div className=" flex flex-col md:flex-row bg-green-900/90 py-10 px-6 sm:px-10 md:py-20 md:px-40  justify-between gap-16 text-white h-full">
        <FirstSection />
        <SecondSection />
      </div>
    </BackgroundImage>
  );
};

export default QuoteSection;
