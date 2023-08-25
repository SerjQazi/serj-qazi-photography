import images from '../../public/images/index.js';

const FilmStrip = () => {
  return (
    <section className="flex flex-col items-center py-16">
      <div className="StripContainer grid p-4 max-w-screen-xl grid-cols-4 gap-x-2">
        <div className="FilmStrip">
          <div className="mb-2">
            <img className="hover:cursor-pointer" src={images.photo1} alt="" />
          </div>
          <div className="mb-2">
            <img className="hover:cursor-pointer" src={images.photo2} alt="" />
          </div>
          <div className="mb-2">
            <img className="hover:cursor-pointer" src={images.photo3} alt="" />
          </div>
          <div className="mb-2">
            <img className="hover:cursor-pointer" src={images.photo4} alt="" />
          </div>
        </div>

        <div className="FilmStrip">
          <div className="mb-2">
            <img className="hover:cursor-pointer" src={images.photo5} alt="" />
          </div>
          <div className="mb-2">
            <img className="hover:cursor-pointer" src={images.photo6} alt="" />
          </div>
          <div className="mb-2">
            <img className="hover:cursor-pointer" src={images.photo7} alt="" />
          </div>
          <div className="mb-2">
            <img className="hover:cursor-pointer" src={images.photo8} alt="" />
          </div>
        </div>

        <div className="FilmStrip">
          <div className="mb-2">
            <img className="hover:cursor-pointer" src={images.photo9} alt="" />
          </div>
          <div className="mb-2">
            <img className="hover:cursor-pointer" src={images.photo10} alt="" />
          </div>
          <div className="mb-2">
            <img className="hover:cursor-pointer" src={images.photo11} alt="" />
          </div>
          <div className="mb-2">
            <img className="hover:cursor-pointer" src={images.photo12} alt="" />
          </div>
        </div>

        <div className="FilmStrip">
          <div className="mb-2">
            <img className="hover:cursor-pointer" src={images.photo13} alt="" />
          </div>
          <div className="mb-2">
            <img className="hover:cursor-pointer" src={images.photo14} alt="" />
          </div>
          <div className="mb-2">
            <img className="hover:cursor-pointer" src={images.photo15} alt="" />
          </div>
          <div className="mb-2">
            <img className="hover:cursor-pointer" src={images.photo16} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmStrip;
