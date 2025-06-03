'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import type { Splide as SplideClass } from '@splidejs/splide';
import { useRef, useState } from 'react';
 
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Button from '../ui/Button';
import Heading from '../ui/Heading';
import Image from 'next/image';

interface BaseCard {
  id: number;
  name: string;
}

const instantCards: BaseCard[] = [
  { id: 1, name: 'Vector1' },
  { id: 2, name: 'Vector2' },
  { id: 3, name: 'Vector3' },
  { id: 4, name: 'Vector4' },
  { id: 5, name: 'Vector5' },
  { id: 6, name: 'Vector6' },
];

const InstantPrizes = () => {
  const splideRef = useRef<SplideClass | null>(null);


  const [currentIndex, setCurrentIndex] = useState(0);

  const perPage = 3;

  const isFirstPage = currentIndex === 0;
  const isLastPage = currentIndex + perPage >= instantCards.length;

  const goNext = () => {
    if (splideRef.current) {
      splideRef.current.go(`+${perPage}`);
      const newIndex = Math.min(currentIndex + perPage, instantCards.length - 1);
      setCurrentIndex(newIndex);
    }
  };

  const goPrev = () => {
    if (splideRef.current) {
      splideRef.current.go(`-${perPage}`);
      const newIndex = Math.max(currentIndex - perPage, 0);
      setCurrentIndex(newIndex);
    }
  };




  const renderCard = (card: BaseCard) => (
    <div
      key={card.id}
      className="relative flex flex-col items-center justify-center  p-4 sm:p-5
        w-[clamp(180px,55vw,500px)] 
        h-[clamp(250px,70vw,500px)] 
        m-auto sm:m-0 shrink-0 bg-no-repeat bg-center bg-contain "

        style={{ backgroundImage: `url(/images/${card.name}.png)` }}
        
    >

{/* <div
  className="absolute w-[90%] h-[90%] max-lg:w-full max-lg:h-full bg-no-repeat bg-center bg-contain"
  style={{ backgroundImage: `url(/images/${card.name}.png)` }}
/> */}
      {/* <Image
        src={`/images/${card.name}.png`}
        alt={`card-${card.name}`}
        width={500}
        height={500}
        className="absolute w-[90%] h-[90%] max-lg:w-full max-lg:h-full  object-contain"
      /> */}

      <div className="relative z-10   text-center w-full px-4   flex flex-col items-center justify-center gap-8">
        <Heading size="lg" color="white" className='text-xl '>
          {card.id}
        </Heading>
        <Button
          label="Click to reveal!"
          active
          size="lg"
          className="mx-auto !w-[105px] sm:!w-[176px]"
        />
      </div>
    </div>
  );

  return (
    <section className="relative z-[10] flex flex-col w-full min-h-screen max-xl:min-h-auto pt-18 bg-[var(--color-brown3)] pb-20 items-center overflow-hidden">
      <div className="max-w-4xl w-full mx-auto sm:p-8 p-4 sm:pt-8  text-center z-10 mb-8 max-lg:mb-0 ">
        <Heading size="sm" color="white">
          <span className='text-[#DBC1A2]'>
          instant prizes</span> unbox & win instantly
        </Heading>
      </div>

      <div className=" w-full flex justify-center mt-8 max-lg:mt-0 p-8">
        <button
         onClick={goPrev}
         disabled={isFirstPage}
          // onClick={() => splideRef.current?.go('<')}
          className={`absolute max-lg:hidden right-48 top-[12%]  font-bold z-10  cursor-pointer hover:scale-110 duration-200 transition-all ${
            isFirstPage ? '  cursor-not-allowed text-gray-200' : 'text-black'
          }`}
        >
          <ChevronLeft size={48} />
        </button>

        <Splide
          ref={splideRef}
          options={{
            type: 'slide',
            perPage: 3,
            perMove: 1,
            gap: '1rem',
            pagination: false,
            arrows: false,
            breakpoints: {
              1274: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
          }}
          className="w-full sm:px-20 px-0 "
        >
          {instantCards.map((card) => (
            <SplideSlide  key={card.id}>{renderCard(card)}</SplideSlide>
          ))}
        </Splide>

        <button
           onClick={goNext}
           disabled={isLastPage}
          // onClick={() => splideRef.current?.go('>')}
          className={`absolute max-lg:hidden right-20 top-[12%] font-bold  z-10 cursor-pointer hover:scale-110 duration-200 transition-all ${
            isLastPage ? 'text-gray-200 cursor-not-allowed' : 'text-black'
          }`}
        >
          <ChevronRight size={48} />
        </button>
      </div>

      <div className='w-[100vw] absolute bottom-0 z-50'>
        <Image
          src={`/images/awardsTop.png`}
          width={2000}
          height={1000}
          alt="te"
          className='w-full'

        />
      </div>


    </section>
  );
};

export default InstantPrizes;
