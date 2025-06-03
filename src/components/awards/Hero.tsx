'use client';

import Image from "next/image";

import Button from "../ui/Button";
import Heading from "../ui/Heading";

import CustomNavbar from "./CustomNavBar";

const Hero = () => {
  return (
<>

<section className="relative z-[50]  mt-0 flex flex-col  w-full  min-h-screen max-lg:min-h-[70vh]  bg-[var(--color-brown3)] items-center justify-start overflow-hidden">
<CustomNavbar />
      

      <div className="z-10 flex flex-col items-center justify-center text-center gap-7 w-full max-w-screen-sm px-6 pt-20 ">
        <Heading size="md">
          instant <span className="text-[var(--color-brown3)]  " style={{ WebkitTextStroke: '1px white' }}>& big</span> rewards 
        </Heading>
        {/* <Text size="lg">
          Every Dig Kit hides instant win prizes, and gems to collect massive rewards. Ready to see what&apos;s inside?
        </Text> */}
        <Button label="Buy Now" size="md" />
      </div>

      

      <div className="absolute -bottom-20 max-lg:top-0 left-0 w-full z-[9999] pointer-events-none">
        <Image
          src="/images/awardsHero.png"
          alt="orange vector"
          width={1440}
          height={100}
          className="w-full h-screen max-lg:h-[100%]   pointer-events-none "
        />




<div className="absolute bottom-[20%] right-[10%] w-full z-[9999] pointer-events-none flex justify-center items-center ">
        <Image
          src="/images/awardsHammer.png"
          alt="orange vector"
          width={1440}
          height={1000}
          className="w-[160px] h-auto pointer-events-none "
        />
        </div>



      </div>


     




      <div className="lg:hidden absolute  -bottom-10 max-lg:bottom-2 left-0 w-full z-[9999] pointer-events-none flex justify-center items-center ">
        <Image
          src="/images/awardsJewel.png"
          alt="orange vector"
          width={1440}
          height={1000}
          className="w-[30vw] max-lg:w-[50vw] max-md:w-[70vw] h-auto pointer-events-none "
        />
        </div>



    </section>

    <div className="max-lg:hidden absolute  -bottom-6 max-lg:bottom-2 left-0 w-full z-[9999] pointer-events-none flex justify-center items-center drop-shadow-amber-100 drop-shadow-md ">
        <Image
          src="/images/awardsJewel.png"
          alt="orange vector"
          width={1440}
          height={1000}
          className="w-[30vw] max-lg:w-[50vw] max-md:w-[70vw] h-auto pointer-events-none "
        />
        </div>




</>
  );
};

export default Hero;
