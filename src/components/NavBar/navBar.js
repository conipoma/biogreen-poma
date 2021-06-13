import React from 'react';
import { Navbar, Nav, Collapse, Dropdown } from 'bootstrap-4-react';
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget.js'
import { useHistory } from 'react-router-dom'

export default function NavBar() {

    let history = useHistory();

    return (
      <Navbar expand="md" light bg="light">
        <Navbar.Brand onClick={()=>history.push('/')}>Essencial</Navbar.Brand>
        <Navbar.Toggler target="#navbarNav" />
        <Collapse navbar id="navbarNav">
          <Navbar.Nav>
            <Nav.ItemLink onClick={()=>history.push('/nosotros')}>Sobre nosotros</Nav.ItemLink>
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Productos</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item onClick={()=>history.push('/category/Aromatizantes')}>Aromatizantes</Dropdown.Item>
                <Dropdown.Item onClick={()=>history.push('/category/Aceites')}>Aceites</Dropdown.Item>
                <Dropdown.Item onClick={()=>history.push('/category/Difusores')}>Difusores</Dropdown.Item>
                <Dropdown.Item onClick={()=>history.push('/category/Limpieza')}>Limpieza Biodegradable</Dropdown.Item>
                <Dropdown.Item onClick={()=>history.push('/category/Bebé')}>Bebé</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
            <Nav.ItemLink onClick={()=>history.push('/contacto')}>Contacto</Nav.ItemLink>   
          </Navbar.Nav>
        </Collapse>
        <Navbar.Brand className="cart-widget"><CartWidget /></Navbar.Brand>
      </Navbar>
    )
}
  

