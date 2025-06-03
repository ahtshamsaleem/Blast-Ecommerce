"use client";

import Image from "next/image";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Text from "../ui/Text";

const mockProducts = [
  {
    id: 1,
    name: "BLAST! Gold Rush",
    tag: "Gold",
    price: "$34.99",
    rating: 5,
    image: "/images/cards/yellow-product.png",
    tagColor: "bg-yellow-400",
  },
  {
    id: 2,
    name: "BLAST! Diamond Strike",
    tag: "Diamond",
    price: "$34.99",
    rating: 5,
    image: "/images/cards/white-product.png",
    tagColor: "bg-blue-200",
  },
  {
    id: 3,
    name: "BLAST! Gemstone Hunt",
    tag: "Gemstone",
    price: "$34.99",
    rating: 5,
    image: "/images/cards/brown-product.png",
    tagColor: "bg-amber-700",
  },
];

const SearchResults = () => {
  return (
    <section className="bg-[var(--color-blue)] min-h-screen w-full px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <div className="w-full lg:w-[250px] border-r border-white pr-6">
          <Heading size="sm" className="text-white mb-6">
            Search results for
          </Heading>
          <Text className="text-white italic mb-6">"BOX"</Text>

          <select className="w-full border border-black rounded-md py-2 px-3 mb-6">
            <option>Variants</option>
          </select>

          <div className="flex flex-col gap-4">
            <button className="border-2 border-white bg-white text-[var(--color-blue)] font-bold py-2 rounded-md">
              Individual Products
            </button>
            <button className="border-2 border-white text-white font-bold py-2 rounded-md">
              Master Boxes
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {mockProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow-md border border-black/80 text-center hover:scale-105 transition-transform duration-200"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto mb-4 h-[160px] object-contain"
              />
              <Text className="font-bold mb-1 text-black">{product.name}</Text>
              <div
                className={`inline-block px-3 py-1 rounded-full text-white text-sm font-bold mb-2 ${product.tagColor}`}
              >
                {product.tag}
              </div>
              <Text className="text-yellow-600 font-bold text-lg mb-1">
                {product.price}
              </Text>
              <Text className="text-sm text-black mb-1">Rating</Text>
              <div className="flex justify-center gap-1">
                {Array.from({ length: product.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
