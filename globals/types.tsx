import { PaletteMode } from '@mui/material';
import { Url } from 'next/dist/shared/lib/router/router';

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

export interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export type CartItem = CartItemProps;

export interface ProductProps {
  id: string;
  name: string;
  subtext?: string;
  price: number;
  description?: string;
  imgSrc?: string;
}

export type Product = ProductProps;
