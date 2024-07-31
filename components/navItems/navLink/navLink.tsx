import { NavItem } from '@/globals/types';
import { MenuItem } from '@mui/material';
import Link from 'next/link';

export const NavLink = ({ title, onClick, href }: NavItem) => {
  return (
    <MenuItem onClick={onClick}>
      <Link
        style={{
          textDecoration: 'none',
          color: '#000'
        }}
        href={href || '/'}
      >
        {title}
      </Link>
    </MenuItem>
  );
};
