import React, {useContext} from "react";
import CartWidget from './Icon/cartWidget.svg'
import { CartContext } from '../../Context/CartContext/CartContext';
import {Link} from 'react-router-dom';
import './CartWidget.css';

export default function MostrarCartWidget(){
    const { cart, totalItems } = useContext(CartContext);
    
    return(
        <div className="navbar-cart">
            { cart.length === 0 ? 
                <Link to={`/cart`}>
                    <img src={CartWidget} className="cart-icon" width="40" height="40" alt="Cart" loading="lazy"/>
                </Link>
                :
                <Link to={`/cart`}>
                    <img src={CartWidget} className="cart-icon" width="40" height="40" alt="Cart" loading="lazy"/>
                    { totalItems ? <span className="total-item">{totalItems}</span> : null}
                </Link>
            }
        </div>
    )
}


