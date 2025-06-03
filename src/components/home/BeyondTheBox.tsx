"use client";

import Image from "next/image";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const BeyondTheBox = () => {
  const t = useTranslations();
  return (
    <section className="relative flex flex-col w-full h-[600px] sm:h-screen pb-20 p-8 md:pb-40 bg-[var(--color-orange)] items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-20">
        <div className="flex flex-col sm:items-start items-center  text-left max-w-xl gap-6">
          <Heading className="!text-center sm:!text-left">
            <span className="block sm:hidden">{t("beyond_h1")}</span>
            <span className="hidden sm:block">
              {t("beyond_t1")} <br />
             {t("beyond_t2")}<br />
             {t("beyond_t3")} <br />
              {t("beyond_t4")}
            </span>
          </Heading>
          <Button size="xl" label="Get Your Box" />
        </div>

        <motion.div
          animate={{ rotate: [0, -180, 0] }}
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
              width: "clamp(202px, 35vw, 476px)",
              height: "clamp(205px, 36vw, 485px)",
            }}
          >
            <Image
              src="/images/yellow-blob.png"
              alt="yellow blob"
              width={476}
              height={485}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-0">
        <Image
          src="/images/yellow-vector.png"
          alt="yellow vector"
          width={1440}
          height={100}
          className="w-full h-auto pointer-events-none"
        />
      </div>
    </section>
  );
};

export default BeyondTheBox;
