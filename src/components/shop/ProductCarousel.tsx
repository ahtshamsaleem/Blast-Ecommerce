
'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import Button from '../ui/Button';
import { useState, useEffect } from 'react';
import Heading from '../ui/Heading';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const slides = [
  {
    id: 1,
    title: 'START DIGGING WITH A STANDARD CHANCE TO WIN!',
    bg: 'bg-[var(--color-yellow2)]',
    productBg: '/images/cards/yellow-product.png',
    productImage: '/images/white-gem.png',
    price: '$21',
    label: 'Blast! Gold Rush',
    rotation: 'rotate-[-15.04deg]'
  },
  {
    id: 2,
    title: 'DOUBLE THE CHANCE, DOUBLE THE REWARDS!',
    bg: 'bg-[var(--color-brown)]',
    productBg: '/images/cards/brown-product.png',
    productImage: '/images/brown-gem.png',
    price: '$21',
    label: 'Blast! Gemstone Hunt',
    rotation: 'rotate-[5.68deg]'
  },
  {
    id: 3,
    title: 'THE ULTIMATE HUNT FOR BIG WINS!',
    bg: 'bg-[var(--color-lightblue)]',
    productBg: '/images/cards/white-product.png',
    productImage: '/images/white-gem.png',
    price: '$21',
    label: 'Blast! Diamond Strike',
    rotation: 'rotate-[-15.04deg]'
  },
];

export default function TwoPanelCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quantity, setQuantity] = useState(1);

    const [spacing, setSpacing] = useState(68); 

  useEffect(() => {
    const updateSpacing = () => {
      if (window.innerWidth < 640) {
        setSpacing(47);
      } else {
        setSpacing(68);
      }
    };

    updateSpacing();
    window.addEventListener('resize', updateSpacing);
    return () => window.removeEventListener('resize', updateSpacing);
  }, []);

  const [sliderRef] = useKeenSlider({
    loop: false,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1.5,
      spacing: spacing,
      origin: 'center'
    },
  });

  const [textSliderRef, textSliderInstanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1,
    },
  });

  useEffect(() => {
    if (textSliderInstanceRef.current) {
      textSliderInstanceRef.current.moveToIdx(currentSlide);
    }
  }, [currentSlide, textSliderInstanceRef]);

  return (
<section className="relative flex flex-col lg:flex-row w-full h-full overflow-hidden">
<div className="flex w-full lg:w-1/2  bg-[var(--color-blue)]  items-center justify-center p-10 overflow-hidden relative">
<div ref={textSliderRef} className="keen-slider h-full w-full text-center transform-gpu will-change-transform">
  {slides.map((slide, index) => (
    <div
      key={index}
className="keen-slider__slide flex flex-col justify-center items-center lg:items-start text-white text-center lg:text-left gap-10 max-w-xs mx-auto px-0 my-20 sm:my-0 sm:px-12 transition-all duration-700 ease-in-out transform-gpu will-change-transform"
    >
      <Heading size="base">{slide.title}</Heading>
      <Button  label="Dig Gold Rush" size="xl" />
    </div>
  ))}
</div>

  </div>

<div className={clsx(
  "relative transition-colors duration-700 ease-in-out",
  slides[currentSlide].bg,
  "w-full lg:w-1/2"
)}>  
  <div ref={sliderRef} className="keen-slider h-full flex items-center py-20">
{slides.map((slide, index) => (
  <div
    key={slide.id}
  className="keen-slider__slide flex-shrink-0 basis-0 w-full ~max-w-[420px] transition-all duration-700 ease-in-out"
  >
<div
  className={clsx(
    "p-6 h-full flex flex-col items-center transition-transform duration-700 ease-in-out transform-gpu will-change-transform relative overflow-hidden",
    index === currentSlide ? "scale-100" : "scale-90"
  )}

>

      <Image
        src={slide.productBg}
        alt="background"
        fill
        className="absolute top-0 left-0 w-full h-full object-cover sm:object-contain z-0 "
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center  sm:py-18 sm:px-8">
        <Heading size="sm" color={index === slides.length - 1 ? "black" : "white"}>
          {slide.label}
        </Heading>
 <Image
  src={slide.productImage}
  alt="product"
  width={250}
  height={250}
  className={clsx(
    "my-8 transition-all duration-500",
    slide.rotation,
    "w-[150px] sm:w-[180px] md:w-[200px] lg:w-[250px] h-auto"
  )}
/>

        <div className="flex justify-between items-center w-[141px] sm:w-[256px] h-12 border border-black text-black font-bold text-xl">
          <button
            onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
            className="w-1/3 text-center"
          >
            −
          </button>
          <div className="w-1/3 text-center pointer-events-none select-none">
            {quantity}
          </div>
          <button
            onClick={() => setQuantity(prev => prev + 1)}
            className="w-1/3 text-center"
          >
            +
          </button>
        </div>

        <Button className="mt-2" label={`Add to Cart - ${slide.price}`} size="xxl" />
      </div>
    </div>
  </div>
))}

    </div>
  </div>

  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    className="absolute bottom-15 left-50 z-0"
  >
    <Image
      src="/images/star.png"
      alt="star"
      width={122}
      height={122}
      className="hidden lg:block w-[122px] sm:w-[122px]"
    />
  </motion.div>

  <div className="absolute bottom-0 left-0 w-full z-0">
    <Image
      src="/images/blue-vector.png"
      alt="blue Vector"
      width={1440}
      height={100}
      className="w-full h-auto pointer-events-none"
    />
  </div>
</section>
  );
}