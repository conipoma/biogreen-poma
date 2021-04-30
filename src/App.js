import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar/navBar';
import Header from './components/Header/Header';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import HomePageContainer from './container/HomePage/HomePageContainer';
import ProductosPageContainer from './container/ProductosPage/ProductosPageContainer';
import ContactoPageContainer from './container/ContactoPage/ContactoPageContainer';
import NosotrosPageContainer from './container/NosotrosPage/NosotrosPageContainer';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Footer />
      </div>

    <Switch>
      <Route exact path="/">
        <div className="sldoHome">
          <Header greeting="Somos bienestar para tu hogar" name="Essencial"/>  
        </div> 
          <HomePageContainer />
          <ItemListContainer />
      </Route>

  {/* Muestra todos los productos */}
      <Route path="/category">
          <ProductosPageContainer />
          <ItemListContainer />
          {/* <ItemDetailContainer /> */}
      </Route>

  {/* Muestra un producto particular */}
      <Route exact path="/category/:categoryId">
          <ItemDetailContainer />
          <ProductosPageContainer />
          <ItemDetailContainer />
      </Route>

      <Route path="/nosotros">
          <NosotrosPageContainer />
      </Route>

      <Route path="/contacto">
          <ContactoPageContainer />
      </Route>
        
        


    </Switch>
      </Router>
  );
}

export default App;
