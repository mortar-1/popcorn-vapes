import { Typography } from '@mui/material';
import Page from '../components/page/page';

const Home = () => {
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
      Home
    </Typography>
  )
};

export default function HomePage() {
  return (
    <Page>
      <Home />
    </Page>
  );
}
