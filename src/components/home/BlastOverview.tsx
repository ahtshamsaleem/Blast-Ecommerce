"use client";

import Image from "next/image";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import { motion } from "framer-motion";

const BlastOverview = () => {
  return (
    <section className="relative w-full h-[758px] sm:h-full overflow-hidden flex items-center justify-center p-8 pt-15 sm:pt-20">
      {/* Backgrounds */}
      <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[var(--color-blue)]"></div>
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[var(--color-orange)]"></div>
      </div>

      {/* Diamonds Background */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img
          src="/images/diamonds-bg.png"
          alt="diamonds"
          className="w-[94%] m-auto h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 pt-2 pb-10 sm:pt-20 sm:pb-40 h-full">
        <div className="flex flex-col md:gap-6 text-left items-center md:items-start">
          <Heading size="md" className="text-center md:text-left">
            THRILL, SURPRISE, AND <br /> REWARDS <br /> IN EVERY BOX!
          </Heading>
          <Text className="md:mt-6 md:mb-11 mt-4 mb-4 text-center md:text-left">
            Blast turns every unboxing into an adventure—
            <br className="hidden md:block" />
            thrill, surprise, and real rewards in every dig.
          </Text>
          <Button size="xl" label="Shop All Boxes" />
        </div>

{/* Rotating Image */}
<motion.div
  animate={{ rotate: [0, -180, 0] }}
  transition={{
    duration: 20,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
    delay: 0.3,
  }}
  className="flex justify-center items-center w-full md:w-1/2"
>
  <Image
    src="/images/overview-blob.png"
    alt="overview blob"
    width={258}
    height={263}
    className="w-[258px] h-[263px] md:w-[477px] md:h-[485px] object-contain"
  />
</motion.div>


      </div>

      {/* Bottom Blue Vector */}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <Image
          src="/images/blue-vector.png"
          alt="blue vector"
          width={1440}
          height={100}
          className="w-full h-auto pointer-events-none"
        />
      </div>
    </section>
  );
};

export default BlastOverview;
