import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.RemoveEventListener('scroll');
    };
  }, []);

  return (
    <React.Fragment>
      <div className="Navbar">
        <div className={`Navbar_menu container ${show && 'nav_black'}`}>
          <h1 className="Navbar_logo">
            <Link to="/" className="Navbar_link">
              Movie Search
            </Link>
          </h1>
          <div className="Navbar_search">
            <Link to="/search" className="Navbar_link">
              <FaSearch />
            </Link>
          </div>
          <ul className="Navbar_linksContainer">
            <li className="Navbar_linkItem">
              <Link to='/' className="Navbar_link">Home</Link>
            </li>
            <li className="Navbar_linkItem">
              <Link to='/movies' className="Navbar_link">Movies</Link>
            </li>
            <li className="Navbar_linkItem">
              <Link to='/about' className="Navbar_link">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
