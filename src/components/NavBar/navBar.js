import React, { Component } from 'react';
import { Navbar, Nav, Collapse, Dropdown } from 'bootstrap-4-react';
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget.js'

export default class NavBar extends Component {
    render() {
      return (
        <Navbar expand="lg" light bg="light">
          <Navbar.Brand href="#">Essencial</Navbar.Brand>
          
          <Navbar.Toggler target="#navbarNav" />
          <Collapse navbar id="navbarNav">
            <Navbar.Nav>
              <Nav.ItemLink href="#">Sobre nosotros</Nav.ItemLink>
              <Nav.ItemLink href="#">Contacto</Nav.ItemLink>              
              <Nav.Item dropdown>
                <Nav.Link dropdownToggle>Productos</Nav.Link>
                <Dropdown.Menu>
                  <Dropdown.Item>Aromatizantes</Dropdown.Item>
                  <Dropdown.Item>Aceites</Dropdown.Item>
                  <Dropdown.Item>Difusores</Dropdown.Item>
                  <Dropdown.Item>Inciensos</Dropdown.Item>
                  <Dropdown.Item>Humidificadores</Dropdown.Item>
                  <Dropdown.Item>Productos de limpieza</Dropdown.Item>
                  <Dropdown.Item>Jabones</Dropdown.Item>
                </Dropdown.Menu>
              </Nav.Item>
            </Navbar.Nav>
          </Collapse>
          <Navbar.Brand className="cart-widget"><CartWidget /></Navbar.Brand>
        </Navbar>
      )
    }
  }

