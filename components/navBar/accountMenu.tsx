'use client';

import { Box, IconButton, Menu } from '@mui/material';
import { MouseEvent, useState } from 'react';

import { useUserContext } from '@/globals/contexts/User';
import { NavLink } from '../navItems/navLink/navLink';
import ProfilePic from './profilePic';
import { NavItem } from '@/globals/types';

export default function AccountMenu() {
  const [account, setAccount] = useUserContext();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenAccountMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseAccountMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    setAccount(undefined);
    handleCloseAccountMenu();
  };

  const accountSettings: NavItem[] = [
    {
      title: 'User',
      href: `/${account?.id}/user`,
      onClick: handleCloseAccountMenu
    },
    {
      title: 'Orders',
      href: `/${account?.id}/orders`,
      onClick: handleCloseAccountMenu
    },
    {
      title: 'Logout',
      onClick: logout
    }
  ];

  const loginOptions: NavItem[] = [
    {
      title: 'Login',
      href: '/login',
      onClick: handleCloseAccountMenu
    },
    {
      title: 'Sign up',
      href: '/signup',
      onClick: handleCloseAccountMenu
    }
  ];
  const items = account ? accountSettings : loginOptions;

  return (
    <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenAccountMenu} sx={{ p: 0 }}>
        <ProfilePic />
      </IconButton>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseAccountMenu}
      >
        {items.map(({ title, onClick, href }, i) => (
          <NavLink
            key={title + i}
            title={title}
            onClick={onClick}
            href={href}
          />
        ))}
      </Menu>
    </Box>
  );
}
