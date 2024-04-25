'use client'
import { Grid, Typography, colors } from '@mui/material';
import Page from '../../components/page/page';
import Product, { ProductProps } from '@/components/product/product';


const Products = () => {
  return (
    <>
      <Grid container>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Grid>
    </>
  )
};

export default function ProductsPage() {
  return (
    <Page>
      <Products />
    </Page>
  );
}
