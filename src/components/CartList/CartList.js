import React, {useContext} from "react";
import Cart from "../Cart/Cart";
import { CartContext } from '../../Context/CartContext/CartContext';
import { Button, BSpan } from 'bootstrap-4-react';

import './CartList.css'


export default function CartList() {

    const { cart, clearCart, totalPrice } = useContext(CartContext);
    console.log("Cart List");

    const cartOrder = ["Aromatizante", "Aceites", "Bebé", "Difusores", "Limpieza"]
    const sortedCart = Object.keys(cart).map(key => cart[key]);
    sortedCart.sort((a, b) => cartOrder.indexOf(a.category) - cartOrder.indexOf(b.category));

    return (

        <div className="container-lg">
            <React.Fragment>
                <div className="container-lg table-cart">
                <BSpan className="options" align="baseline">Categoría</BSpan>{' '}
                <BSpan className="options" align="baseline">Item</BSpan>{' '}
                <BSpan className="options" align="baseline">Cantidad</BSpan>{' '}
                <BSpan className="options" align="baseline">Eliminar</BSpan>{' '}
                <BSpan className="options" align="baseline">Total</BSpan>{' '}
                </div>
            </React.Fragment>

            <table className="table">
                <tbody>
                    {sortedCart.map(item => (
                        <Cart key={item.id} itemSale={item} />
                    ))}
                </tbody>
                <tfoot>
                    { cart.length === 0 ? 
                        <tr id="fter-cart">
                            <th className="empty-cart" scope="row" colSpan="5">Tu carrito esta vacío, comienza a comprar!</th>
                        </tr>
                        :
                        <tr id="footer-carrito">
                            <td></td>
                            <td></td>
                            <td>
                                <Button type="button" className="clear-carrito" id="vaciar-carrito" onClick={clearCart}>
                                    Vaciar Carrito
                                </Button>
                            </td>
                            <td className="font-weight-bold">Total a pagar</td>
                            <td className="font-weight-bold">$ <span>{totalPrice}</span></td>
                        </tr>
                    }
                </tfoot>
            </table>
        </div>
        );
    }