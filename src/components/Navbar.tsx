"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Search,
  ShoppingCart,
} from "lucide-react";
import Button from "./ui/Button";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import CartDrawer from "./cart/Cart";
import { useCart } from "../app/[locale]/(customer)/layout";
 

const navItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/buy" },
  { label: "Our boxes", href: "/our-boxes" },
  { label: "Awards", href: "/awards" },
  { label: "Contact", href: "/contact" },
];

const languages = [
  { label: "English", short: "en" },
  { label: "Argentina", short: "fr" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isBuyPage = pathname.includes("/buy") || pathname.includes("/product");

  const handleNavClick = () => setMenuOpen(false);

  

  const backgroundColorClass =
    pathname.includes("/awards")
      ? "bg-[var(--color-brown3)] hidden"
      : pathname.includes("/contact")
      ? "bg-[var(--color-orange)]"
      : "bg-[var(--color-blue)]";


 

  const {    setCartOpen, cartOpen , cartItems, removeFromCart } = useCart()

 
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale; // Replace current locale
    router.push(segments.join('/'));
  };

  return (
    <header className={clsx("w-full px-6 lg:px-16 py-6 lg:py-12 ", backgroundColorClass)}>
               <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} cartItems={cartItems} removeFromCart={removeFromCart}  />


      <nav className="max-w-screen-xl mx-auto flex items-center justify-between gap-8">
        <div className="flex items-center">
          <Link href="/" onClick={handleNavClick}>
            <Image
              src="/logo.png"
              alt="Blast logo"
              width={191}
              height={76}
              priority
              className="object-contain hidden lg:block"
            />
          </Link>
          <Link href="/" onClick={handleNavClick}>
            <Image
              src="/logo.png"
              alt="Blast logo"
              width={89}
              height={36}
              priority
              className="object-contain lg:hidden"
            />
          </Link>
        </div>

        <ul className="hidden lg:flex flex-row items-center gap-[38px] flex-grow justify-center">
          {navItems.map(({ label, href }) => (
            <li
              key={label}
              className={clsx(
                "text-[#242424] text-[18px] leading-[22px] hover:opacity-80 cursor-pointer",
                label === "Our boxes" && "flex items-center gap-1"
              )}
            >
              <Link href={href} onClick={handleNavClick}>
                <div className="flex items-center gap-1">
                  {label}
                  {label === "Our boxes" && <ChevronDown size={18} />}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative flex items-center gap-4 lg:gap-8">
          {!isBuyPage && (
            <>
              <div
                className="flex items-center gap-2 text-[#242424] text-[18px] cursor-pointer relative"
                onClick={() => setLangOpen(!langOpen)}
              >
                <ChevronDown size={16} className="-rotate-90" />
                <span className="hidden lg:inline">English</span>
                <span className="lg:hidden">EN</span>
                <AnimatePresence>
                  {langOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-8 left-0 bg-white rounded shadow p-2 z-10"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.label}
                          
                          className="text-[#242424] px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setLangOpen(false)
                                switchLanguage(lang.short)
                          }}
                        >
                          <span className="hidden lg:inline">{lang.label}</span>
                          <span className="lg:hidden">{lang.short}</span>
                        </button>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <div className="hidden lg:block">
                <Button onClick={()=>router.push("/buy")} label="Buy now" size="md" />
              </div>
            </>
          )}

          {isBuyPage && (
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="rounded-md bg-white pl-10 pr-3 py-2 text-black w-[160px] lg:w-[244px] text-sm border border-black outline-none"
                />
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-black"
                />
              </div>
              <ShoppingCart className="cursor-pointer" size={24} color="#000" onClick={() => setCartOpen(true)}/>

                 {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
            </div>
          )}

          <div className="lg:hidden">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: menuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer"
            >
              {menuOpen ? (
                <X size={32} color="#fff" />
              ) : (
                <Menu size={32} color="#fff" />
              )}
            </motion.div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="py-14 lg:hidden flex flex-col items-center gap-8"
          >
            {!isBuyPage && (
              <Button label="Buy now" size="md" className="!w-full" />
            )}
            {navItems.map(({ label, href }) => (
              <li
                key={label}
                className={clsx(
                  "list-none text-[18px] text-[#242424] cursor-pointer",
                  label === "Our boxes" && "flex items-center gap-1"
                )}
              >
                <Link href={href} onClick={handleNavClick}>
                  <div className="flex items-center gap-1">
                    {label}
                    {label === "Our boxes" && <ChevronDown size={18} />}
                  </div>
                </Link>
              </li>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
