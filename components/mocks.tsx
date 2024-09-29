import { NavItem, UserProps } from '@/globals/types';

export const users: UserProps[] = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
    imgUrl: '/account1.jpg'
  }
];

export const navItems: NavItem[] = [
  {
    title: 'Products',
    href: '/products'
  },
  {
    title: 'Check Out',
    href: '/checkout'
  }
];

export default {
  users,
  navItems
};
