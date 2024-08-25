import Cards from "./components/cards";
import Top from "./components/top";
import Bottom from "./components/bottom";


const ThirdSection = () => {
    return (
        <div className=' bg-gray-200 py-10 px-6 sm:px-10 md:py-20 md:px-40 flex flex-col  justify-between gap-16'>
            <Top />
            <Cards/>
            <Bottom/>
        </div>
    )
}

export default ThirdSection;