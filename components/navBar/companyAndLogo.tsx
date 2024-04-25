import { Typography } from '@mui/material'
import Logo from './logo'
import Link from 'next/link';

const CompanyAndLogo = () => {
    return (
        <>
            <Link
                style={{
                    textDecoration: 'none',
                    color: '#000'
                }}
                href='/'>
                <Typography
                    color="white"
                    fontSize='large'
                    variant="h6"
                    noWrap
                    component="h6"
                    sx={{
                        mr: 2,
                        ml: 2,
                        display: { xs: 'none', md: 'flex' },
                        letterSpacing: '.1rem',
                        textDecoration: 'none',
                    }}
                >
                    Popcorn Vapes
                </Typography>
            </Link>
            <Logo src='boy_vaper.png'></Logo>
        </>
    )
}

export default CompanyAndLogo;