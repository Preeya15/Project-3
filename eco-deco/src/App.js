import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import {Navbar, Products, Cart} from './components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
// import Commerce from '@chec/commerce.js';


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState ([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add (productId, quantity);
    
    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity )=> {
    const { cart } = await commerce.cart.update (productId, {quantity});

    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);

  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty ();

    setCart(cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);


  return (
    <Router>
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar totalItems={cart.total_items}/>
      <Switch>
        <Route exact path="/">
          <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
        </Route>
        <Route exact path="/cart">
          <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
        </Route>
        {/* <Route path="/checkout" exact>
          <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
        </Route> */}
      </Switch>
    </div>
  </Router>
  );
};

export default App;
