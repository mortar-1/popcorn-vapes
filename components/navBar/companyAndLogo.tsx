import { Typography } from '@mui/material'
import Logo from './logo'

const CompanyAndLogo = () => {
    return (
        <>
            <Typography
                color="white"
                fontSize='large'
                // fontFamily="'georgia', times"
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
            <Logo src='boy_vaper.png'></Logo>
        </>
    )
}

export default CompanyAndLogo;