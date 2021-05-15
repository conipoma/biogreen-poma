import React from 'react';
import { Card, ListGroup } from 'bootstrap-4-react';
import './Item.css';
import { Button } from 'bootstrap-4-react/lib/components';
import { useHistory } from 'react-router-dom'
 
export default function ItemCard({title, image, id, description, price, category}){

  const history = useHistory();

    return (
      <Card className="cardItems" style={{ width: '18rem' }} >
        <Card.Image src={image} top/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup flush>
          <ListGroup.Item className="card-price">${price}</ListGroup.Item>
          <ListGroup.Item className="card-category">{category}</ListGroup.Item>
          <ListGroup.Item></ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button onClick={() => history.push(`/item/${id}`)} variant="primary">Ver producto</Button>
        </Card.Body>
      </Card>
    )
  }


