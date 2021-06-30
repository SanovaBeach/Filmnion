import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  function closeMobile() {
    setClick(false)
  }
  function handleClick() {
    setClick(!click)
  }

  function showButton() {
    if(window.innerWidth <= 768) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(()=> {
    showButton()
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <React.Fragment>
      <div className="Navbar">
        <div className={`Navbar_menu container ${show && 'nav_black'}`}>
          <h1 className="Navbar_logo" onClick={closeMobile}>
            <Link to="/" className="Navbar_link">
              Filmion
            </Link>
          </h1>
          <div className="Navbar_mobileIcon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`Navbar_linksContainer ${click && 'show-nav'} `}
            onClick={closeMobile}
          >
            <li className="Navbar_linkItem">
              <Link to='/' className="Navbar_link">Home</Link>
            </li>
            <li className="Navbar_linkItem">
              <Link to='/movie' className="Navbar_link">Movie</Link>
            </li>
             <li className="Navbar_linkItem">
              <Link to='/tv' className="Navbar_link">TV</Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
