import images from '../../public/images/index.js';

const FilmStrip = () => {
  return (
    <section className="flex flex-col items-center py-16">
      <div className="StripContainer grid max-w-screen-xl grid-cols-4 gap-x-2 p-4">
        <div className="FilmStrip">
          <div className="mb-2">
            <img
              className="hover:cursor-pointer"
              src={images.photo1}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="mb-2">
            <img
              className="hover:cursor-pointer"
              src={images.photo2}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="mb-2">
            <img
              className="hover:cursor-pointer"
              src={images.photo3}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="mb-2">
            <img
              className="hover:cursor-pointer"
              src={images.photo4}
              loading="lazy"
              alt=""
            />
          </div>
        </div>

        <div className="FilmStrip">
          <div className="mb-2">
            <img
              className="hover:cursor-pointer"
              src={images.photo5}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="mb-2">
            <img
              className="hover:cursor-pointer"
              src={images.photo6}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="mb-2">
            <img
              className="hover:cursor-pointer"
              src={images.photo7}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="mb-2">
            <img
              className="hover:cursor-pointer"
              src={images.photo8}
              loading="lazy"
              alt=""
            />
          </div>
        </div>

        <div className="FilmStrip">
          <div className="mb-2">
            <img
              className="hover:cursor-pointer"
              src={images.photo9}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="mb-2">
            <img
              className="hover:cursor-pointer"
              src={images.photo10}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="mb-2">
            <img
              className="hover:cursor-pointer"
              src={images.photo11}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="mb-2">
            <img
              className="hover:cursor-pointer"
              src={images.photo12}
              loading="lazy"
              alt=""
            />
          </div>
        </div>

        <div className="FilmStrip">
          <div className="mb-2">
            <img
              className="hover:cursor-pointer"
              src={images.photo13}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="mb-2">
            <img
              className="hover:cursor-pointer"
              src={images.photo14}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="mb-2">
            <img
              className="hover:cursor-pointer"
              src={images.photo15}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="mb-2">
            <img
              className="hover:cursor-pointer"
              src={images.photo16}
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmStrip;
