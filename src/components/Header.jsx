import { Link } from 'react-router-dom';

import Navigation from './Navigation';
import Shiney from './buttons/shiney/Shiney';
import SocialButton from './buttons/Social/SocialButton';

const Header = () => {
  return (
    <div className="bg-cream flex justify-center pb-8 pt-16">
      <div className=" flex w-full max-w-screen-xl flex-nowrap items-center justify-between">
        <SocialButton />

        <div>
          <Link
            to="/"
            className="flex flex-col items-center justify-center align-middle"
          >
            <h1 className="text-signature-blue font-signature text-8xl">
              Serj Qazi
            </h1>
            <h2 className="text-faded-gray font-neon ml-5 mt-1 text-xl tracking-[.89em]">
              PHOTOGRAPHY
            </h2>
          </Link>
          <div className="mt-8">
            <Navigation />
          </div>
        </div>

        <Shiney />
      </div>
    </div>
  );
};

export default Header;
