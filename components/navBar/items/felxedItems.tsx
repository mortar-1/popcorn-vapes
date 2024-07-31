import { Box } from '@mui/material';

import { NavBarProps } from '../navBar';
import ButtonLink from '@/components/navItems/buttonLink/buttonLink';

const FlexedItems = ({ items }: NavBarProps) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {items.map(({ title, href }, i) => (
          <ButtonLink key={title + i} title={title} href={href} />
        ))}
      </Box>
    </>
  );
};

export default FlexedItems;
