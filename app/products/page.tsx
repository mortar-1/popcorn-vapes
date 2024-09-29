'use client';
import { Grid } from '@mui/material';

import Page from '../../components/page/page';
import Product from '@/components/product/product';

const Products = () => {
  return (
    <>
      <Grid container>
        <Product imgSrc="/vape_device.jpg" />
      </Grid>
    </>
  );
};

export default function ProductsPage() {
  return (
    <Page>
      <Products />
    </Page>
  );
}
