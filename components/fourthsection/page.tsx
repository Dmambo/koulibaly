import BackgroundImage from "../backgroundImage";
import Middle from "./components/middle";
import Top from "./components/top";

const FourtSection = () => {
  return (
    <BackgroundImage
      src="/bottom.jpg"
      alt="A beautiful background"
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
    >
      <div className="text-white bg-black/90 py-10 px-6 sm:px-10 md:py-20 md:px-40 flex flex-col justify-between h-full">
        <Top />
        <Middle />
      </div>
    </BackgroundImage>
  );
};
export default FourtSection;
