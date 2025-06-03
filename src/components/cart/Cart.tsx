'use client';

import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useEffect, useState } from 'react';
 
import {   Trash2 } from 'lucide-react';
import CheckoutButton from './CheckoutButton';

type Variant = {
  id: string;
  title: string;
  price: { amount: string; currencyCode: string };
  compareAtPrice?: { amount: string; currencyCode: string } | null;
  image?: { url: string; altText: string | null };
};

type Product = {
  id: string;
  title: string;
  variants: { edges: { node: Variant }[] };
};

type CartItem = {
  product: Product;
  variant: Variant;
  quantity: number;
};

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  removeFromCart
}: {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  removeFromCart: ( variantId: string) => void;
}) {




 

  const [totalPrice, setTotalPrice] = useState( 0);
   
  const [drawerSize, setDrawerSize] = useState<number | string>(500);

useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setDrawerSize('100%'); // Full width on mobile
    } else if (width < 1024) {
      setDrawerSize(400); // Medium on tablets
    } else {
      setDrawerSize(500); // Full size on desktop
    }
  };

  handleResize(); // Call once on mount
  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
}, []);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => {
      const price = parseFloat(item.variant.price.amount);
      return sum + price * item.quantity;
    }, 0);
    setTotalPrice(total);
  } , [cartItems]);






  return (
    <Drawer open={isOpen} onClose={onClose} direction="right"  size={drawerSize}   >
      <div className=" w-full flex flex-col justify-start items-start p-16 h-full bg-white shadow-lg">
        <h2 className="text-xl font-bold mb-4   ">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex gap-4">
                <img
                  src={item.variant.image?.url}
                  alt={item.variant.image?.altText || ''}
                  width={60}
                  className="rounded"
                />
                <div>
                  <p className="font-semibold">{item.product.title}</p>
                  <p className="text-sm text-gray-600">{item.variant.title}</p>
                  <p className="text-sm">
                    $ {item.variant.price.amount}
                    {item.variant.compareAtPrice && (
                      <span className="line-through ml-2 text-gray-400">
                        {item.variant.compareAtPrice.amount}
                      </span>
                    )}
                  </p>
                  <p className="text-sm">Qty: {item.quantity}</p>
                </div>
                     
                <button
                  onClick={() => removeFromCart(item.variant.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 border-t pt-4 w-full flex justify-between items-center">
          <span className="font-semibold">Total:</span>
          <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
        </div>
        <div   className="w-full text-center mt-4 cursor-pointer px-8 py-4 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
          <CheckoutButton onClose={onClose} cartItems={cartItems.map((el) => {
            return {
              variantId: el.variant.id,
              quantity: el.quantity
            }
          })} />

          
        </div>
        <button onClick={onClose} className="w-full text-center mt-4 cursor-pointer px-8 py-4   bg-gray-200 text-black rounded hover:bg-gray-300 transition-colors">
            Cancel
          </button>
      </div>
    </Drawer>
  );
}
