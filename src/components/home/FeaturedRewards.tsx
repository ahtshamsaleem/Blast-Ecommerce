'use client';

import { useRef, useState, useLayoutEffect } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const tabs = ["Instant Prizes", "Cumulative Prizes"];

interface BaseCard {
  id: number;
  title: string;
  color: string;
}

interface CumulativeCard extends BaseCard {
  description: string;
  subtitle: string;
  buttonLabel: string;
  price?: number;
}

const instantCards: BaseCard[] = [
  { id: 1, color: "purple", title: "Trip to Disney for 1 person" },
  { id: 2, color: "blue", title: "iPhone 16" },
  { id: 3, color: "orange", title: "Playstation 5" },
  { id: 4, color: "purple", title: "Trip to Disney for 1 person" },
  { id: 5, color: "blue", title: "iPhone 16" },
  { id: 6, color: "orange", title: "Playstation 5" },
];

const cumulativeCards: CumulativeCard[] = [
  {
    id: 1,
    color: "brown",
    title: "HOME ESSENTIALS",
    description: "Use on kitchen tools & smart appliances.",
    subtitle: "Appliances Gift Card",
    buttonLabel: "→ Shop Appliances",
  },
  {
    id: 2,
    color: "grey",
    title: "SPORTSWEAR CARD",
    description: "Redeem for activewear & fitness gear.",
    subtitle: "Outfit your active life.",
    buttonLabel: "→ View Sportswear",
  },
  {
    id: 3,
    color: "yellow",
    title: "PERFUMES",
    description: "Top perfumes & skincare finds.",
    subtitle: "Fragrances & Beauty",
    buttonLabel: "→ Visit Rouge",
  },
  {
    id: 4,
    color: "brown",
    title: "HOME ESSENTIALS",
    description: "Use on kitchen tools & smart appliances.",
    subtitle: "Appliances Gift Card",
    buttonLabel: "→ Shop Appliances",
  },
  {
    id: 5,
    color: "grey",
    title: "SPORTSWEAR CARD",
    description: "Redeem for activewear & fitness gear.",
    subtitle: "Outfit your active life.",
    buttonLabel: "→ View Sportswear",
  },
  {
    id: 6,
    color: "yellow",
    title: "PERFUMES",
    description: "Top perfumes & skincare finds.",
    subtitle: "Fragrances & Beauty",
    buttonLabel: "→ Visit Rouge",
  },
];

const FeaturedRewards = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });
  const carouselRef = useRef<Carousel>(null);

  useLayoutEffect(() => {
    const el = tabRefs.current[activeTab];
    if (el) {
      const { offsetLeft, offsetWidth } = el;
      setSliderStyle({ left: offsetLeft - 50, width: offsetWidth + 100 });
    }
  }, [activeTab]);

  const isCumulativeCard = (
    card: BaseCard | CumulativeCard
  ): card is CumulativeCard =>
    "description" in card && "subtitle" in card && "buttonLabel" in card;

  const renderCard = (card: BaseCard | CumulativeCard) => (
    <div
      key={card.id}
      className="relative flex flex-col items-center p-4 sm:p-5 space-between 
        w-[clamp(180px,50vw,358px)] 
        h-[clamp(250px,70vw,422px)] 
        m-auto sm:m-0
        shrink-0"
    >
      <Image
        src={`/images/cards/${card.color}-card.png`}
        alt="card"
        fill
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 top-[10%] sm:top-[20%] text-center w-full px-4 h-auto flex flex-col items-center justify-between">
        {activeTab === 0 ? (
          <Text color="white">{card.title}</Text>
        ) : (
          <Heading size="xs" color="white">
            {card.title}
          </Heading>
        )}

        {isCumulativeCard(card) && (
          <>
            <Text size="xl" color="white" className="mt-10">
              {card.subtitle}
            </Text>
            <Text color="white" className="mb-3">
              {card.description}
            </Text>
          </>
        )}

        {activeTab === 0 ? (
          <div>
            <div className="font-arco text-[clamp(72px,10vw,120px)] text-center text-white/50 mb-3">
              {card.id}
            </div>
            <Button
              label="Click to reveal!"
              active
              size="lg"
              className="mx-auto !w-[105px] sm:!w-[176px]"
            />
          </div>
        ) : (
          isCumulativeCard(card) && (
            <Button
              label={card.buttonLabel}
              active
              size="lg"
              className="mx-auto !w-[105px] sm:!w-[176px]"
            />
          )
        )}
      </div>
    </div>
  );

  const cardsToRender: (BaseCard | CumulativeCard)[] =
    activeTab === 0 ? instantCards : cumulativeCards;

  return (
    <section className="relative flex flex-col w-full min-h-screen bg-[var(--color-white)] pb-20 items-center overflow-hidden">
      <div className="relative z-10 max-w-7xl sm:p-8 p-4 sm:pt-8 !pt-18 w-full mx-auto flex flex-col items-center text-center gap-10 mb-8">
        <Heading size="md" color="black">
          Featured Rewards
        </Heading>
        <Text>
          From box to surprise in just minutes. Here&apos;s how the fun begins.
        </Text>
      </div>

      <div className="relative w-screen h-full sm:h-[174px] z-0 bg-[url('/images/orange-bg.png')] bg-no-repeat bg-center bg-cover sm:mb-20 mb-5">
        <div className="relative flex justify-center items-center h-full gap-[120px]">
          <motion.div
            className="absolute h-[91%] bg-[#E7AF9C] rounded-sm z-0 translate-y-[2px]"
            animate={sliderStyle}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {tabs.map((tab, idx) => (
            <button
              key={idx}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              onClick={() => setActiveTab(idx)}
              className="relative z-10 px-8 py-4 cursor-pointer text-xl transition-all duration-300"
            >
              <Text size="custom32">{tab}</Text>
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full flex justify-center mt-8 p-8">
        <button
        onClick={() => carouselRef.current?.previous(1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronLeft size={32} />
        </button>

        <Carousel
          ref={carouselRef}
          additionalTransfrom={0}
          arrows={false}
          autoPlay={false}
          centerMode={false}
          className="w-full sm:px-20 px-0"
          containerClass="carousel-container"
          draggable
          focusOnSelect={false}
          infinite={false}
          itemClass="px-4"
          keyBoardControl
          minimumTouchDrag={80}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1274 },
              items: 3,
              partialVisibilityGutter: 40,
            },
            tablet: {
              breakpoint: { max: 1274, min: 640 },
              items: 2,
              partialVisibilityGutter: 30,
            },
            mobile: {
              breakpoint: { max: 640, min: 0 },
              items: 1,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {cardsToRender.map(renderCard)}
        </Carousel>

        <button
          onClick={() => carouselRef.current?.next(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default FeaturedRewards;
