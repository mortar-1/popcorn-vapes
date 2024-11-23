import { Box, Button } from '@mui/material';

import { NavBarProps } from '../navBar';
import ButtonLink from '@/components/navItems/buttonLink/buttonLink';
import { useThemeContext } from '@/globals/contexts/Theme';

const FlexedItems = ({ items }: NavBarProps) => {
  const [mode, setMode] = useThemeContext();

  const handleModeClick = () => setMode(mode === 'light' ? 'dark' : 'light');

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {items.map(({ title, href }, i) => (
          <ButtonLink key={title + i} title={title} href={href} />
        ))}
        <Button
          onClick={handleModeClick}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {mode === 'light' ? 'dark mode' : 'light mode'}
        </Button>
      </Box>
    </>
  );
};

export default FlexedItems;
