
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { HashLink as Link } from 'react-router-hash-link';



import './shiney.scss';

const Shiney = () => {
  return (
    <div className="verticalText font-orbitron uppercase tracking-widest">
      <Link to="/#contacts" className="button">
        <div className='flex justify-center items-center'>

        Hire Me <span className='text-sm sm:text-lg lg:text-3xl pt-2'><BsFillArrowDownCircleFill /></span>
        </div>
      </Link>
    </div>
  );
};

export default Shiney;
