import { Container } from '@mui/material';
import { ReactNode } from 'react';
import { Metadata } from 'next';

import Providers from '@/globals/contexts/providers';
import NavBar from '@/components/navBar/navBar';
import { navItems } from '@/components/mocks';

export interface RootProps {
  children?: ReactNode;
}

export const metadata: Metadata = {
  title: 'Popcorn Vapes'
};

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Container maxWidth="lg">
            <NavBar items={navItems} />
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
