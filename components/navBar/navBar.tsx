'use client'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import AccountMenu from './accountMenu';
import UnFlexed from './unFlexed';
import CompanyAndLogo from './companyAndLogo';
import FlexedItems from './felxedItems';

export default function HeaderMenu() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <CompanyAndLogo />
          <UnFlexed />
          <FlexedItems />
          <AccountMenu />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
