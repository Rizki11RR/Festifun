import React from 'react';
import { Card } from 'react-bootstrap';

const Content = ({ imagePath, title, description, price }) => {
  return (
    <Card style={{ width: '18rem',BorderRadius:'20px' }}>
      <Card.Img variant="top" src={imagePath} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Text>
        <b style={{ marginLeft: '10px' }}>{price}</b>
      </Card.Text>
    </Card>
  );
};

export default Content;
