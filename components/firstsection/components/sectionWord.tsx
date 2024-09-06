import { Button } from '@/components/ui/button';
import { CircleCheck } from 'lucide-react';
import Link from 'next/link';

const SectionWord = () => {
    return (
        <div>
            {/* Top Section */}
            <div>
                <h3 className='bg-blue-200 p-2 sm:p-4 text-left text-blue-700 mb-4 sm:mb-7 text-sm sm:text-base font-bold inline-block rounded-sm'>
                    Solutions solaires complètes pour entreprises et résidences
                </h3>
            </div>
            {/* Headline Section */}
            <div className='mb-6 sm:mb-8'>
                <h1 className='text-xl sm:text-2xl md:text-4xl font-extrabold'>
                    Pionniers de l&apos;énergie solaire et renouvelable en Afrique de l&apos;Ouest!
                </h1>
            </div>
            {/* Description Section */}
            <div className='space-y-4 sm:space-y-6'>
                <div>
                    <h4 className='text-sm sm:text-base text-gray-500'>
                        Nous menons la transition vers des systèmes énergétiques plus durables, fiables et économiques. Grâce à nos technologies avancées, nous contribuons à bâtir un avenir énergétique meilleur pour tous.
                    </h4>
                </div>
                <div>
                    <h4 className='text-sm sm:text-base text-gray-500'>
                        Comment répondre à la demande croissante d&apos;électricité tout en protégeant notre climat et en améliorant la qualité de vie sur notre planète?
                    </h4>
                </div>
            </div>
            {/* Commitment Section */}
            <div className='flex flex-col space-y-4 sm:space-y-6 mt-6 sm:mt-10 text-gray-500'>
                <div>
                    <h4 className='text-sm sm:text-base'>
                        Nous nous engageons à fournir des produits et services solaires de la plus haute qualité. Notre mission est de vous aider à réduire vos coûts énergétiques tout en minimisant votre empreinte écologique.
                    </h4>
                </div>
                {/* List with Checkboxes */}
                <div className='space-y-2'>
                    <div className='flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2'>
                        <CircleCheck className='bg-blue-600 text-white rounded-3xl' />
                        <label className='text-sm sm:text-base'>Fiabilité et performance exceptionnelles</label>
                    </div>
                    <div className='flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2'>
                        <CircleCheck className='bg-blue-600 text-white rounded-3xl' />
                        <label className='text-sm sm:text-base'>Fabrication sur mesure et rapide</label>
                    </div>
                    <div className='flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2'>
                        <CircleCheck className='bg-blue-600 text-white rounded-3xl' />
                        <label className='text-sm sm:text-base'>Solutions de financement pour équipements solaires</label>
                    </div>
                </div>
            </div>
            {/* Call to Action */}
            <div className='mt-5'>
                <Link href='/company/works'>
                    <Button>
                        En savoir plus →
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default SectionWord;
