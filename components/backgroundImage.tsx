import React from 'react';
import Image from 'next/image';

interface BackgroundImageProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ src, alt, children, className }) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10  h-full">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
