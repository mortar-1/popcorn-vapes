'use client'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import AccountMenu from './accountMenu';
import UnFlexed from './unFlexed';
import FlexedItems from './felxedItems';
import Logo from './logo';


export default function HeaderMenu() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Logo />
          <UnFlexed />
          <FlexedItems />
          <AccountMenu />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
