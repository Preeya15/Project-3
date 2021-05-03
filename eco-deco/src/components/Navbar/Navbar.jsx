import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { ClassNames } from '@emotion/react';

import logo from '../../assets/images/eco-logo.jpeg';
import useStyles from './styles';



const Navbar = ( {totalItems} ) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" className={ClassNames.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Eco-Deco Celebrations" height="25px" className={ClassNames.image}/>
                        Eco-Deco Celebrations
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                                </Badge>  
                        </IconButton>

                    </div>
                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Navbar
