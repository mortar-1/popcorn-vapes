'use client';
import Page from "@/components/page/page";
import Product from "@/components/product/product";
import ShoppingCart from "@/components/shoppingCart/shoppingCart";
import { CartProvider } from "@/globals/contexts/Cart";
import React from "react";


const ShoppingCartCurrent = () => {
  return (
    <CartProvider>
      <h1>My Store</h1>

      <Product id="1" name="Laptop" price={1200} />
      <Product id="2" name="Headphones" price={200} />
      <Product id="3" name="Keyboard" price={100} />

      <ShoppingCart />
    </CartProvider>
  );
};

export default function ProductsPage() {
  return (
    <Page>
      <ShoppingCart />
    </Page>
  );
}
