import React from "react";
import './CartPageContainer.css';
import {Link} from 'react-router-dom';
import CartList from '../../components/CartList/CartList';
import Order from '../../components/Order/userOrder';
import { ButtonGroup, Button } from 'bootstrap-4-react';


export default function CartPageContainer() {

    return (
        <div>
          <h2 className="cart-header">Carrito de Compras</h2>
          <div>
              <CartList />
          </div>
          <div className="continue-buy">
          <ButtonGroup size="lg" className="mb-2">
          <Button type="button" className="cart-button">
              <Link to={`/category/Aromatizantes`} className="link-text">Continuar comprando</Link>
          </Button>
            <Order/>
          </ButtonGroup>
          </div>
          <div>
          </div>
        </div>
    )
}
