import React from 'react';
import '../../styles/components/navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <div className="gunbase-logo-wrapper">
        <a className="gunbase-logo" href="/">GunBase</a>
      </div>
      <div className="links-wrapper">
        <a href="/kits">Kits</a>
        <a href="/guide">Guide</a>
        <a href="/profile">Profile</a>
        <a href="/lines">Lines</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
