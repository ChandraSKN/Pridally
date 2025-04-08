import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-4 fw-bold">Welcome to Pridally</h1>
              <p className="lead my-4">
                Connect with top healthcare providers and gain personalized insights into your health.
              </p>
              <Button variant="primary" size="lg" href="/signup">Get Started</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop" 
                alt="About Pridally" 
                className="img-fluid rounded shadow-sm" 
              />
            </Col>
            <Col lg={6}>
              <h2 className="mb-4">About Pridally</h2>
              <p>
                We simplify access to healthcare by connecting you directly with trusted providers and offering tailored resources. Our goal is to empower you with the tools to manage your health confidently.
              </p>
              <Button variant="outline-primary" size="md" href="/we-offer">Learn More</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-light">
  <Container>
    <Row>
      <Col lg={4} className="text-center mb-4">
        <div className="puzzle-piece">
          <div className="feature-icon mb-3">
            <i className="fas fa-user-md"></i>
          </div>
          <h4>Trusted Providers</h4>
          <p>Connect with experienced healthcare professionals.</p>
        </div>
      </Col>
      <Col lg={4} className="text-center mb-4">
        <div className="puzzle-piece">
          <div className="feature-icon mb-3">
            <i className="fas fa-notes-medical"></i>
          </div>
          <h4>Comprehensive Care</h4>
          <p>Access a range of services, from diagnosis to recovery.</p>
        </div>
      </Col>
      <Col lg={4} className="text-center mb-4">
        <div className="puzzle-piece">
          <div className="feature-icon mb-3">
            <i className="fas fa-heartbeat"></i>
          </div>
          <h4>Personalized Solutions</h4>
          <p>Receive tailored healthcare that meets your unique needs.</p>
        </div>
      </Col>
    </Row>
  </Container>
</section>

    </div>
  );
}

export default Home;
