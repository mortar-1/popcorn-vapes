import { Box } from '@mui/material';

import MOCK from '../mocks'
import { BtnItem } from './navItem';

const FlexedItems = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {MOCK.navItems.map(({ title, href }, i) => (
                    <BtnItem key={title + i} title={title} href={href} />
                ))}
            </Box>
        </>
    )
}

export default FlexedItems;