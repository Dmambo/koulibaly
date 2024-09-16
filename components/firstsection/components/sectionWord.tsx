import { Button } from '@/components/ui/button';
import { CircleCheck } from 'lucide-react';
import Link from 'next/link';

const SectionWord = () => {
    return (
        <div>
            {/* Top Section */}
            <div>
                <h3 className='bg-blue-200 p-2 sm:p-4 text-left text-blue-700 mb-4 sm:mb-7 text-sm sm:text-base font-bold inline-block rounded-sm'>
                    Solutions énergétiques intégrées pour entreprises et résidences
                </h3>
            </div>
            {/* Headline Section */}
            <div className='mb-6 sm:mb-8'>
                <h1 className='text-xl sm:text-2xl md:text-4xl font-extrabold'>
                    Experts en électricité et énergies renouvelables depuis 2014!
                </h1>
            </div>
            {/* Description Section */}
            <div className='space-y-4 sm:space-y-6'>
                <div>
                    <h4 className='text-sm sm:text-base text-gray-500'>
                        Setrelec Afrique est à l'avant-garde de la transition énergétique en Guinée, offrant des systèmes fiables et durables pour répondre aux besoins en électricité de demain.
                    </h4>
                </div>
                <div>
                    <h4 className='text-sm sm:text-base text-gray-500'>
                        Comment pouvons-nous garantir un approvisionnement énergétique stable tout en réduisant l'impact environnemental et en améliorant les infrastructures locales?
                    </h4>
                </div>
            </div>
            {/* Commitment Section */}
            <div className='flex flex-col space-y-4 sm:space-y-6 mt-6 sm:mt-10 text-gray-500'>
                <div>
                    <h4 className='text-sm sm:text-base'>
                        Notre engagement est de fournir des solutions électriques et renouvelables de qualité, renforçant les infrastructures guinéennes tout en assurant une performance à long terme.
                    </h4>
                </div>
                {/* List with Checkboxes */}
                <div className='space-y-2'>
                    <div className='flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2'>
                        <CircleCheck className='bg-blue-600 text-white rounded-3xl' />
                        <label className='text-sm sm:text-base'>Solutions fiables et durables</label>
                    </div>
                    <div className='flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2'>
                        <CircleCheck className='bg-blue-600 text-white rounded-3xl' />
                        <label className='text-sm sm:text-base'>Expertise en projets sur mesure</label>
                    </div>
                    <div className='flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2'>
                        <CircleCheck className='bg-blue-600 text-white rounded-3xl' />
                        <label className='text-sm sm:text-base'>Partenariats avec des sociétés internationales</label>
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
