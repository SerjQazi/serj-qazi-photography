import { HashLink as Link } from 'react-router-hash-link';

import './shiney.scss';

const Shiney = () => {
  return (
    <div className="font-orbitron uppercase tracking-widest">
      <Link to="/#contacts" className="button">
        Hire Me!
      </Link>
    </div>
  );
};

export default Shiney;
