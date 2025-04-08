import React from 'react';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-1">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Pridally
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/library">Library</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
