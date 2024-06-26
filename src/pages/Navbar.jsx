import React, { useState } from 'react';
import './Navbarc.css'; 

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">PRODUCT-EVAL</div>
        {/* <ul className="nav-links">
          <li><a href="" >Home</a></li>
          
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
