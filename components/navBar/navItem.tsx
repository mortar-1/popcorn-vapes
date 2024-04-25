import { Button, MenuItem } from '@mui/material';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { MouseEvent } from 'react';

export interface NavItemProps {
    href?: Url;
    title: string;
    onClick?: () => void | MouseEvent
}

export type NavItem = NavItemProps;

export const NavItemElement = ({ title, onClick, href }: NavItem) => {
    return (
        <MenuItem onClick={onClick}>
            <Link
                style={{
                    textDecoration: 'none',
                    color: '#000'
                }}
                href={href || '/'}>
                {title}
            </Link>
        </MenuItem>
    )
}

export const BtnItem = ({ title, onClick, href }: NavItem) => {
    return (
        <Link
            style={{
                textDecoration: 'none',
                color: '#000'
            }}
            href={href || '/'}>
            <Button
                onClick={onClick}
                sx={{ my: 2, color: 'white', display: 'block' }}
            >
                {title}
            </Button>
        </Link>
    )
};

