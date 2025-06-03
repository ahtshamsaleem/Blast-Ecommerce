"use client";

import Image from "next/image";
import Button from "../ui/Button";
import Text from "../ui/Text";
import { motion } from "framer-motion";

const BlastStory = () => {
  return (
    <section className="relative w-full h-[926px] sm:h-screen pb-20 p-8 md:pb-40 bg-[var(--color-yellow)] overflow-hidden flex items-center justify-center p-8 pt-20 ">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-20 z-10">
        <motion.div
          animate={{ rotate: [0, 180, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          <div
            style={{
              width: "clamp(263px, 40vw, 648px)",
              height: "clamp(235px, 38vw, 580px)",
            }}
          >
            <Image
              src="/images/red-blob.png"
              alt="red blob"
              width={648}
              height={580}
              className="w-full h-full object-contain"
            /> 
            
          </div>
        </motion.div>

        <div className="flex flex-col items-center sm:items-start max-w-md gap-5 text-center sm:text-left">
          <Text size="2xl">
            We started Blast to bring back the thrill of rewards. Behind every kit is a team building a world of fun, creativity, and big surprises where every unboxing is a chance to play and win.
          </Text>
          <Button size="xl" label="Get Your Box" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-0">
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

export default BlastStory;
