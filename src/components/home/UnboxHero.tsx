'use client';

import Image from 'next/image';
import Button from '../ui/Button';
import Text from '../ui/Text';
import Heading from '../ui/Heading';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const UnboxHero = () => {
  const t = useTranslations();
  return (
    <section className="relative w-full  h-screen bg-[var(--color-green)] overflow-hidden flex justify-center p-8 pt-44 pb-40">
      
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[15vh] left-[2vw] z-0"
      >
        <Image
          src="/images/white-gem.png"
          alt="Top Left Box"
          width={235}
          height={215}
          className="rotate-[18.96deg] w-[120px] sm:w-[235px]"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[30vh] left-[12vw] z-0"
      >
        <Image
          src="/images/gold-gem.png"
          alt="Bottom Left Yellow Box"
          width={238}
          height={184}
          className="rotate-[-24.18deg] w-[120px] sm:w-[238px]"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[30vh] right-[8vw] z-0"
      >
        <Image
          src="/images/gold.png"
          alt="Gold"
          width={257}
          height={219}
          className="w-[130px] sm:w-[257px]"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[10vh] right-[2vw] z-0"
      >
        <Image
          src="/images/diamond.png"
          alt="Diamond"
          width={237}
          height={221}
          className="w-[130px] sm:w-[237px]"
        />
      </motion.div>

<div className="z-10 flex flex-col items-center max-w-4xl text-center w-full relative mt-15 sm:mt-0">
 <div className='relative'>
     <Heading size="base" className="text-white">
    {t("unbox_h1")}
  </Heading>

  <div className="relative inline-block mt-2 mb-2">
      <Heading size="base" className="text-white outline">
       {t("unbox_h2")}
  </Heading>
    <Image
      src="/images/shovel.png"
      alt="shovel"
      width={107}
      height={48}
      className="absolute -right-30 -top-4 hidden sm:inline-block rotate-[-26.23deg]"
    />
  </div>

  <Heading size="base" className="text-white">
       {t("unbox_h3")}
  </Heading>

      <Image
      src="/images/green-shadow.png"
      alt="shovel"
      width={107}
      height={90}
      className="hidden sm:block absolute -bottom-10 w-full"
    />
 </div>

  <Text size="xl" className="mt-6 sm:mt-20 text-black">
       {t("unbox_t1")}
  </Text>

  <div className="mt-6 flex justify-center">
    <Button size="xl" label="Get Your Box" />
  </div>
</div>


      <div className="absolute bottom-0 left-0 w-full z-0">
        <Image
          src="/images/yellow-vector.png"
          alt="yellow Vector"
          width={1440}
          height={100}
          className="w-full h-auto pointer-events-none"
        />
      </div>
    </section>
  );
};

export default UnboxHero;
