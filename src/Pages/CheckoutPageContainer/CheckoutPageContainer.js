import React, { Link } from 'react';
// import { Button } from 'bootstrap-4-react';
import '../CheckoutPageContainer/CheckoutPageContainer.css'
import check from '../../Assets/image/check.png';

export default function CheckoutPageContainer(){

    return(
        
        <div className="checkOut">
            <div className="check-icon"> <img src={check}   width="80" height="80" alt="check"/></div>
            <h2>Su pedido ha sido confirmado!</h2>
            <p>En breve estaremos en contacto para coordinar la entrega y el pago.</p>
            
            {/* <div>
                <button type="button" className="check-button">
                <Link to={`/`} className="link-text">Continuar comprando</Link>
                </button>            
            </div> */}

            </div>

       
    )



}