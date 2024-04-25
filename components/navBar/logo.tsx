import { Avatar, SxProps, Tooltip, colors } from '@mui/material';
import Link from 'next/link';

export interface LogoProps {
    tooltip?: string;
    href?: string;
    src?: string;
    sx?: SxProps
};

export const Logo = ({ tooltip, href, src, sx }: LogoProps) => {
    const defaultSx = {
        width: 56, height: 56, background: colors.blueGrey[900]
    }

    return (
        <Tooltip title={tooltip || 'Home'}>
            <Link href={href || '/'}>
                <Avatar alt="Popcorn Vapes" src={src} sx={sx || defaultSx} />
            </Link>
        </Tooltip>
    )
}

export default Logo;