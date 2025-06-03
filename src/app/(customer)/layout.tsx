// src/context/CartContext.tsx
'use client';

import CartDrawer from '@/src/components/cart/Cart';
import Navbar from '@/src/components/Navbar';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product, variant: Variant, quantity?: number) => void;
  removeFromCart: (variantId: string) => void;
  clearCart: () => void;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartOpen: boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'my-shop-cart';

export default function  CartProvider ({ children }: { children: ReactNode })   {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        setCartItems(JSON.parse(stored));
      } catch {
        console.warn('Failed to parse cart data');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, variant: Variant, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.variant.id === variant.id);
      if (existing) {
        return prev.map(item =>
          item.variant.id === variant.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, variant, quantity }];
    });
  };

  const removeFromCart = (variantId: string) => {
    setCartItems(prev => prev.filter(item => item.variant.id !== variantId));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, cartOpen, setCartOpen }}>
         <Navbar />
      {children}

    

    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
