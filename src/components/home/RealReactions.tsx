"use client";

import Image from "next/image";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslations } from "next-intl";

const videos = [
  {
    id: 1,
    thumbnail: "/images/reactions/1.jpg",
    bg: "yellow",
    text: "View all unboxings",
  },
  {
    id: 2,
    thumbnail: "/images/reactions/2.jpg",
    bg: "orange",
    text: "View all unboxings",
  },
  {
    id: 3,
    thumbnail: "/images/reactions/3.jpg",
    bg: "green",
    text: "Get Your Box",
  },
  {
    id: 4,
    thumbnail: "/images/reactions/4.jpg",
    bg: "blue",
    text: "Get Your Box",
  },
];

const colorClasses: Record<'yellow' | 'orange' | 'green' | 'blue', string> = {
  yellow: "bg-[var(--color-yellow)]",
  orange: "bg-[var(--color-orange)]",
  green: "bg-[var(--color-green)]",
  blue: "bg-[var(--color-blue)]",
};


const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const ReactionsCarousel = () => {
  const t = useTranslations();
  return (
    <section className="relative flex flex-col w-full sm:h-full h-screen  items-center overflow-hidden">
      <Carousel
        responsive={responsive}
         arrows
        keyBoardControl
        autoPlay={false}
        showDots={false}
        containerClass="w-full"
        itemClass="w-full sm:h-full h-screen"
      >
        {videos.map((item) => (
<div
  key={item.id}
  className={`w-full h-full ${colorClasses[item.bg as keyof typeof colorClasses]} flex items-center justify-center  py-40  px-10`}
>

            <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center gap-[86px]">
         <div className="relative w-[clamp(267px,40vw,504px)] h-[clamp(368px,65vw,828px)] rounded-[59px] overflow-hidden mx-auto md:mx-0">
  <Image
    src={item.thumbnail}
    alt="video thumbnail"
    fill
    className="object-cover rounded-[59px]"
  />
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="p-2">
      <Image src="/images/play-icon.svg" alt="Play" width={40} height={40} />
    </div>
  </div>
</div>


              <div className="flex-1 max-w-xl gap-6 flex flex-col items-center sm:items-start">
                <Heading size="md" className="mb-4">    
                {t("reaction_h1")}<br /> {t("reaction_h2")}
                </Heading>
                <Text size="xl" className="mb-6">
                  {t("reaction_t1")}
                  </Text>
                <Button label={item.text} size="xl" />
              </div>
            </div>
            <div className="absolute top-0  bg-[var(--color-blue)] left-0 w-full z-0">
              <Image 
                src= {`/images/${item.bg}-vector.png`}
                alt="yellow vector"
                width={1440}
                height={100}
                className="w-full h-auto pointer-events-none"  
              />
            </div>
          </div>
        ))}
      </Carousel>

      <div className="absolute bottom-0 left-0 w-full z-0">
        <Image
          src="/images/green-vector.png"
          alt="green vector"
          width={1440}
          height={100}
          className="w-full h-auto pointer-events-none"  
        />
      </div>

    </section>
  );
};

export default ReactionsCarousel;

