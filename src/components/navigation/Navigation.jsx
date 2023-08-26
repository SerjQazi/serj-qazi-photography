import './navigation.scss';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = () => {
  let [active, setActive] = useState(false);

  function handleClick() {
    setActive((active) => !active);
  }

  let navActive = active ? ' active' : '';

  return (
    <ul className={`navigation${navActive} font-orbitron flex tracking-widest`}>
      <li className="">
        <NavLink
          className="nav-link border-b-button-logo hover:border-b-purple mx-6 my-2 border-b-2"
          to="/portfolio"
        >
          Portfolio
        </NavLink>
      </li>
      <li className="">
        <Link
          className="nav-link border-b-button-logo hover:border-b-purple mx-6 my-2 border-b-2"
          to="/#about"
        >
          About
        </Link>
      </li>
      <li className="">
        <Link
          className="nav-link border-b-button-logo hover:border-b-purple mx-6 my-2 border-b-2"
          to="/#contacts"
        >
          Contacts
        </Link>
      </li>
      <span className="toggleMenu" onClick={handleClick}></span>
    </ul>
  );
};

export default Navigation;
