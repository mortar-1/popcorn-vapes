import React, { createContext, useContext, useReducer, useEffect } from "react";
import { CartAction, CartContextProps, CartState } from "@/globals/types";
import cartReducer from "@/components/reducers";

export const CartContext = createContext<CartContextProps>(
  {
    state: { items: [] },
    dispatch: () => null,
    subtotal: 0,
  }
);

// export const getInitialState = (): CartState => {
//   const saved = localStorage.getItem("cart");
//   return saved ? JSON.parse(saved) : { items: [] };
// };

// interface CartProviderProps {
//   children: React.ReactNode;
// }

// export const CartProvider = (children: CartProviderProps) => {
//   return (children)
// }

export const useCart = () => useContext(CartContext);

// const [state, dispatch] = useReducer(cartReducer, undefined, getInitialState);

// useEffect(() => {
//   localStorage.setItem("cart", JSON.stringify(state));
// }, [state]);

// const subtotal = state.items.reduce(
//   (acc, item) => acc + item.price * item.quantity,
//   0
// );

// return (
//   <CartContext.Provider value={{ state, dispatch, subtotal }}>
//     {children}
//   </CartContext.Provider>
// );