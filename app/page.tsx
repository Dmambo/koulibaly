import FirstSection from '@/components/firstsection/page';
import {Slider} from '@/components/hero/slider'
import SecondSection from '@/components/secondsection/page';
import ThirdSection from '@/components/thirdsection/page';

export default function Home() {
  return (
    <div>
     <Slider />
     <FirstSection />
     <SecondSection />
     <ThirdSection />
    </div>
  );
}
