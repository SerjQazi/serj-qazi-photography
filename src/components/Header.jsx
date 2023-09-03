import { Link } from 'react-router-dom';

import Shiney from './buttons/shiney/Shiney';
import SocialButton from './buttons/social/SocialButton.jsx';
import Navigation from '../components/navigation/Navigation.jsx';

const Header = () => {
  return (
    <div className="flex justify-center bg-cream pb-4 lg:pb-8 pt-8 md:pt-12 lg:pt-16">
      <div className=" flex w-full max-w-screen-xl flex-nowrap items-center justify-center md:justify-between px-2 sm:px-4">
        <div>
          <SocialButton />
        </div>

        <div className='mx-auto'>
          <Link
            to="/"
            className="flex flex-col items-center justify-center align-middle"
          >
            <h1 className="font-signature text-5xl sm:text-6xl md:text-7xl text-lavender lg:text-8xl">
              Serj Qazi
            </h1>
            <h2 className="ml-5 mt-1 font-neon text-[0.6rem] sm:text-xs md:text-sm tracking-[.89em] text-purple lg:text-xl">
              PHOTOGRAPHY
            </h2>
          </Link>
          <div className="flex h-14 md:h-20 items-center justify-center">
            <Navigation />
          </div>
        </div>

        <Shiney />
      </div>
    </div>
  );
};

export default Header;
