import Header from '../../Header';
import Footer from '../../Footer';
import ScrollTop from '../../buttons/scrollTop/ScrollTop';
import data from '../../../../public/images/landscapes/images.json';

const Landscapes = () => {
  return (
    <>
      <ScrollTop />
      <Header />
      <section className="my-8 flex items-center justify-center md:my-16">
        <div className="flex w-screen max-w-screen-xl">
          <div className="ml-2 flex items-start justify-center p-0 md:ml-4 md:w-24">
            <h2 className="verticalText mb-0 font-orbitron text-4xl uppercase tracking-widest text-lavender md:mb-8 lg:mb-0 xl:text-7xl">
              Landscapes
            </h2>
          </div>

          <div className="mx-4 flex w-screen max-w-screen-xl flex-col items-center justify-start md:mx-16">
            {data.landscape.map((item, index) => (
              <div
                key={index}
                className="mb-2 w-full sm:mb-4 lg:w-3/4 xl:w-3/4"
              >
                <img
                  className=""
                  loading="lazy"
                  src={item.link}
                  alt={item.text}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Landscapes;
