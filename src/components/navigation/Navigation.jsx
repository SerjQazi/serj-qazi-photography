import './navigation.scss';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navigation = () => {
  let [active, setActive] = useState(false);

  function handleClick() {
    setActive((active) => !active);
  }

  let navActive = active ? ' active' : '';

  return (
    <ul className={`navigation${navActive} flex font-orbitron tracking-widest`}>
      <li className="">
        <NavLink
          className="nav-link mx-6 my-2 border-b-2 border-b-button-logo hover:border-b-purple"
          to="/portfolio"
        >
          Portfolio
        </NavLink>
      </li>
      <li className="">
        <Link
          className="nav-link mx-6 my-2 border-b-2 border-b-button-logo hover:border-b-purple"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          About
        </Link>
      </li>
      <li className="">
        <Link
          className="nav-link mx-6 my-2 border-b-2 border-b-button-logo hover:border-b-purple"
          to="contacts"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Contacts
        </Link>
      </li>
      <span className="toggleMenu" onClick={handleClick}></span>
    </ul>
  );
};

export default Navigation;
