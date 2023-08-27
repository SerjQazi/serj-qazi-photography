import { HashLink as Link } from 'react-router-hash-link';

import './shiney.scss';

const Shiney = () => {
  return (
    <div className="hidden font-orbitron uppercase tracking-widest md:block">
      <Link to="/#contacts" className="button">
        Hire Me!
      </Link>
    </div>
  );
};

export default Shiney;
