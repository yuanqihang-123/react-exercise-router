import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, NavLink,Switch,Redirect } from 'react-router-dom';
import Home from './Home.js';
import My_profile from './My_profile.js';
import About from './About_us.js';
import Products from './Products.js';
import Product from './Product.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="div_nav">
          <div className="div_link"><NavLink className="nav_link_body" activeStyle={{
            textDecoration: "underline"
          }} to='/home' >Home</NavLink></div>
          <div className="div_link"><NavLink activeStyle={{
            textDecoration: "underline"
          }} className="nav_link_body" to='/my_profile' >My profile</NavLink></div>
          <div className="div_link"><NavLink activeStyle={{
            textDecoration: "underline"
          }} className="nav_link_body" to='/about_us' >About us</NavLink></div>
          <div className="div_link"><NavLink activeStyle={{
            textDecoration: "underline"
          }} className="nav_link_body" to='/products' >Products</NavLink></div>
        </div>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/my_profile' component={My_profile} />
        <Route exact path='/about_us' component={About} />
        <Route exact path='/products' component={Products} />
        <Route path='/products/:id' component={Product} />
        <Route path='/goods' render={
            ()=>(<Redirect to="/products"/>)} />
        <Route render={
            ()=>(<Redirect to="/home"/>)}
        />
        </Switch>
      </BrowserRouter>


    );
  }
}

export default App;
