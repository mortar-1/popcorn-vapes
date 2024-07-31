import { NavItem } from '@/globals/types';
import { Button } from '@mui/material';
import Link from 'next/link';

export const ButtonLink = ({ title, onClick, href }: NavItem) => {
  return (
    <Link
      style={{
        textDecoration: 'none',
        color: '#000'
      }}
      href={href || '/'}
    >
      <Button
        onClick={onClick}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        {title}
      </Button>
    </Link>
  );
};

export default ButtonLink;
