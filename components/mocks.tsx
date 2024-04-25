import { AccountProps } from '@/globals/globalTypes';
import { NavItem } from './navBar/navItem';

const account: AccountProps = {
    username: 'CornPopper',
    password: '123',
    profilePictureSrc: 'account1.jpg',
    id: 'mock_account_01',
    info: 'A true popcorn vaper'
};

const navItems: NavItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
    {
        title: 'Check Out',
        href: '/checkout'
    }
];

const mocks = {
    account,
    navItems
};

export default mocks;