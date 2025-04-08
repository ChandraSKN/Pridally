import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero-section d-flex align-items-center">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold">Welcome to Pridally</h1>
              <p className="lead my-4">
                Your trusted portal for connecting with healthcare providers and services. 
                Discover personalized solutions and manage your health efficiently.
              </p>
              <Button variant="primary" size="lg" href="/signup">Get Started</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-section py-5 bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="mb-4">About Pridally</h2>
              <p>
                Pridally simplifies access to healthcare by connecting you directly with providers and offering tailored health resources to suit your needs. Ensuring reliable, efficient, and effective care whenever required.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
