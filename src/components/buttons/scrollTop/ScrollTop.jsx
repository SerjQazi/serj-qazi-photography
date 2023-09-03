import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTop = () => {
  const [top, setTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1000) {
        setTop(true);
      } else {
        setTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {top && (
        <button
          onClick={scrollUp}
          className="pointer fixed bottom-5 right-5 z-10 h-14 w-14 rounded-full bg-lavender p-2 text-button-logo shadow-lg shadow-slate-500 duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl hover:shadow-slate-700"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollTop;
