'use client';

import Marquee from 'react-fast-marquee';
import Image from 'next/image';
import Heading from '../ui/Heading'; 
import { useTranslations } from 'next-intl';

//   const phrases = [
//   "DIG FOR GEMS",
//   "WIN REAL PRIZES",
//   "UNBOX THE UNEXPECTED",
// ];

const MarqueeBanner = () => {
  const t = useTranslations();


  const phrases = [
  t("marquee_t1"),
  t("marquee_t2"),
  t("marquee_t3"),
 
];
  return (
    <div className="bg-[var(--color-yellow)] py-4">
      <Marquee gradient={false} speed={50} loop={0}>
        {phrases.map((text, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-4 mx-8 pb-3"
          >
            <Heading size="sm" color="black">
              {text}
            </Heading>
            <Image
              src="/images/diamond-xs.png"
              alt="diamond"
              width={51}
              height={43}
              className="w-[51px] h-[43px] object-cover mt-2"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeBanner;