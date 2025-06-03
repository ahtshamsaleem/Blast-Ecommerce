'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Music2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative text-black pt-24 pb-10 overflow-hidden bg-[#FFEB03]">
      <div className="relative flex flex-col-reverse xl:flex-col  z-10 w-full mx-auto px-6 xl:px-10">
        {/* Top nav links */}
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-[162px] justify-start xl:px-[125px] mb-20 text-[18px] xl:text-[24px] leading-[24px] xl:leading-[30px]">
          <div className="flex flex-col gap-2">
            <span className="font-bold">Explore</span>
            <Link href="#">Home</Link>
            <Link href="#">Awards</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold">Support</span>
            <Link href="#">Contact</Link>
            <Link href="#">FAQ</Link>
            <Link href="#">Shipping</Link>
            <Link href="#">Returns</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold">Shop</span>
            <Link href="#">Our Bundles</Link>
            <Link href="#">Shop Page</Link>
          </div>
        </div>

        {/* Bottom row with background */}
        <div className="relative z-10 bg-none xl:bg-[url('/images/footer.png')] bg-bottom bg-no-repeat bg-contain">
          <div className="flex flex-col xl:flex-row justify-start xl:justify-between items-start xl:items-center gap-6 px-0 xl:px-[144px] pt-6 pb-16">
            {/* Logo + links */}
            <div className="flex flex-col xl:flex-row items-start xl:items-center gap-4 xl:gap-6 flex-wrap text-[18px] xl:text-[24px] leading-[24px] xl:leading-[30px]">
              <Image
                src="/logo.png"
                alt="Blast Logo"
                width={160}
                height={64}
                className="xl:w-[320px] xl:h-[128px]"
              />

<div className='flex flex-col items-start gap-4 xl:gap-6 xl:ml-4 ml-0'>
                  <div className="flex items-center gap-4 mt-4 xl:mt-0">
                <span>Privacy Policy</span>
                <div className="w-2 h-2 bg-black rounded-full" />
                <span>Contact Us</span>
              </div>
       {/* Social Icons */}
            <div className="flex gap-4 mt-4 xl:mt-0">
              <div className="w-[48px] h-[48px] flex items-center justify-center bg-black rounded-full p-3">
                <Music2 className="text-white" size={24} />
              </div>
              <div className="w-[48px] h-[48px] flex items-center justify-center bg-black rounded-full p-3">
                <Mail className="text-white" size={24} />
              </div>
            </div>
</div>
            </div>


     

            {/* Character image (hidden on mobile) */}
            <Image
              src="/images/character.png"
              alt="Character"
              width={322}
              height={283}
              className="absolute -top-[118%] right-3 hidden xl:block drop-shadow-[-68px_3px_17px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>

       
      </div>
       {/* Copyright */}
        <div className="mt-12 text-center text-[14px] xl:text-[18px] leading-[22px]">
          © 2025 Blast. All rights reserved.
        </div>
    </footer>
  );
};

export default Footer;
