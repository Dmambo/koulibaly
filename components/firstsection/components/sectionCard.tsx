import Image from 'next/image';
import { Fan } from 'lucide-react';

const SectionCard = () => {
    return (
        <div className='relative'>
            {/* image */}
            <Image
                src='/aboutImg.jpg'
                alt='about image'
                width='540'
                height='1050'
                className=' rounded-lg'
            />
            {/* overlay */}
            <div className='absolute top-14 left-0 bg-green-600 p-5 z-10 text-white flex flex-col justify-center  items-center'>
                <div className='mb-4'>
                    <Fan size={52}  className=' text-white'/>
                </div>
                <div className='flex flex-col font-bold'>
                    <h2 className=' text-4xl mb-4'>+953</h2> <p className='text-sm '> Happy Client</p> 
                </div>
            </div>
        </div>
    );
};

export default SectionCard;
