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
    <ul className={`navigation${navActive} font-orbitron flex items-center tracking-widest`}>
      <li className="pb-1">
        <NavLink
          className="nav-link pb-0.5 text-[0.7rem] text-xs border-b-button-logo hover:border-b-purple mx-2 md:mx-6 my-2 border-b-2"
          to="/portfolio"
        >
          Portfolio
        </NavLink>
      </li>
      <li className="pb-1">
        <Link
          className="nav-link pb-0.5 text-[0.7rem] text-xs border-b-button-logo hover:border-b-purple mx-2 md:mx-6 my-2 border-b-2"
          to="/#about"
        >
          About
        </Link>
      </li>
      <li className="pb-1">
        <Link
          className="nav-link pb-0.5 text-[0.7rem] text-xs border-b-button-logo hover:border-b-purple mx-2 md:mx-6 my-2 border-b-2"
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
