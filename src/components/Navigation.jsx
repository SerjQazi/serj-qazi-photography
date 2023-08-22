import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = () => {
  return (
    <ul className="font-orbitron flex tracking-widest">
      <li className="mx-6 my-2">
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li className="mx-6 my-2">
        <Link to="#about">About</Link>
      </li>
      <li className="mx-6 my-2">
        <Link to="#contacts">Contacts</Link>
      </li>
    </ul>
  );
};

export default Navigation;
