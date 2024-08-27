import FirstSection from '@/components/firstsection/page';
import FourtSection from '@/components/fourthsection/page';
import {Slider} from '@/components/hero/slider'
import SecondSection from '@/components/secondsection/page';
import ServiceSection from '@/components/servicesection/page';
import { Testimony } from '@/components/testimonial';
import ThirdSection from '@/components/thirdsection/page';

export default function Home() {
  return (
    <div>
     <Slider />
     <FirstSection />
     <SecondSection />
     <ThirdSection />
     <FourtSection />
     <Testimony />
     <ServiceSection/>
    </div>
  );
}
