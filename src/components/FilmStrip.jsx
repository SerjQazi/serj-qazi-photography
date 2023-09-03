import data from '../../public/images/home-page/images.json';

const FilmStrip = () => {
  return (
    <section className="flex flex-col items-center py-8 lg:py-16">
      <div className="StripContainer grid w-screen max-w-screen-xl grid-cols-4 gap-x-2 px-2 md:px-4">
        <div className="filmStrip col-span-4 md:col-span-2 lg:col-span-1">
          {data.stripOne.map((item, index) => (
            <div key={index} className="mb-2">
              <img
                className="w-full hover:cursor-pointer"
                loading="lazy"
                src={item.link}
                alt={item.text}
              />
            </div>
          ))}
        </div>
        <div className="filmStrip col-span-4 md:col-span-2 lg:col-span-1">
          {data.stripTwo.map((item, index) => (
            <div key={index} className="mb-2">
              <img
                className="w-full hover:cursor-pointer"
                loading="lazy"
                src={item.link}
                alt={item.text}
              />
            </div>
          ))}
        </div>
        <div className="filmStrip col-span-4 md:col-span-2 lg:col-span-1">
          {data.stripThree.map((item, index) => (
            <div key={index} className="mb-2">
              <img
                className="w-full hover:cursor-pointer"
                loading="lazy"
                src={item.link}
                alt={item.text}
              />
            </div>
          ))}
        </div>
        <div className="filmStrip col-span-4 md:col-span-2 lg:col-span-1">
          {data.stripFour.map((item, index) => (
            <div key={index} className="mb-2 last:mb-0">
              <img
                className="w-full hover:cursor-pointer"
                loading="lazy"
                src={item.link}
                alt={item.text}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmStrip;
