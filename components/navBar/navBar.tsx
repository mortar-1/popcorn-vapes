'use client';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import AccountMenu from './accountMenu';
import UnFlexedItems from './items/unFlexedItems';
import FlexedItems from './items/felxedItems';
import Logo from './logo';
import { NavItem } from '@/globals/types';

export interface NavBarProps {
  items: NavItem[];
}

export default function NavBar({ items }: NavBarProps) {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Logo />
          <UnFlexedItems items={items} />
          <FlexedItems items={items} />
          <AccountMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
