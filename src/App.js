import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import {Navbar, Products, Cart} from './components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
// import Axios from "axios";
// import Commerce from '@chec/commerce.js';


const App = () => {
  // const [registerUsername, setRegisterUsername] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [loginUsername, setLoginUsername] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");
  // const [data, setData] = useState(null);
  
  // const register = () => {
  //   Axios({
  //     method: "POST",
  //     data: {
  //       username: registerUsername,
  //       password: registerPassword,
  //     },
  //     withCredentials: true,
  //     url: "http://localhost:4000/register",
  //   }).then((res) => console.log(res));
  // };
  // const login = () => {
  //   Axios({
  //     method: "POST",
  //     data: {
  //       username: loginUsername,
  //       password: loginPassword,
  //     },
  //     withCredentials: true,
  //     url: "http://localhost:4000/login",
  //   }).then((res) => console.log(res));
  // };
  // const getUser = () => {
  //   Axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:4000/user",
  //   }).then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   });
  // };

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
      <div className="App">
      {/* <div>
      <h1>Register</h1>
      <input
        placeholder="username"
        onChange={(e) => setRegisterUsername(e.target.value)}
      />
      <input
        placeholder="password"
        onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <button onClick={register}>Submit</button>
    </div>

    <div>
      <h1>Login</h1>
      <input
        placeholder="username"
        onChange={(e) => setLoginUsername(e.target.value)}
      />
      <input
        placeholder="password"
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <button onClick={login}>Submit</button>
    </div>

    <div>
      <h1>Get User</h1>
      <button onClick={getUser}>Submit</button>
      {data ? <h1>Welcome Back {data.username}</h1> : null}
    </div>
  </div> */}

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
  </div>
  </Router>
  );
};

export default App;
