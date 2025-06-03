 

import BeyondTheBox from '@/src/components/home/BeyondTheBox';
import BlastOverview from '@/src/components/home/BlastOverview';
import BlastStory from '@/src/components/home/BlastStory';
import FeaturedRewards from '@/src/components/home/FeaturedRewards';
import Hero from '@/src/components/home/Hero';
import UGCScroll from '@/src/components/home/HorizontalScroll';
import HowItWorks from '@/src/components/home/HowItWorks';
import MarqueeBanner from '@/src/components/home/MarqueeBanner';
import ReactionsCarousel from '@/src/components/home/RealReactions';
import UnboxHero from '@/src/components/home/UnboxHero';
 


export default function Home() {
   
  return (
    <div>
       
        <Hero />
        <BeyondTheBox />
        <BlastStory />
        <HowItWorks />
        <FeaturedRewards />
        <MarqueeBanner />
        <BlastOverview />
        <UGCScroll />
        <ReactionsCarousel />
        <UnboxHero />
    </div>
  );
}
