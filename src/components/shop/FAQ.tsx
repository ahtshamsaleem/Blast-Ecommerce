'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Heading from '../ui/Heading';

const faqs = [
  {
    id: 1,
    question: 'HOW DOES IT WORK?',
    answer: (
      <div className="text-black text-sm leading-relaxed">
        <p className="font-bold mb-1">Unbox and Set Up</p>
        <p className="mb-4">Open your kit and take out the tools, dig block, and info sheet...</p>
        <p className="font-bold mb-1">Dig and Discover</p>
        <p className="mb-4">Use the chisel and hammer to carefully break the block...</p>
        <p className="font-bold mb-1">Reveal the Surprise</p>
        <p>Uncover a gemstone, fossil, or mystery creature...</p>
      </div>
    ),
    color: 'red',
    gem: '/images/faq/gem1.png',
  },
  {
    id: 2,
    question: 'WHAT KIND OF PRIZES CAN I GET?',
    answer: (
      <p className="text-black text-sm leading-relaxed">
        From Nike gift cards to perfumes, dining experiences, home appliances...
      </p>
    ),
    color: 'yellow',
    gem: '/images/faq/gem2.png',
  },
  {
    id: 3,
    question: 'HOW DO I RECEIVE PRIZES?',
    answer: (
      <div className="text-black text-sm leading-relaxed">
        <p className="mb-4">Take a photo of your winning gem and email it to us...</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Instant win? We ship directly to you.</li>
          <li>Got 5? We send a reward code.</li>
        </ul>
      </div>
    ),
    color: 'green',
    gem: '/images/faq/gem3.png',
  },
  {
    id: 4,
    question: 'How long does it take to shIp?',
    answer: (
      <div className="text-black text-sm leading-relaxed">
        <p className="mb-4">We offer same-day delivery in Buenos Aires (CABA & GBA) 🚀</p>
        <p className="mb-4">For the rest of Argentina, shipping takes 3 to 4 business days 📍</p>
        <p className="mb-4">We ship safely and on-time with Correo Argentino — so you can start unboxing fun fast!</p>
      </div>
    ),
    color: 'brown',
    gem: '/images/faq/gem3.png',
  },
];

export default function FAQSection() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const pathname = usePathname();

  const toggleAccordion = (id: number) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  const isContactPage = pathname === '/contact';

  return (
    <section
      className={`relative w-full overflow-hidden pt-30 pb-20 px-4 sm:px-18 ${
        isContactPage ? 'bg-[var(--color-brown2)]' : 'bg-white'
      }`}
    >
      <div className="flex flex-col items-center lg:flex-row w-full gap-10">
        <motion.div
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="w-full lg:w-[40%] flex items-center justify-center 
            bg-[url('/images/faq/white.png')] 
            bg-contain bg-no-repeat bg-center 
            min-h-[320px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px] 
            max-h-[320px]"
        >
          <Image
            src="/images/faq/character.png"
            alt="character"
            width={347}
            height={521}
            className="object-contain w-[clamp(202px,20vw,347px)] h-auto"
          />
        </motion.div>

        <div className="w-full lg:w-[60%] flex flex-col gap-4">
          {faqs.map(faq => {
            const isActive = activeId === faq.id;

            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-lg"
                style={{
                  backgroundImage: `url('/images/faq/${faq.color}.png')`,
                  backgroundSize: 'cover',
                }}
              >
                <div
                  onClick={() => toggleAccordion(faq.id)}
                  className="cursor-pointer relative px-6 py-5 text-lg font-bold flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <Image src={faq.gem} className="mr-2" alt="gem" width={32} height={32} />
                    <Heading size="xxs" color="black">
                      {faq.question}
                    </Heading>
                  </div>
                  {isActive ? <ChevronUp /> : <ChevronDown />}
                </div>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      exit={{ opacity: 0, scaleY: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-6 pb-6 pt-2 origin-top overflow-hidden"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
