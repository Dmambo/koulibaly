import CardSection from "./components/cardsection";
import WordSection from "./components/wordsection";

const ServiceSection = () => {
    return (
        <div className="py-10 px-6 sm:px-10 md:py-20 md:px-40 flex flex-col  justify-between gap-16">
            <WordSection />
            <CardSection />
        </div>

    )
}

export default ServiceSection;