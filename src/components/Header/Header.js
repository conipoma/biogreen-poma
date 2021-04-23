import React from 'react';
import './Header.css';
import { Container, Row, Col } from 'bootstrap-4-react';

export default function Header(props){
    
      return (
          <div className="divGral">
              <Container fluid className="helloHome">
                  <div className="sldoHome">
                      <h3>{props.greeting}</h3>
                      <h2>Todo va a estar bien...</h2>
                  </div>
              </Container>
          </div>
        
      )
}
