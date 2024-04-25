import { Container } from '@mui/material';
import { ReactNode } from 'react';
import NavBar from '@/components/navBar/navBar'
import { Metadata } from 'next'
import Providers from '@/globals/contexts/providers';


export interface RootProps {
  children?: ReactNode;
}

export const metadata: Metadata = {
  title: 'Popcorn Vapes',
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Container maxWidth='lg'>
            <NavBar />
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
