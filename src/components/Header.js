import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <span className="siteTitle">Girlin' in Berlin</span>

      <nav>
        <Link to="/" className="light spacedLink">Home</Link>
        <Link to="/albums" className="light spacedLink">Albums</Link>
      </nav>
    </header>
  );
}

export default Header;
