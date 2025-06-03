import BeyondTheBox from "../../components/home/BeyondTheBox";
import BlastOverview from "../../components/home/BlastOverview";
import BlastStory from "../../components/home/BlastStory";
import FeaturedRewards from "../../components/home/FeaturedRewards";
import Hero from "../../components/home/Hero";
import UGCScroll from "../../components/home/HorizontalScroll";
import HowItWorks from "../../components/home/HowItWorks";
import MarqueeBanner from "../../components/home/MarqueeBanner";
import RealReactions from "../../components/home/RealReactions";
import UnboxHero from "../../components/home/UnboxHero";


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
        <RealReactions />
        <UnboxHero />
    </div>
  );
}
