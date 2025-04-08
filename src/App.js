import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Library from './pages/Library';
import AppNavbar from './pages/AppNavbar';

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
