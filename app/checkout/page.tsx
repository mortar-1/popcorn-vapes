'use client';
import Page from "@/components/page/page";
import Product from "@/components/product/product";
import ShoppingCart from "@/components/shoppingCart/shoppingCart";
// import { CartProvider } from "@/globals/contexts/Cart";
import React from "react";


const ShoppingCartCurrent = () => {
  return (
    // <CartProvider>
    <>
    <h1>Checkout</h1>
      <ShoppingCart />
    </>
      
    // </CartProvider>
  );
};

export default function CheckoutPage() {
  return (
    <Page>
      <ShoppingCartCurrent />
    </Page>
  );
}
