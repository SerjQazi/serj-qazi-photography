import Header from '../../Header';
import Footer from '../../Footer';
import ScrollTop from '../../buttons/scrollTop/ScrollTop';
import data from '../../../../public/images/images.json';

const Portraits = () => {
  return (
    <>
      <ScrollTop />
      <Header />
      <section className="my-16 flex items-center justify-center">
        <div className="flex w-screen max-w-screen-xl">
          <div className="p-0 ml-4 flex w-24 items-start justify-center">
            <h2 className="verticalText mb-0 font-orbitron text-4xl uppercase tracking-widest text-lavender md:mb-8 lg:mb-0 xl:text-7xl">
              Portraits
            </h2>
          </div>

          <div className="imageContainer w-screen max-w-screen-xl mx-16">
            <div className="mb-4 h-10 w-full bg-slate-500"></div>
            {data.stripOne.map((item, index) => (
              <div key={index} className="mb-4 border-2 border-red-500">
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

export default Portraits;
