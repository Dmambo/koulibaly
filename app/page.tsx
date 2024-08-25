import FirstSection from '@/components/firstsection/page';
import {Slider} from '@/components/hero/slider'
import SecondSection from '@/components/secondsection/page';

export default function Home() {
  return (
    <div>
     <Slider />
     <FirstSection />
     <SecondSection />
    </div>
  );
}
