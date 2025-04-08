import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Library.css';

const resources = [
  { title: 'Books', img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794', link: '#' },
  { title: 'Articles', img: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d', link: '#' },
  { title: 'Journals', img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f', link: '#' },
  { title: 'Videos', img: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71', link: '#' },
  { title: 'Presentations', img: 'https://images.unsplash.com/photo-1552581234-26160f608093', link: '#' },
  { title: 'eBooks', img: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19', link: '#' },
];

function Library() {
  return (
    <Container className="library-page my-5">
      <h1 className="library-heading text-center mb-5">Library Resources</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {resources.map((res, idx) => (
          <Col key={idx}>
            <Card className="resource-card h-100 shadow-sm">
              <Card.Img variant="top" src={res.img} alt={res.title} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{res.title}</Card.Title>
                <Button variant="primary" href={res.link} className="mt-auto">
                  Explore {res.title}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Library;
