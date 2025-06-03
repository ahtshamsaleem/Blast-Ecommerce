"use client";

import Image from "next/image";
import { Instagram, Music2, X as TwitterX } from "lucide-react";
import Heading from "../ui/Heading";

const CommunityJoin = () => {
  return (
    <section className="relative text-center h-screen bg-[var(--color-blue)] text-white py-20 px-4 flex flex-col items-center justify-center">
         <div className="flex items-center justify-center gap-4 mb-6">
            <Heading size="xs" style={{ textShadow: "none" }} color="white">
            JOIN</Heading> 
            <Image
              src="/images/shovel.png"
              alt="shovel"
              width={0}
              height={0}
              sizes="(max-width: 640px) 32px, 72px"
              className=" w-[clamp(32px,15vw,72px)] h-auto  "
            />
         </div>
      

      
      <Heading size="lg">
          THE BLAST <br  /> COMMUNITY.
      </Heading>

      <div className="flex items-center justify-center gap-6 mt-10 mb-60">
        <div className="bg-[#E65A25] p-4 rounded-[12px] shadow-[4px_6px_0px_rgba(0,0,0,0.3)]">
          <Instagram className="w-6 h-6 text-white" />
        </div>
        <div className="bg-[#2BB673] p-4 rounded-[12px] shadow-[4px_6px_0px_rgba(0,0,0,0.3)]">
          <Music2 className="w-6 h-6 text-white" />
        </div>
        <div className="bg-[#F8E71C] p-4 rounded-[12px] shadow-[4px_6px_0px_rgba(0,0,0,0.3)]">
          <TwitterX className="w-6 h-6 text-black" />
        </div>
      </div>

    <Image
  src="/images/character.png"
  alt="Character"
  width={322}
  height={283}
  className="absolute z-2 bottom-15 left-1/2 -translate-x-1/2   drop-shadow-[-68px_3px_17px_rgba(0,0,0,0.25)]"
/>

           <div className="absolute -bottom-[12.5%]   left-0 w-full z-0">
              <Image
                src="/images/footer.png"
                alt="yellow vector"
                width={1440}
                height={100}
                className="w-full h-auto pointer-events-none   rotate-180"
              />
            </div>
    </section>
  );
};

export default CommunityJoin;
