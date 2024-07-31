import { Url } from 'next/dist/shared/lib/router/router';

export interface AccountProps {
  username: string;
  email: string;
  password: string;
  profilePictureSrc: string;
  info: string;
  id: string;
}

export type Account = AccountProps | undefined;

export type Age = number;

export interface NavItemProps {
  href?: Url;
  title: string;
  onClick?: () => void | MouseEvent;
}

export type NavItem = NavItemProps;

export type Name = string;
