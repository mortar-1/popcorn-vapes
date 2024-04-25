import { Typography, colors } from '@mui/material';
import Page from '../../../components/page/page';

const Orders = () => {
  return (
    <Typography
      color="primary"
      fontSize='large'
      // fontFamily="'georgia', times"
      variant="h5"
      noWrap
      component="h5"
      sx={{
        mr: 2,
        display: { md: 'flex' },
        fontWeight: 500,
        letterSpacing: '.1rem',
        textDecoration: 'none',
      }}
    >
      Orders
    </Typography>
  )
};

export default function OrdersPage() {
  return (
    <Page>
      <Orders />
    </Page>
  );
}
