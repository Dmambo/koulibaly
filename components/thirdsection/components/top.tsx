/* eslint-disable react/no-unescaped-entities */
const Top = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center py-10 sm:py-16'>
      <div>
        <p className='text-blue-500 mb-6 sm:mb-10 text-base sm:text-lg'>
          Fournir des solutions électriques fiables et durables depuis 2014 !
        </p>
      </div>
      <div>
        <h1 className='font-extrabold text-2xl sm:text-4xl leading-snug sm:leading-relaxed'>
          Votre expert en infrastructure électrique, 
          <br className='hidden sm:inline' /> solutions d'énergie renouvelable, 
          <br className='hidden sm:inline' /> et partenaire de confiance pour fabricants, installateurs et entreprises.
        </h1>
      </div>
    </div>
  );
};

export default Top;
