import React, { useContext } from "react";
import './CartPageContainer.css';
import { Link } from 'react-router-dom';
import CartList from '../../components/CartList/CartList';
import Order from '../../components/Order/userOrder';
import { ButtonGroup, Button } from 'bootstrap-4-react';
import { CartContext } from '../../Context/CartContext/CartContext';

export default function CartPageContainer() {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <h2 className="cart-header">Carrito de Compras</h2>

            <div>
                <CartList />
            </div>

            { cart.length !== 0 &&
                <div className="button-buy">
                  {/* Modal */}
                  {/* Button trigger Modal */}
                  <Button className="buy-button" primary data-toggle="modal" data-target="#exampleModal">Comprar</Button>
                  <Order />
                </div>
            }
            <div className="continue-buy">
              <ButtonGroup size="lg" className="mb-2">
              <Button type="button" className="cart-button">
                  <Link to={`/category/Aromatizantes`} className="link-text">Continuar comprando</Link>
              </Button>
              </ButtonGroup>
            </div>
        </div>
    )
}
