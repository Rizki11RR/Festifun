// Lay.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'; // Import Button from react-bootstrap
import Filter from './Filter';
import Content from './Content';
import './Lay.scss';

const Lay = () => {
  const categoriesData = [
    { id: 1, name: 'Technology' },
    { id: 2, name: 'Fashion' },
    { id: 3, name: 'Sports' },
  ];
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const handleCategoryChange = (updatedCategories) => {
    setSelectedCategories(updatedCategories);
    console.log('Selected Categories:', updatedCategories);
  };

  const card1 = {
    imagePath: 'https://raw.githubusercontent.com/Magnum-Opus-Festifun/punyabima/main/aset/poster%20(12).png',
    title: 'Card 1',
    description: 'Description for Card 1',
    price: '$100',
  };
  const card2 = {
    imagePath: 'https://raw.githubusercontent.com/Magnum-Opus-Festifun/punyabima/main/aset/poster%20(12).png',
    title: 'Card 2',
    description: 'Description for Card 2',
    price: '$100',
  };
  const card3 = {
    imagePath: 'https://raw.githubusercontent.com/Magnum-Opus-Festifun/punyabima/main/aset/poster%20(12).png',
    title: 'Card 3',
    description: 'Description for Card 3',
    price: '$100',
  };

  return (
    <div className="lay-container">
      <Container>
        <Row>
          <Col sm={3} className="sidebar">
            <h1>Event List</h1>
            <Filter categories={categoriesData} handleCategoryChange={handleCategoryChange} />
          </Col>
          <Col sm={9} className="main-content">
            <div className="event-section">
              <h1>Event mendatang</h1>
              <div className="event-cards">
                <Content {...card1} />
                <Content {...card2} />
                <Content {...card3} />
              </div>
              <hr />
            </div>
             <div className="event-section">
              <h1>Event mendatang</h1>
              <div className="event-cards">
                <Content {...card1} />
                <Content {...card2} />
                <Content {...card3} />
              </div>
              <hr />
            </div>
             <div className="event-section">
              <h1>Event mendatang</h1>
              <div className="event-cards">
                <Content {...card1} />
                <Content {...card2} />
                <Content {...card3} />
              </div>
              <hr />
            </div>
             <div className="event-section">
              <h1>Event mendatang</h1>
              <div className="event-cards">
                <Content {...card1} />
                <Content {...card2} />
                <Content {...card3} />
              </div>
              <hr />
            </div>
          </Col>
        </Row>
      </Container>
      
      <div style={{ display: 'flex', backgroundColor: '#007BFF',width:'fit-content' ,position:'relative',left:'47%'}}>
        <Button style={{ BorderRadius:'10vh' }} variant="primary" href="#">Selengkapnya</Button>
      </div>
    </div>
  );
};

export default Lay;
