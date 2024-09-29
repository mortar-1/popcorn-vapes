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

export interface NavItemProps {
  href?: Url;
  title: string;
  onClick?: () => void | MouseEvent;
}

export type NavItem = NavItemProps;

export type Name = string;
