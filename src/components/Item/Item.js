import React from 'react';
import { Card, ListGroup } from 'bootstrap-4-react';
import ItemCounterContainer from '../../container/ItemCountContainer';
import './Item.css';

export default function ItemCard({title, image, description, price})
        {
    return (
      <Card className="cardItems" style={{ width: '18rem' }} >
        <Card.Image src={image} top/>
        <Card.Body>
          <Card.Title>{title}
            </Card.Title>
          <Card.Text>{description}
          </Card.Text>
        </Card.Body>
        <ListGroup flush>
          <ListGroup.Item>Formato 330ml con o sin Válvula/Gatillo.</ListGroup.Item>
          <ListGroup.Item>{price}</ListGroup.Item>
          <ListGroup.Item><ItemCounterContainer /></ListGroup.Item>


        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Ver producto</Card.Link>
        </Card.Body>
      </Card>
    )
  }


