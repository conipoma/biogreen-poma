import React from 'react';
import { Form, Button } from 'bootstrap-4-react';
import './ContactoPageContainer.css'

export default function ContactoPageContainer() {

    return (
        <div className="container-fluid contact-form">
            <Form>
                <Form.Group>
                    <label htmlFor="exampleControlsInput1">Nombre</label>
                    <Form.Input placeholder="Ingresa tu nombre" />
                </Form.Group>
                <Form.Group>
                    <label htmlFor="exampleControlsInput2">Apellido</label>
                    <Form.Input placeholder="Ingresa tu Apellido" />
                </Form.Group>
                <Form.Group>
                    <label htmlFor="exampleControlsInput3">Email</label>
                    <Form.Input type="email" id="email" placeholder="Ingresa tu email" />
                </Form.Group>
                <Form.Group>
                    <label htmlFor="exampleControlsTextarea1">Mensaje</label>
                    <Form.Textarea id="exampleControlsTextarea1" rows="3"></Form.Textarea>
                </Form.Group>
                <Button className="send" primary type="submit">Enviar</Button>
            </Form>

            <p className="thanks">Gracias por comunicarte con nosotros!</p>
        </div>
    )
  }
