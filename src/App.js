import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar/navBar';
import Header from './components/Header/Header';
import ItemListContainer from './container/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import HomePageContainer from './container/Pages/HomePageContainer';
import ProductosPageContainer from './container/Pages/ProductosPageContainer';
import ContactoPageContainer from './container/Pages/ContactoPageContainer';
import NosotrosPageContainer from './container/Pages/NosotrosPageContainer';
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
      </Route>

  {/* Muestra todos los productos */}
      <Route exact path="/productos">
          <ProductosPageContainer />
          {/* <ItemListContainer /> */}
          {/* <ItemDetailContainer /> */}
      </Route>

  {/* Muestra un producto particular */}
      {/* <Route exact path="/productos">
          <ItemDetailContainer />
          <ProductosPageContainer />
      </Route> */}

      <Route path="/item/:id">
          <ItemDetailContainer />
          {/* <ProductosPageContainer /> */}
          {/* <ItemListContainer /> */}

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
