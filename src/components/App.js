import React from "react";
import NavBar from './NavBar';
import Products from '../container/Products'
import Cart from '../container/Cart'
import Orders from '../container/Orders'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/cart" component={Cart}/>
        <Route path="/orders" component={Orders}/> 
        <Route path="/" component={Products}/> 
      </Switch>
    </>
  );
}

export default App;
