import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './WeOffer.css';

const features = [
  { title: 'Find Doctor', img: 'https://images.unsplash.com/photo-1622902046717-73c245d53e03', link: '#' },
  { title: 'Calendar', img: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e', link: '#' },
  { title: 'Drug Database', img: 'https://images.unsplash.com/photo-1580281657526-9093a4c93892', link: '#' },
  { title: 'Dashboard', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71', link: '/dashboard' },
  { title: 'Emergency', img: 'https://images.unsplash.com/photo-1576765607924-3f7b8410a787', link: '#' },
];

function WeOffer() {
  return (
    <Container className="weoffer-page my-5">
      <h1 className="weoffer-heading text-center mb-5">What We Offer</h1>
      <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
        {features.map((feature, idx) => (
          <Col key={idx}>
            <Card className="feature-card h-100 shadow-sm">
              <Card.Img variant="top" src={`${feature.img}?w=600&h=400&fit=crop`} alt={feature.title} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{feature.title}</Card.Title>
                <Button variant="primary" href={feature.link} className="mt-auto">
                  Explore {feature.title}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default WeOffer;
