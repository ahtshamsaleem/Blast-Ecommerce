"use client";

import Image from "next/image";
import { useState } from "react";
import Heading from "../ui/Heading";
import Text from "../ui/Text";
import Button from "../ui/Button";

const ContactUs = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    file: null,
  });

  return (
    <section className="relative h-full bg-[var(--color-orange)] bg-[url('/images/contact/bg.png')] bg-[length:88%_88%] bg-center bg-no-repeat text-white flex flex-col items-center justify-center px-6 py-20">
      <form className="w-full max-w-4xl flex flex-col items-center gap-6 z-10 p-5 sm:p-10">
        <Heading size="base" color="white" style={{textShadow :"none"}} >
          CONTACT US
        </Heading>

        <div className="w-full flex flex-col md:flex-row gap-6">
          <div className="w-full relative">
            <Image src="/images/contact/left-input.png" alt="first name" width={600} height={60} className="w-full h-auto" />
            <input
              type="text"
              placeholder="First Name"
              className="absolute inset-0 w-full h-full px-4 text-black bg-transparent outline-none"
            />
          </div>

          <div className="w-full relative">
            <Image src="/images/contact/right-input.png" alt="last name" width={600} height={60} className="w-full h-auto" />
            <input
              type="text"
              placeholder="Last Name"
              className="absolute inset-0 w-full h-full px-4 text-black bg-transparent outline-none"
            />
          </div>
        </div>

        <div className="w-full relative">
          <Image src="/images/contact/middle-input.png" alt="email" width={600} height={60} className="w-full h-auto" />
          <input
            type="email"
            placeholder="Email"
            className="absolute inset-0 w-full h-full px-4 text-black bg-transparent outline-none"
          />
        </div>

        <div className="w-full relative">
          <Image src="/images/contact/text-area.png" alt="message" width={600} height={200} className="w-full h-auto" />
          <textarea
            placeholder="Your message"
            className="absolute inset-0 w-full h-full px-4 py-2 text-black bg-transparent resize-none outline-none"
          ></textarea>
        </div>

        <div className="w-full relative">
          <Image src="/images/contact/middle-input.png" alt="file" width={600} height={60} className="w-full h-auto" />
          <input
            type="file"
            className="absolute inset-0 w-full h-full text-black opacity-0 cursor-pointer"
          />
          <span className="absolute inset-0 flex items-center justify-center text-black text-sm pointer-events-none">
            Submit proof
          </span>
        </div>

        <div className="w-full flex justify-end">
          <Button label="Send it!" size="sm" className="bg-black text-white" />
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
