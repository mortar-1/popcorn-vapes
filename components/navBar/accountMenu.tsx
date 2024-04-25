'use client'
import { useAccountContext } from '@/globals/contexts/Account';
import { Box, IconButton, Menu } from '@mui/material'
import { MouseEvent, useState } from 'react';
import { NavItemElement, NavItem } from './navItem';

import ProfilePic from './profilePic';
import MOCK from '../mocks';

export default function AccountMenu() {

    const { account, setAccount } = useAccountContext();
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenAccountSettings = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseAccountSettings = () => {
        setAnchorElUser(null);
    };

    const login = () => {
        setAccount(MOCK.account);
        handleCloseAccountSettings();
    }

    const logout = () => {
        setAccount(undefined);
        handleCloseAccountSettings();
    }

    const accountSettings: NavItem[] = [
        {
            title: 'Account',
            href: `/${account?.id}/account`,
            onClick: handleCloseAccountSettings,
        },
        {
            title: 'Orders',
            href: `/${account?.id}/orders`,
            onClick: handleCloseAccountSettings,
        },
        {
            title: 'Logout',
            onClick: logout,
        }
    ];

    const loginOptions: NavItem[] = [
        {
            title: 'Login',
            onClick: login,
        },
        {
            title: 'Sign up',
            href: '/signup',
            onClick: handleCloseAccountSettings,
        },
    ];
    const mockItems = account ? accountSettings : loginOptions;

    return (
        <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenAccountSettings} sx={{ p: 0 }}>
                <ProfilePic />
            </IconButton>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseAccountSettings}
            >
                {
                    mockItems.map(
                        ({ title, onClick, href }, i) =>
                            <NavItemElement key={title + i} title={title} onClick={onClick} href={href} />
                    )
                }
            </Menu>
        </Box>

    )

}
