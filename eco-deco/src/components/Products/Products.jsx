import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// const products = [
    // {id: 1, name: 'bunting', description:'Eco-friendly jute thread and paper bunting.', price:'$5', image: './assets/images/images.png'},
    // {id: 2, name: 'fabric bunting', description:'Eco-friendly fabric bunting.', price:'$10', image: './assets/images/fabric bunting.jpeg' },
// ]

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles ();
    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify ="center" spacing={4}>
        {products.map((product) => (
            <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
        </Grid>
         ))}
         </Grid>
    </main>

        
    );
 }

export default Products;

