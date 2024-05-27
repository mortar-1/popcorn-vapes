import { Avatar, SxProps, Tooltip, colors } from '@mui/material';
import Link from 'next/link';

export interface LogoProps {
    tooltip?: string;
    href?: string;
    src?: string;
    customSx?: SxProps;
};

export const Logo = ({ tooltip, href, src, customSx }: LogoProps) => {

    const shortLogoSx = {
        width: 'auto',
        display: {
            xs: 'flex', sm: 'none'
        },
    }

    const fullLogoSx = {
        width: 'auto',
        display: {
            xs: 'none', sm: 'flex'
        },
    }

    return (
        <Tooltip title={tooltip || 'Home'}>
            <Link href={href || '/'}>
                <Avatar alt="short logo" src='/logo1_short_cropped.png' sx={customSx || shortLogoSx} variant='square' />
                <Avatar alt="full logo" src='/logo1.png' sx={customSx || fullLogoSx} variant='square' />
            </Link>
        </Tooltip>
    )
}

export default Logo;