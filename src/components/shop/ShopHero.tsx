"use client";

import Image from "next/image";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Text from "../ui/Text";

const ShopHero = () => {
    return (
<section className="relative flex flex-col w-full h-[988] sm:h-screen pb-20 p-8 md:pb-40 bg-[var(--color-blue)] items-center justify-center overflow-hidden">
        <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col md:flex-row  items-center justify-between gap-20 h-full pt-20 pb-40">
        <div className="flex flex-col items-center md:items-start md:gap-8 gap-6 text-center  md:text-left">
          <Heading size="md">
            More Kits. More Gems. More Rewards.  
        </Heading>
          <Text>
           Get the best value with Blast Bundles—unlock more treasures, collect gems faster, and boost your chances to win big!
          </Text>
          <Button size="xl" label="Get Your Box" />
        </div>
        <Image src={"/images/gem-box.png"}
            alt="shop"
            width={609}
            height={609} />

        </div>
        </section>
    );
    }
export default ShopHero;