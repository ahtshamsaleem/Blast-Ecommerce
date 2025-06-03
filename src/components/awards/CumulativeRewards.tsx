// "use client";

// import React, { useRef } from "react";
// import Heading from "../ui/Heading";
// import Image from "next/image";
// import Text from "../ui/Text";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/splide.min.css";
// import type { Splide as SplideClass } from "@splidejs/splide";
// import Button from "../ui/Button";

// const Star = ({ imgName, w, h }) => {
//   return (
//     <Image
//       src={`/images/${imgName}.png`}
//       width={200}
//       height={200}
//       alt={imgName}
//       className={`w-${w} h-${h}`}
//     />
//   );
// };


// const slidesArr = [
   
//     {
//         id: 1,
//         heading: 'Home Essentials',
//         text: 'Appliances Gift Card',
//         para: 'Use on kitchen tools & smart appliances.',
//         btnLabel: '→ Shop Appliances',
//         bgClr: '#2caa66'
//     },

//     {
//         id: 2,
//         heading: 'Sportswear Card',
//         text: 'Outfit your active life.',
//         para: 'Redeem for activewear & fitness gear.',
//         btnLabel: '→ View Sportswear',
//         bgClr: '#2e2c7d'
//     },

//     {
//         id: 3,
//         heading: 'Perfumes',
//         text: 'Fragrances & Beauty',
//         para: 'Top Perfumes & skincare finds.',
//         btnLabel: '→ Visit Rouge',
//         bgClr: '#e74f1c'
//     },

//     {
//         id: 4,
//         heading: 'Nike Gift Card',
//         text: 'Gear Up with Nike',
//         para: 'Choose from sneakers, apparel & accessories.',
//         btnLabel: '→ Browse Nike',
//         bgClr: '#2caa66'
//     },

//     {
//         id: 5,
//         heading: 'BigBox Experience',
//         text: 'Fine dining, fully covered',
//         para: 'Gourmet tasting menus & dining experiences.',
//         btnLabel: '→ Explore Bigbox',
//         bgClr: '#37a6df'
//     },
// ]

// const CumulativeRewards = () => {
//   const splideRef = useRef<SplideClass | null>(null);

 
// const slides = [1, 2, 3, 4, 5];
// const centerIndex = Math.floor(slides.length / 2);

//   return (
//     <div className="bg-[#FFEB03] w-full flex flex-col justify-start items-center py-12 ">
//       <div className="w-full flex justify-center items-end  gap-4 ">
//         <Star imgName={"Star1"} w={16} h={16} />
//         <Heading color="white" size="sm" className="text-center">
//           cumulative rewards
//           <br />
//           collect more, win more
//         </Heading>
//         <Star imgName={"Star2"} w={16} h={16} />
//       </div>

//       <div className="w-full flex justify-between items-center max-w-[30%]   px-12   ">
//         <Star imgName={"Star3"} w={6} h={6} />

//         <Star imgName={"Star4"} w={6} h={6} />
//       </div>

//       <div className="w-full flex justify-center items-end  gap-4 max-w-lg">
//         <Text color="black" size="base" className="text-center">
//           Gather gems from each box and trade them for bigger rewards—every 5
//           gems = $300 worth of exclusive prizes. Keep collecting and cashing in!
//         </Text>
//       </div>

//       <div className="w-full h-auto  ">
//         <Splide
//           ref={splideRef}
//           options={{
//             type: "slide",
//             perPage: 5,
//             perMove: 1,
//             gap: "1rem",
//             pagination: true,
//             arrows: false,
//             breakpoints: {
//               1274: {
//                 perPage: 2,
//               },
//               640: {
//                 perPage: 1,
//               },
//             },
//           }}
//           className="w-full sm:px-0 px-0 py-12 " 
//         >

// {slidesArr.map((item, i) => {
//   const offset = i - centerIndex;

//   let rotateDeg = 0;
//   let translateY = 0;

//   if (offset < 0) {
//     // Left side
//     rotateDeg = Math.min(Math.abs(offset) * 10, 10);      // Max 20deg
//     translateY = -Math.abs(offset) * 40;                   // -10px, -20px
//   } else if (offset > 0) {
//     // Right side
//     rotateDeg = -Math.min(Math.abs(offset) * 10, 10);      // Max -20deg
//     translateY = -Math.abs(offset) * 40;
//   }

//   const bgUrl = `/images/awardsBg${item.id}.png`

//   return (
//     <SplideSlide key={item.id}>
//       <div
//         className={`w-full h-[450px] relative flex items-center justify-center px-8 py-8 mt-32
//          bg-no-repeat bg-contain bg-center rounded-xl overflow-hidden transition-transform duration-300 `}
//         style={{
//           backgroundImage: `url(${bgUrl})`,
//           transform: `rotate(${rotateDeg}deg) translateY(${translateY}px)`,
//         }}
//       >

//         {/* <div className={`absolute inset-0 bg-[#37a6df] opacity-80 z-0 rounded-xl`} /> */}


//         <div className="z-10 text-center text-white max-w-md space-y-3 flex justify-center items-center gap-5 flex-col  ">
//           <Heading size="xs" color="white" className="text-wrap max-w-md ">
//             {item.heading}
//           </Heading>
//           <Text color="white" className="px-4">{item.text}</Text>
//           <p className="text-white px-8">{item.para}</p>
//           <Button label={item.btnLabel} size="lg" active/>
//         </div>
//       </div>
//     </SplideSlide>
//   );
// })}
//         </Splide>
//       </div>
//     </div>
//   );
// };

// export default CumulativeRewards;































// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Heading from "../ui/Heading";
// import Image from "next/image";
// import Text from "../ui/Text";
// import Button from "../ui/Button";

// type SlideItem = {
//   id: number;
//   heading: string;
//   text: string;
//   para: string;
//   btnLabel: string;
// };  

// const slidesArr = [
//   {
//     id: 1,
//     heading: "Home Essentials",
//     text: "Appliances Gift Card",
//     para: "Use on kitchen tools & smart appliances.",
//     btnLabel: "→ Shop Appliances",
//   },
//   {
//     id: 2,
//     heading: "Sportswear Card",
//     text: "Outfit your active life.",
//     para: "Redeem for activewear & fitness gear.",
//     btnLabel: "→ View Sportswear",
//   },
//   {
//     id: 3,
//     heading: "Perfumes",
//     text: "Fragrances & Beauty",
//     para: "Top Perfumes & skincare finds.",
//     btnLabel: "→ Visit Rouge",
//   },
//   {
//     id: 4,
//     heading: "Nike Gift Card",
//     text: "Gear Up with Nike",
//     para: "Choose from sneakers, apparel & accessories.",
//     btnLabel: "→ Browse Nike",
//   },
//   {
//     id: 5,
//     heading: "BigBox Experience",
//     text: "Fine dining, fully covered",
//     para: "Gourmet tasting menus & dining experiences.",
//     btnLabel: "→ Explore Bigbox",
//   },
// ];

// const Slide = ({ item, offset }: { item: SlideItem; offset: number }) => {
//   const rotate = offset * -6;
//   const translateY = Math.abs(offset) * -40;
//   const scale = offset === 0 ? 1 : 0.9;
//   const zIndex = 5 - Math.abs(offset);
//   const xOffset = offset * 280;

//   return (
//     <motion.div
//       className="absolute top-0 left-1/2"
//       style={{ zIndex }}
//       animate={{
//         x: `${xOffset}px`,
//         rotate,
//         y: translateY,
//         scale,
//       }}
//       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//     >
//       <div className="w-[250px] h-[400px] bg-white rounded-xl shadow-xl flex flex-col items-center justify-center text-center px-4">
//         <Heading size="xs">{item.heading}</Heading>
//         <Text>{item.text}</Text>
//         <p>{item.para}</p>
//         <Button label={item.btnLabel} size="lg" active />
//       </div>
//     </motion.div>
//   );
// };

// const CumulativeRewards = () => {
//   const [centerIndex, setCenterIndex] = useState(2); // start from middle

//   const handleNext = () => {
//     setCenterIndex((prev) => Math.min(prev + 1, slidesArr.length - 1));
//   };

//   const handlePrev = () => {
//     setCenterIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const slideWidth = 250;
// const visibleSlides = 5;
// const groupOffset = (slideWidth * visibleSlides) / 2;

//   return (
//     <div className="relative w-full flex flex-col justify-center items-center bg-[#FFEB03] py-12 overflow-hidden">
//       <Heading color="white" size="sm" className="text-center mb-8">
//         cumulative rewards
//         <br />
//         collect more, win more
//       </Heading>

//       <div className="relative h-[400px] w-full max-w-6xl overflow-visible">
//   <div className="relative left-1/2" style={{ transform: `translateX(-${groupOffset}px)` }}>
//     <AnimatePresence initial={false}>
//       {slidesArr.map((item, i) => {
//         const offset = i - centerIndex;
//         if (Math.abs(offset) > 2) return null;
//         return <Slide key={item.id} item={item} offset={offset} />;
//       })}
//     </AnimatePresence>
//   </div>
// </div>

//       <div className="flex gap-4 mt-8">
//         <Button label="← Prev" onClick={handlePrev}  />
//         <Button label="Next →" onClick={handleNext}   />
//       </div>
//     </div>
//   );
// };

// export default CumulativeRewards;





























"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
 
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import Image from "next/image";

const slidesArr = [
  {
    id: 1,
    heading: "Home Essentials",
    text: "Appliances Gift Card",
    para: "Use on kitchen tools & smart appliances.",
    btnLabel: "→ Shop Appliances",
    bgClr: "#2caa66",
  },
  {
    id: 2,
    heading: "Sportswear Card",
    text: "Outfit your active life.",
    para: "Redeem for activewear & fitness gear.",
    btnLabel: "→ View Sportswear",
    bgClr: "#2e2c7d",
  },
  {
    id: 3,
    heading: "Perfumes",
    text: "Fragrances & Beauty",
    para: "Top Perfumes & skincare finds.",
    btnLabel: "→ Visit Rouge",
    bgClr: "#e74f1c",
  },
  {
    id: 4,
    heading: "Nike Gift Card",
    text: "Gear Up with Nike",
    para: "Choose from sneakers, apparel & accessories.",
    btnLabel: "→ Browse Nike",
    bgClr: "#2caa66",
  },
  {
    id: 5,
    heading: "BigBox Experience",
    text: "Fine dining, fully covered",
    para: "Gourmet tasting menus & dining experiences.",
    btnLabel: "→ Explore Bigbox",
    bgClr: "#37a6df",
  },
];




const Star = ({ imgName,  }) => {
  return (
    <Image
      src={`/images/${imgName}.png`}
      width={400}
      height={400}
      alt={imgName}
      className={`w-28 h-28`}
    />
  );
};


const SmallStar = ({ imgName,  }) => {
  return (
    <Image
      src={`/images/${imgName}.png`}
      width={200}
      height={200}
      alt={imgName}
      className={`w-12 h-12`}
    />
  );
};

const Slide = ({ item, offset }) => {
  const rotate = offset * -10;
  const translateY = Math.abs(offset) * -40;
  const scale = offset === 0 ? 1 : 0.9;
  const bgUrl = `/images/awardsBg${item.id}.png`;

  return (
    <motion.div
      className="w-[250px] h-[400px] relative bg-center bg-contain bg-no-repeat flex items-center justify-center rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
      animate={{
        rotate,
        y: translateY,
        scale,
        opacity: Math.abs(offset) > 2 ? 0 : 1,
        zIndex: 5 - Math.abs(offset),
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="z-10 text-white text-center max-w-[200px] space-y-3 flex flex-col items-center">
        <Heading size="xs" color="white">
          {item.heading}
        </Heading>
        <Text color="white">{item.text}</Text>
        <p>{item.para}</p>
        <Button label={item.btnLabel} size="lg" active />
      </div>
    </motion.div>
  );
};

const CumulativeRewards = () => {
  const [centerIndex, setCenterIndex] = useState(2); // center is index 2 (0-based)

  const next = () => {
    setCenterIndex((prev) => Math.min(prev + 1, slidesArr.length - 1));
  };

  const prev = () => {
    setCenterIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 bg-[#FFEB03] py-28">



      <div className="w-full flex justify-center items-end  gap-4 ">
         <Star imgName={"Star1"}  />
         <Heading color="white" size="sm" className="text-center">
           cumulative rewards
           <br />
           collect more, win more
         </Heading>
         <Star imgName={"Star2"}  />
       </div>

       <div className="w-full flex justify-between items-center max-w-[30%]   px-12   ">
         <SmallStar imgName={"Star3"} />

         <SmallStar imgName={"Star4"} />
       </div>

       <div className="w-full flex justify-center items-end  gap-4 max-w-lg">
         <Text color="black" size="base" className="text-center">
           Gather gems from each box and trade them for bigger rewards—every 5
           gems = $300 worth of exclusive prizes. Keep collecting and cashing in!
         </Text>
       </div>










      <div className="relative w-full max-w-6xl overflow-visible flex justify-center mt-8">
        <div className="flex items-center justify-center gap-4 transition-transform duration-500 ease-in-out  "
          style={{
            transform: `translateX(calc(50% - ${centerIndex * 270}px - 125px))`, // 270 includes width + gap
          }}
        >
          {slidesArr.map((item, i) => {
            const offset = i - centerIndex;
            return <Slide key={item.id} item={item} offset={offset} />;
          })}
        </div>
      </div>


      <div className="flex justify-center gap-8 mt-12 items-center w-full max-w-6xl mb-8">
        <button onClick={prev} className="text-xl bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors cursor-pointer">
          ←
        </button>
        <button onClick={next} className="text-xl bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors cursor-pointer">
          →
        </button>
      </div>



    </div>
  );
};

export default CumulativeRewards;
