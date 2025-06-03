"use client";

import Image from "next/image";
import Heading from "../ui/Heading";
import { useRef, useState, useLayoutEffect, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import { usePathname } from "next/navigation";

const imageData = [
  {
    src: "/images/ugc/2.jpg",
    className: "absolute z-[3] w-[clamp(320px,60vw,786px)] h-[clamp(201px,40vw,496px)] left-[100px] sm:left-[328px] top-[400px] sm:top-[156px]",
  },
  {
    src: "/images/ugc/1.jpg",
    className: "absolute z-[1] w-[clamp(140px,40vw,265px)] h-[clamp(140px,40vw,305px)] left-[41px] sm:left-[41px] top-[130px] sm:top-[184px]",
  },
  {
    src: "/images/ugc/3.jpg",
    className: "absolute z-[1] w-[clamp(120px,35vw,182px)] h-[clamp(90px,28vw,154px)] left-[4px] sm:left-[1px] top-[700px] sm:top-[611px]",
  },
  {
    src: "/images/ugc/4.jpg",
    className: "absolute z-[2] w-[clamp(200px,40vw,300px)] h-[clamp(160px,35vw,256px)] left-[280px] sm:left-[956px] top-[650px] sm:top-[619px]",
  },
  {
    src: "/images/ugc/6.jpg",
    className: "absolute z-[2] w-[clamp(200px,40vw,256px)] h-[clamp(320px,65vw,437px)] left-[300px] sm:left-[1279px] top-[20px] sm:top-[124px] -scale-x-100",
  },
  {
    src: "/images/ugc/8.jpg",
    className: "absolute z-[1] w-[clamp(200px,40vw,300px)] h-[clamp(120px,32vw,181px)] left-[560px] sm:left-[2650px] top-[60px] sm:top-[16px]",
  },
  {
    src: "/images/ugc/9.jpg",
    className: "absolute z-[3] w-[clamp(160px,38vw,265px)] h-[clamp(110px,26vw,152px)] left-[540px] sm:left-[1638px] top-[620px] sm:top-[509px]",
  },
  {
    src: "/images/ugc/10.jpg",
    className: "absolute z-[1] w-[clamp(320px,60vw,786px)] h-[clamp(201px,40vw,496px)] left-[800px] sm:left-[2413px] top-[300px] sm:top-[237px]",
  },
  {
    src: "/images/ugc/7.jpg",
    className: "absolute z-[3] w-[clamp(120px,35vw,182px)] h-[clamp(90px,28vw,154px)] left-[720px] sm:left-[1869px] top-[700px] sm:top-[711px]",
  },
  {
    src: "/images/ugc/5.jpg",
    className: "absolute z-[2] w-[clamp(200px,40vw,256px)] h-[clamp(200px,40vw,256px)] left-[950px] sm:left-[2646px] top-[600px] sm:top-[716px] -scale-x-100",
  },
];



const UGCScroll = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
const pathname = usePathname();
const isShopPage = pathname.includes('shop');

  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

useLayoutEffect(() => {
  if (scrollContentRef.current) {
    const fullScrollWidth = scrollContentRef.current.scrollWidth;
    const isMobile = window.innerWidth < 640;
    setScrollRange(isMobile ? fullScrollWidth * 0.4 : fullScrollWidth);
  }
}, []);


  const onResize = useCallback((entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(onResize);
    if (ghostRef.current) resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );

  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <section ref={sectionRef} className="relative w-full h-full bg-[var(--color-blue)]">
      <div className="sticky top-0 h-full overflow-hidden">
        <motion.div
          ref={scrollContentRef}
          style={{ x: spring }}
          className="relative h-[1000px] w-[4000px]"
        >
      {imageData.map((img, idx) => (
  <div key={idx} className={`${img.className} rounded-[10px] overflow-hidden`}>
    <Image
      src={img.src}
      alt={`ugc-${idx}`}
      fill
      className="object-cover"
    />
  </div>
))}

        </motion.div>

        <div className="absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2 z-30 text-white text-center pointer-events-none">
        <Heading size="base">
            WHAT YOU COULD UNLOCK <br /> WITH JUST ONE KIT
        </Heading>
        </div>



      </div>

      <div ref={ghostRef} style={{ height: scrollRange }} className="w-full" />

{isShopPage && (
  <div className="absolute bottom-0 left-0 w-full z-0">
    <Image
      src="/images/white-vector.png"
      alt="white vector"
      width={1440}
      height={100}
      className="w-full h-auto pointer-events-none"
    />
  </div>
)}

    </section>
  );
};

export default UGCScroll;
