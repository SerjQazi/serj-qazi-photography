import './navigation.scss';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = () => {
  let [active, setActive] = useState(false);
  // let [normal, setNormal] = useState(true);

  function handleClick() {
    setActive((active) => !active);
  }

  let navActive = active ? ' active' : '';

  return (
    <ul className={`navigation${navActive} font-orbitron flex tracking-widest`}>
      <li className="">
        <NavLink className='nav-link mx-6 my-2 border-b-2 border-b-button-logo hover:border-b-purple' to="/portfolio">Portfolio</NavLink>
      </li>
      <li className="">
        <Link className='nav-link mx-6 my-2 border-b-2 border-b-button-logo hover:border-b-purple' to="#about">About</Link>
      </li>
      <li className="">
        <Link className='nav-link mx-6 my-2 border-b-2 border-b-button-logo hover:border-b-purple' to="#contacts">Contacts</Link>
      </li>
      <span className="toggleMenu" onClick={handleClick}></span>
    </ul>
  );
};

export default Navigation;
