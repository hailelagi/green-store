import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Details from "./components/Details";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Profile from "./components/Profile";


class App extends React.Component {
  render() {
    return (
       <React.Fragment>
           <Navbar/>

           <Switch>
               <Route exact path="/" component={HomePage}/>
               <Route path="/details" component={Details}/>
               <Route path="/cart" component={Cart}/>
               <Route path="/signup" component={SignUp}/>
               <Route path="/signin" component={SignIn}/>
               <Route path="/products" component={ProductList}/>
               <Route path="/profile" component={Profile}/>
               <Route component={Default}/>
           </Switch>
       </React.Fragment>
    );
  }
}

export default App;
