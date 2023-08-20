import { Link } from 'react-router-dom';

import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { BiPhoneCall } from 'react-icons/bi';

const Header = () => {
  return (
    <div className="bg-cream flex justify-center py-16">
      <div className=" flex w-full max-w-screen-xl flex-nowrap items-center justify-between">
        <ul className="text-faded-gray">
          <li className="p-2 text-4xl">
            <Link
              to="https://www.facebook.com/serjqaziphotograhpy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </Link>
          </li>
          <li className="p-2 text-4xl">
            <Link
              to="https://www.instagram.com/serjqazi_photography/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </Link>
          </li>
          <li className="p-2 text-4xl">
            <Link
              to="https://www.youtube.com/@serjqaziphotography"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube />
            </Link>
          </li>
        </ul>

        <div className="flex flex-col items-center justify-center align-middle">
          <h1 className="text-signature-blue font-signature text-8xl">
            Serj Qazi
          </h1>
          <h2 className="text-faded-gray font-neon ml-5 mt-1 text-xl tracking-[.89em]">
            PHOTOGRAPHY
          </h2>
        </div>

        <button className=" h-[3.6em] w-[12.5em] border-2 border-slate-400">
          <Link className="font-orbitron text-2xl -tracking-[-0.24em]">
            <div className="flex items-center justify-center">
              Hire Me!
              <div className='text-3xl text-signature-blue'>
                <BiPhoneCall />
              </div>
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
