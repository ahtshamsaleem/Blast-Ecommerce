'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

const images = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
];

export default function LayeredAnimation() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (idx: number) => {
    setActiveIndex(prev => (prev === idx ? null : idx));
  };

  const shiftAmount = -300; // You can make this responsive too if needed

  return (
    <div className="relative w-full min-h-screen bg-gray-100 overflow-hidden">
      {/* Bottom Layer (Images) */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center space-x-4 p-4 overflow-x-hidden"
        animate={{ x: activeIndex !== null ? shiftAmount : 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="min-w-[200px] sm:min-w-[150px] h-[150px] sm:h-[120px] bg-gray-300 rounded-md overflow-hidden flex-shrink-0"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={200}
              height={150}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* Top Layer (Clickable Boxes) */}
      <div className="relative z-10 h-full flex items-center justify-end pr-4 sm:pr-2 gap-4">
        {[0, 1, 2].map((idx) => (
          <motion.div
            key={idx}
            className={clsx(
              'w-[100px] sm:w-[80px] h-[100px] sm:h-[80px] bg-red-400 rounded-md cursor-pointer flex items-center justify-center text-white font-bold',
              activeIndex === idx ? 'z-20' : 'z-10'
            )}
            animate={{
              x: activeIndex === idx ? shiftAmount : 0,
            }}
            transition={{ type: 'spring', stiffness: 120 }}
            onClick={() => handleClick(idx)}
          >
            Box {idx + 1}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
