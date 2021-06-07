import React, {useState, useContext} from "react";
import { CartContext } from '../../Context/CartContext/CartContext';
import {useHistory} from 'react-router-dom';
import { Modal, Form } from 'bootstrap-4-react';
import { Button } from 'bootstrap-4-react';
import './userOrder.css';

const { createOrder } = require('../../Services/postService');

export default function OrderPageContainer() {
    const { cart, clearCart, totalPrice } = useContext(CartContext);
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);
    const [orderId, setOrderId] = useState('');
    const [finishBuy, setFinishBuy] = useState(true);

    let history = useHistory();

    function placeOrder(event) {
        event.preventDefault()
        const buyer = {
            name: name,
            email: email,
            phone: phone
        };
        createOrder(buyer, cart, totalPrice)
            .then(id => setOrderId(id));
            clearCart();
            
            setFinishBuy(false);
            history.push('/checkout')
    }
    
    return(
        <div>
    { cart.lenght !== 0 &&
        <>
            <Modal id="exampleModal" >
            <Modal.Dialog centered>
                <Modal.Content>
                    <Modal.Header>
                        <Modal.Title>Ingrese sus datos para poder comprar</Modal.Title>
                        <Modal.Close>
                            <span aria-hidden="true">&times;</span>
                        </Modal.Close>
                    </Modal.Header>
                    <Modal.Body>
                    { finishBuy ? 
                        <Form >
                            <Form.Group>
                                <label htmlFor="user-name">Nombre y apellido</label>
                                <Form.Input type="text" id="user-name" onChange={evt => setName(evt.target.value)} className="form-control mb-3" placeholder="Ingrese su nombre" required></Form.Input>
                                <Form.Text text="muted"></Form.Text>
                            </Form.Group>
                        
                            <Form.Group>
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <Form.Input id="exampleInputEmail1"  onChange={evt => setEmail(evt.target.value)} className="form-control mb-3" type="text" placeholder="Ingrese su email" required></Form.Input>
                                <Form.Text text="muted"></Form.Text>
                            </Form.Group>

                            <Form.Group>
                                <label htmlFor="phone-number">Teléfono</label>
                                <Form.Input id="phone-number" onChange={evt => setPhone(evt.target.value)} className="form-control mb-3" type="number" placeholder="Ingrese su teléfono de contacto" required></Form.Input>
                                <Form.Text text="muted" ></Form.Text>
                            </Form.Group>
                        
                            <Button secondary data-dismiss="modal" disabled={!(name && email && phone)} onClick={placeOrder} type="submit" className="btn btn-primary mt-3 mb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Confirmar Pedido</Button>
                        </Form> : <h1>Compra finalizada</h1>   
                    }
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal.Content>
            </Modal.Dialog>
            </Modal> 
        </>
    }
    </div>
    )
}
