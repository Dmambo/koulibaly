import { Button } from '@/components/ui/button';
import { CircleCheck } from 'lucide-react';
import Link from 'next/link';

const SectionWord = () => {
    return (
        <div>
            {/* top */}
            <div>
                <h3 className='bg-blue-200 p-2 sm:p-4 text-left text-blue-700 mb-4 sm:mb-7 text-sm sm:text-base font-bold inline-block rounded-sm'>
                    Système solaire complet pour les entreprises et les résidences
                </h3>
            </div>
            {/* layer two */}
            <div className='mb-6 sm:mb-8'>
                <h1 className='text-xl sm:text-2xl md:text-4xl font-extrabold'>
                    Nous sommes des pionniers dans le monde de l'énergie solaire et renouvelable!
                </h1>
            </div>
            {/* layer three */}
            <div className='space-y-4 sm:space-y-6'>
                <div>
                    <h4 className='text-sm sm:text-base text-gray-500'>
                        Nous conduisons la transition vers des systèmes énergétiques plus durables, fiables et abordables. Avec nos technologies innovantes, nous énergisons la société, c'est notre objectif!
                    </h4>
                </div>
                <div>
                    <h4 className='text-sm sm:text-base text-gray-500'>
                        Comment répondre à la demande croissante d'électricité tout en protégeant notre climat et en faisant de la planète un meilleur endroit?
                    </h4>
                </div>
            </div>
            {/* layer four */}
            <div className='flex flex-col space-y-4 sm:space-y-6 mt-6 sm:mt-10 text-gray-500'>
                <div>
                    <h4 className='text-sm sm:text-base'>
                        Nous nous engageons à vous fournir les meilleurs produits et services solaires. Nous sommes là pour vous aider à économiser de l'argent sur vos factures d'électricité et à réduire votre empreinte carbone.
                    </h4>
                </div>
                {/* list with checkbox */}
                <div className='space-y-2'>
                    <div className='flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2'>
                        <CircleCheck className='bg-blue-600 text-white rounded-3xl' />
                        <label className='text-sm sm:text-base'>Fiabilité et performance</label>
                    </div>
                    <div className='flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2'>
                        <CircleCheck className='bg-blue-600 text-white rounded-3xl' />
                        <label className='text-sm sm:text-base'>Fabrication juste-à-temps</label>
                    </div>
                    <div className='flex items-center gap-2 px-2 py-1 sm:px-4 sm:py-2'>
                        <CircleCheck className='bg-blue-600 text-white rounded-3xl' />
                        <label className='text-sm sm:text-base'>Financement du matériel solaire</label>
                    </div>
                </div>
            </div>
<div className=' mt-5'>
<Link
           href='/company/works'
           >
           <Button>
            En savoir plus →
            </Button>
           </Link>
</div>
        </div>
    );
};

export default SectionWord;
