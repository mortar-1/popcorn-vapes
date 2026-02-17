import { PaletteMode } from '@mui/material';
import { Url } from 'next/dist/shared/lib/router/router';
import { Dispatch } from 'react';

export interface UserProps {
  id: string;
  name: string;
  email: string;
  password: string;
  imgUrl: string;
}

export type User = UserProps | undefined;

export type Age = number;

export type Theme = PaletteMode;

export interface NavItemProps {
  href?: Url;
  title: string;
  onClick?: () => void | MouseEvent;
}

export type NavItem = NavItemProps;

export type Name = string;

export type NameContextProps = [Name, Dispatch<Name>];

export interface ProductProps {
  id: string;
  name: string;
  subtext?: string;
  price: number;
  description?: string;
  imgSrc?: string;
}

export type Product = ProductProps;

export type CartContextProps = {
  state: CartState;
  dispatch: Dispatch<CartAction>;
  subtotal: number;
};

export interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export type CartItem = CartItemProps;

export type CartState = {
  items: CartItem[];
};

export type CartAction =
  | { type: "ADD_ITEM"; id: string; name: string; price: number }
  | { type: "REMOVE_ITEM"; id: string }
  | { type: "UPDATE_QUANTITY"; id: string; quantity: number }
  | { type: "CLEAR_CART" };


