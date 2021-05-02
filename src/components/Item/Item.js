import React from 'react';
import { Card, ListGroup } from 'bootstrap-4-react';
import ItemCountContainer from '../../container/ItemCountContainer';
import './Item.css';
import { Button } from 'bootstrap-4-react/lib/components';
import { useHistory } from 'react-router-dom'
import ItemCounterContainer from '../../container/ItemCountContainer';
 
export default function ItemCard({title, image, id}){
  // {title, image, description, price, id, categoryId}
  let history = useHistory();

    return (
      <Card className="cardItems" style={{ width: '18rem' }} >
        <Card.Image src={image} top/>
        <Card.Body>
          <Card.Title>{title}
            </Card.Title>
          {/* <Card.Text>{description}</Card.Text> */}
        </Card.Body>
        {/* <ListGroup flush>
          <ListGroup.Item>{price}</ListGroup.Item>
          <ListGroup.Item>{categoryId}</ListGroup.Item>
          <ListGroup.Item><ItemCounterContainer /></ListGroup.Item>
        </ListGroup> */}
        <Card.Body>
          <Button onClick={()=>history.push(`/item/${id}`)} variant="primary">Ver producto</Button>
          {/* <Card.Link >Ver producto</Card.Link> */}
        <ItemCounterContainer />
        </Card.Body>
      </Card>
    )
  }


