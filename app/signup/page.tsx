import { Typography, colors } from '@mui/material';

import Page from '../../components/page/page';

const Products = () => {
  return (
    <Typography
      variant="h5"
      noWrap
      component="h5"
      sx={{
        mr: 2,
        display: { md: 'flex' },
        fontFamily: "'georgia', times",
        fontWeight: 500,
        letterSpacing: '.1rem',
        color: colors.amber[700],
        textDecoration: 'none',
      }}
    >
      Sign up
    </Typography>
  )
};

export default function ProductsPage() {
  return (
    <Page>
      <Products />
    </Page>
  );
}
