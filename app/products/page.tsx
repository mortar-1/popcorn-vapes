'use client';
import { Grid2 } from '@mui/material';

import Page from '../../components/page/page';
import  Product from '@/components/product/product';

const Products = () => {
  return (
    <>
      <Grid2 container>
        <Product id="1" name="Vaporizer Plus" subtext='One vape to rule them all!' price={95} description='If you are looking for a vape that is adjustable in just about every possible way, this is your choise!' imgSrc="/vape_device.jpg" />
      </Grid2>
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
