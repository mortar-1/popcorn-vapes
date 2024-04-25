import { Typography } from '@mui/material';
import Page from '../../components/page/page';

const CheckOut = () => {
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
      Check out
    </Typography>
  )
};

export default function CheckOutPage() {
  return (
    <Page>
      <CheckOut />
    </Page>
  );
}
