import { Account, NavItem } from '@/globals/types';

export const account: Account = {
  username: 'CornPopper',
  email: 'corn.popper@email.com',
  password: '123',
  profilePictureSrc: 'account1.jpg',
  id: 'mock_account_01',
  info: 'A true popcorn vaper'
};

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
  account,
  navItems
};
