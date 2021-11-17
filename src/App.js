import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Modal from "./components/Modal";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/SignUp" component={SignUp} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
