

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




// const Star = ({ imgName,  }) => {
//   return (
//     <Image
//       src={`/images/${imgName}.png`}
//       width={400}
//       height={400}
//       alt={imgName}
//       className={`w-28 h-28`}
//     />
//   );
// };


// const SmallStar = ({ imgName,  }) => {
//   return (
//     <Image
//       src={`/images/${imgName}.png`}
//       width={200}
//       height={200}
//       alt={imgName}
//       className={`w-12 h-12`}
//     />
//   );
// };

const Slide = ({ item, offset, centerIndex, i }) => {
  const rotate = offset * -10;
  const translateY = Math.abs(offset) * -40;
  const scale = offset === 0 ? 1 : 0.9;
  const bgUrl = `/images/awardsBg${item.id}.png`;

  console.log("centerIndex", centerIndex, "i", i, "offset", offset);
  return (  
    <motion.div
      className={`w-[250px] h-[400px] relative bg-center bg-contain bg-no-repeat flex items-center justify-center rounded-xl overflow-hidden ${centerIndex !== (i) && "max-xl:invisible" }`}
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
    <div className="w-full flex flex-col justify-center items-center gap-4 bg-[#FFEB03] py-28 max-xl:px-8 overflow-hidden">



      <div className="w-full flex justify-center items-end  gap-4 ">
          
         <Image
      src={`/images/star1.png`}
      width={400}
      height={400}
      alt={"Star1"}
      className={`w-28 h-28 max-xl:hidden`}
    />
         <Heading color="white" size="sm" className="text-center">
           cumulative rewards
           <br />
           collect more, win more
         </Heading>
         <Image
      src={`/images/star2.png`}
      width={400}
      height={400}
      alt={"Star2"}
      className={`w-28 h-28 max-xl:hidden`}
    />
       </div>

       <div className="w-full flex justify-between items-center max-w-[30%]   px-12  max-xl:hidden ">
          
         <Image
      src={`/images/star3.png`}
      width={200}
      height={200}
      alt={"Star3"}
      className={`w-12 h-12`}
    />


        <Image
      src={`/images/star4.png`}
      width={200}
      height={200}
      alt={"Star4"}
      className={`w-12 h-12`}
    />
          
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
            return <Slide key={item.id} item={item} offset={offset} centerIndex={centerIndex} i={i} />;
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
