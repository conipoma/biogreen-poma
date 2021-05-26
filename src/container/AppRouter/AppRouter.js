import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/NavBar/navBar';
import Header from '../../components/Header/Header';
import HomePageContainer from '../../Pages/HomePageContainer';
import ProductosPageContainer from '../../Pages/ProductosPageContainer';
import ProductItemContainer from '../../Pages/ProductItemContainer'
import ContactoPageContainer from '../../Pages/ContactoPageContainer';
import NosotrosPageContainer from '../../Pages/NosotrosPageContainer';
import Footer from '../../components/Footer/Footer';
import CartPageContainer from '../CartPage/CartPageContainer';
import CheckoutPageContainer from '../../Pages/CheckoutPageContainer'


export default function AppRouter() {
    return (
          <Router>
          <div className="App">
            <Navbar />
            <Footer />
          </div>
        <Switch>
          {/* Ruta home */}
          <Route exact path="/">
            <div className="sldoHome">
              <Header greeting="Somos bienestar para tu hogar" name="Essencial"/>  
            </div> 
              <HomePageContainer />
          </Route>
          {/* Ruta nosotros */}
          <Route path="/nosotros">
              <NosotrosPageContainer />
          </Route>
          {/* Ruta contacto */}
          <Route path="/contacto">
              <ContactoPageContainer />
          </Route>
          {/* Ruta de categorias */}
          <Route path="/category/:category">
              <ProductosPageContainer />
          </Route> 
          {/* Muestra de item/producto */}
          <Route path="/item/:id">
              <ProductItemContainer />
          </Route> 
          {/* Ruta de cart */}
          <Route path="/cart">
            <CartPageContainer />
          </Route>
          <Route path="/checkout">
            {/* <CheckoutPageContainer/> */}
          </Route>
          </Switch>
        </Router>
    );
}
