import React from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  return (
    <Container className="signup-container d-flex justify-content-center align-items-center">
      <Card className="signup-card shadow">
        <Card.Body>
          <h2 className="text-center mb-4">Create an Account</h2>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" required />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="I agree to the terms & conditions"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 signup-btn">
              Create Account
            </Button>

            <p className="text-center mt-3">
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SignUp;
