import { IoMdPaperPlane } from 'react-icons/io';

import './contacts.scss';

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="flex flex-col items-center justify-center py-8 font-orbitron text-lavender lg:py-16"
    >
      <div>
        <h2
          id="/contacts"
          className="mb-8 text-4xl tracking-widest lg:mb-16 xl:text-7xl"
        >
          Contacts
        </h2>
      </div>
      <div className="flex w-full max-w-screen-xl items-center px-2 md:px-4">
        <form className="flex w-full flex-col items-center" action="">
          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="name" className="sr-only">
            enter your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="enter your full name"
            className="focus:border-headings focus:headings mb-2 w-full rounded-md bg-cream px-2 py-2 text-[0.65rem] tracking-widest text-lavender placeholder-platinum shadow-sm focus:outline-none focus:ring-1 sm:text-xs md:mb-4 md:px-4 md:py-4 md:text-sm lg:text-base"
          />

          <label htmlFor="email" className="sr-only">
            enter your email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter your email address"
            className="focus:border-headings focus:headings mb-2 w-full rounded-md bg-cream px-2 py-2 text-[0.65rem] tracking-widest text-lavender placeholder-platinum shadow-sm focus:outline-none focus:ring-1 sm:text-xs md:mb-4 md:px-4 md:py-4 md:text-sm lg:text-base"
          />

          <label htmlFor="message" className="sr-only">
            enter your message
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="let's work together... how can I help?"
            cols="30"
            rows="8"
            className="focus:border-headings focus:headings mb-2 w-full resize-none rounded-md bg-cream px-2 py-2 text-[0.65rem] tracking-widest text-lavender placeholder-platinum shadow-sm focus:outline-none focus:ring-1 sm:text-xs md:mb-4 md:px-4 md:py-4 md:text-sm lg:text-base"
          />
          <div className="flex h-[3.8em] items-center justify-center md:mt-4">
            <button
              className="button flex items-center justify-center text-[0.6rem] uppercase tracking-[0.5em] md:text-sm lg:text-lg"
              type="submit"
            >
              Send
              <IoMdPaperPlane className="ml-1 text-2xl" />
            </button>
          </div>
        </form>

        <div className="verticalText mb-[4.2rem] ml-2 flex h-[16.8em] w-[2.5em] flex-col items-center justify-center text-[0.8rem] tracking-widest md:mb-[6.15rem] md:ml-4 md:text-xl lg:ml-6 xl:ml-8">
          <svg className="h-full w-full ">
            <a
              className="flex items-start justify-start"
              href="tel:+12265015420"
            >
              <text x="50%" y="48%" dy=".35em" textAnchor="middle">
                226 501 5420
              </text>
            </a>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
