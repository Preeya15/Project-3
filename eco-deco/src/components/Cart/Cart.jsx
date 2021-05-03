import React from 'react'
import { container, Typography, Button, Grid } from '@material-ui/core'
// import { ClassNames } from '@emotion/react'
import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ( { cart }) => {
    // const isEmpty = !cart.line_items.length;
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">Your cart is empty, start adding some items!</Typography>
    );

    const FilledCart = () => (
        <>
    
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}> 
                        <CartItem item={item} />
                    </Grid>
                    ))}
            </Grid> 
            <div className ={classes.cardDetails}>
                <Typography variant="h4">
                            Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>

                </div>
            </div>
            </>
    )
    if(!cart.line_items) return 'Loading...';
    return (
       <container>
           <div className={classes.toolbar} />
           <Typography className={classes.title} variant="h3"gutterBottom>Your Shopping Cart</Typography>
           { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
       </container>
    )
}

export default Cart