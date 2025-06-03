'use client';

import { useState, useRef, useEffect, RefObject } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import { useTranslations } from "next-intl";

const steps = [
  {
    label: "Step 1",
    content: "Unbox your kit and lay out your tools. Get ready to dig!",
  },
  {
    label: "Step 2",
    content: "Use the chisel and brush to uncover hidden treasures inside the block.",
  },
  {
    label: "Step 3",
    content: "Find your surprise, it could be a gemstone, fossil, or a rare Prize!",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [, setPrevStep] = useState(0);
  const buttonRefs: RefObject<(HTMLDivElement | null)[]> = useRef([]);
  const [arrowTop, setArrowTop] = useState(0);
  const t = useTranslations();

  useEffect(() => {
    const el = buttonRefs.current[activeStep];
    if (el) {
      const offset = el.offsetTop + el.offsetHeight / 2 - 10;
      setArrowTop(offset);
    }
  }, [activeStep]);

  const handleStepChange = (index: number) => {
    setPrevStep(activeStep);
    setActiveStep(index);
  };

  return (
    <section className="z-1 relative w-full bg-[var(--color-blue)] p-8 pt-20 pb-40 flex flex-col items-center">
      <div className="max-w-7xl w-full flex flex-col items-center sm:items-start sm:gap-9 gap-4 sm:mb-24 mb-32">
        <Heading size="md">{t("how_h1")}</Heading>
        <Text>{t("how_t1")}</Text>
      </div>

<div className="relative max-w-5xl w-full bg-white/20 rounded-4xl justify-center flex flex-col sm:flex-row min-h-[450px] sm:min-h-[540px]">

<div className="absolute -top-[clamp(97px,20vw,267px)] right-0 z-30 sm:hidden ">
            <Image
              src="/images/character.png"
              alt="character"
              width={0}
              height={0}
              sizes="(max-width: 640px) 116px, 322px"
              className="w-[clamp(116px,24vw,322px)] h-auto"
            />
</div>

        <div className="sm:max-w-xs max-w-xl  rounded-tl-4xl rounded-bl-4xl flex flex-col items-center justify-center w-full gap-6 px-6 py-10 relative">
          <motion.div
            className="absolute text-white text-xl"
            animate={{ top: arrowTop }}
            transition={{ duration: 0.3 }}
            style={{ left: '40px' }}
          >
            ▶
          </motion.div>

          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el: HTMLDivElement | null) => {
                buttonRefs.current[index] = el;
              }}
              className="w-full"
            >
              <Button
                label={step.label}
                size="md"
                className="mx-auto"
                active={activeStep === index}
                onClick={() => handleStepChange(index)}
              />
            </div>
          ))}
        </div>

        <div className="bg-white rounded-4xl sm:px-16 px-6 sm:py-14 py-7 flex flex-col gap-8 w-full relative z-50 min-h-[250px] sm:min-h-[580px]">
          <div className="absolute -top-[clamp(97px,20vw,267px)] right-0 z-30 hidden sm:block">
            <Image
              src="/images/character.png"
              alt="character"
              width={0}
              height={0}
              sizes="(max-width: 640px) 116px, 322px"
              className="w-[clamp(116px,24vw,322px)] h-auto"
            />
          </div>

          <Heading size="xs" color="black">{t("how_h1")}</Heading>

          <div className="relative h-20 overflow-hidden">
            <motion.div
              className="flex flex-col"
              animate={{ y: `-${activeStep * 5}rem` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ height: `${steps.length * 5}rem` }}
            >
              {steps.map((step, index) => (
                <div key={index} className="h-20 flex items-start">
                  <Text size="xl">{step.content}</Text>
                </div>
              ))}
            </motion.div>
          </div>

          <Image
            src="/images/step.png"
            alt="step"
            width={0}
            height={0}
            sizes="(max-width: 640px) 86px, 238px"
            className="absolute left-1/2 -translate-x-1/2 sm:bottom-[25%]  bottom-[5%] z-20 w-[clamp(102px,22vw,238px)] h-auto"
          />

          <Image
            src="/images/block.png"
            alt="block"
            className="absolute -bottom-11 w-full left-0 z-10"
            width={657}
            height={222}
          />
        </div>
      </div>

      <Image
        src="/images/shovel.png"
        alt="shovel"
        width={0}
        height={0}
        sizes="(max-width: 640px) 62px, 112px"
        className="absolute -top-11 left-1/2 -translate-x-1/2 w-[clamp(62px,15vw,112px)] h-auto"
      />

      <div className="absolute bottom-0 left-0 w-full z-0">
        <Image
          src="/images/white-vector.png"
          alt="white vector"
          width={1440}
          height={100}
          className="w-full h-auto pointer-events-none"
        />

        <Image
          src="/images/diamond-lg.png"
          alt="large diamond"
          width={100}
          height={84}
          className="absolute -bottom-6 left-[270px] z-50 hidden sm:block"
        />

        <Image
          src="/images/diamond-sm.png"
          alt="small diamond"
          width={80}
          height={67}
          className="absolute -bottom-8 right-[320px] rotate-[22deg] z-50 hidden sm:block"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
