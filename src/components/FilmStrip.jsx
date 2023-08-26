import data from '../../public/images/images.json';
const FilmStrip = () => {
  console.log(data);

  return (
    <section className="flex flex-col items-center py-16">
      <div className="StripContainer grid max-w-screen-xl grid-cols-4 gap-x-2 p-4">
        <div className="filmStrip">
          {data.stripOne.map((item, index) => (
            <div key={index} className="mb-2">
              <img
                className="hover:cursor-pointer"
                loading="lazy"
                src={item.link}
                alt={item.text}
              />
            </div>
          ))}
        </div>
        <div className="filmStrip">
          {data.stripTwo.map((item, index) => (
            <div key={index} className="mb-2">
              <img
                className="hover:cursor-pointer"
                loading="lazy"
                src={item.link}
                alt={item.text}
              />
            </div>
          ))}
        </div>
        <div className="filmStrip">
          {data.stripThree.map((item, index) => (
            <div key={index} className="mb-2">
              <img
                className="hover:cursor-pointer"
                loading="lazy"
                src={item.link}
                alt={item.text}
              />
            </div>
          ))}
        </div>
        <div className="filmStrip">
          {data.stripFour.map((item, index) => (
            <div key={index} className="mb-2">
              <img
                className="hover:cursor-pointer"
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
