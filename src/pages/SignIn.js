import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignIn.css';

function SignIn() {
  return (
    <Container className="d-flex align-items-center justify-content-center sign-in-container">
      <Card className="sign-in-card shadow">
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 sign-in-btn">
              Sign In
            </Button>

            <div className="text-center mt-3">
              <Link to="/forgot-password" className="link">
                Forgot Password?
              </Link>
            </div>

            <div className="text-center mt-2">
              Don't have an account?{' '}
              <Link to="/signup" className="link">
                Sign Up
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SignIn;
