'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Text from "../ui/Text";

const Hero = () => {
  return (
<section className="relative flex flex-col w-full h-[471px] sm:h-screen pb-20 p-8 md:pb-40 bg-[var(--color-blue)] items-center justify-center overflow-hidden">
      <motion.div
        className="absolute left-[-100px] sm:left-[-200px] top-1/2 -translate-y-1/2 z-0"
        animate={{ y: '-30%' }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 0.3,
        }}
      >
        <div
          className="rotate-[19deg]"
          style={{
            width: 'clamp(155px, 30vw, 482px)',
            height: 'clamp(143px, 28vw, 446px)',
          }}
        >
          <Image
            src="/images/white-gem.png"
            alt="white gem"
            width={482}
            height={446}
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>

      <div className="z-10 flex flex-col items-center justify-center text-center gap-7 w-full max-w-screen-sm px-6">
        <Heading>
          unbox <br /> the <br /> unexpected
        </Heading>
        <Text size="lg">
          Every Dig Kit hides instant win prizes, and gems to collect massive rewards. Ready to see what&apos;s inside?
        </Text>
        <Button label="Get Your Box" size="xl" />
      </div>

      <motion.div
        className="absolute right-[-100px] sm:right-[-248px] top-1/2 -translate-y-1/2 scale-x-[-1] z-0"
        animate={{ y: '30%' }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 0.3,
        }}
      >
        <div
          style={{
            width: 'clamp(189px, 32vw, 588px)',
            height: 'clamp(147px, 28vw, 456px)',
          }}
        >
          <Image
            src="/images/gold-gem.png"
            alt="gold gem"
            width={588}
            height={456}
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full z-0">
        <Image
          src="/images/orange-vector.png"
          alt="orange vector"
          width={1440}
          height={100}
          className="w-full h-auto pointer-events-none"
        />
      </div>
    </section>
  );
};

export default Hero;
