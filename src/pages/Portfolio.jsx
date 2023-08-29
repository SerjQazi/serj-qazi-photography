import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <>
      <Header />

      <section className="px-4 font-orbitron text-base uppercase text-white sm:text-3xl lg:text-6xl  ">
        <ul className="mx-auto max-w-screen-xl">
          <li className="bg-portraits mb-9 mt-14 bg-cover bg-center tracking-[0.5em] shadow-lg shadow-slate-500 duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl hover:shadow-slate-500 sm:mt-10">
            <Link
              to="/portraits"
              className="flex w-full items-center justify-end py-16 sm:py-20 lg:items-start lg:py-28"
            >
              <h2 className="">Portraits</h2>
            </Link>
          </li>

          <li className="bg-landscapes mb-9 bg-cover bg-center tracking-[0.5em] shadow-lg shadow-slate-500 duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl hover:shadow-slate-500">
            <Link className="flex w-full items-center justify-start py-16 sm:py-20 lg:items-start lg:py-28">
              <h2 className="ml-2 lg:ml-6">Landscapes</h2>
            </Link>
          </li>

          <li className="bg-engagements mb-14 bg-cover bg-center tracking-[0.5em] shadow-lg shadow-slate-500 duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl hover:shadow-slate-500 sm:mb-10">
            <Link className="lg:py-22 flex w-full flex-col items-end justify-center py-10 sm:py-14 lg:items-end">
              <h2 className="mt-5">Engagements</h2>
              <h3 className="mr-4 mt-1 text-right text-xs tracking-[0.5em] sm:mr-8 sm:text-lg lg:mr-28 lg:mt-8 lg:text-3xl">
                coming soon
              </h3>
            </Link>
          </li>
        </ul>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;
