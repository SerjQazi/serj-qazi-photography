import { IoMdPaperPlane } from 'react-icons/io';

import './contacts.scss';

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="font-orbitron text-lavender flex flex-col items-center justify-center py-8 lg:py-16"
    >
      <div>
        <h2 id="/contacts" className="mb-8 lg:mb-16 text-4xl xl:text-7xl tracking-widest">
          Contacts
        </h2>
      </div>
      <div className="flex w-full px-2 md:px-4 max-w-screen-xl items-center">
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
            className="text-lavender bg-cream placeholder-platinum focus:border-headings focus:headings mb-2 md:mb-4 w-full rounded-md px-2 md:px-4 py-2 md:py-4 text-[0.65rem] sm:text-xs md:text-sm lg:text-base tracking-widest shadow-sm focus:outline-none focus:ring-1"
          />

          <label htmlFor="email" className="sr-only">
            enter your email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter your email address"
            className="text-lavender bg-cream placeholder-platinum focus:border-headings focus:headings mb-2 md:mb-4 w-full rounded-md px-2 md:px-4 py-2 md:py-4 text-[0.65rem] sm:text-xs md:text-sm lg:text-base tracking-widest shadow-sm focus:outline-none focus:ring-1"
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
            className="text-lavender bg-cream placeholder-platinum focus:border-headings focus:headings mb-2 md:mb-4 w-full resize-none rounded-md px-2 md:px-4 py-2 md:py-4 text-[0.65rem] sm:text-xs md:text-sm lg:text-base tracking-widest shadow-sm focus:outline-none focus:ring-1"
          />
          <div className="md:mt-4 flex h-[3.8em] items-center justify-center">
            <button
              className="button flex items-center justify-center text-[0.6rem] md:text-sm lg:text-lg uppercase tracking-[0.5em]"
              type="submit"
            >
              Send
              <IoMdPaperPlane className="ml-1 text-2xl" />
            </button>
          </div>
        </form>

        <div className="verticalText mb-[4.2rem] md:mb-[6.15rem] ml-2 md:ml-4 lg:ml-6 xl:ml-8 flex h-[16.8em] w-[2.5em] flex-col items-center justify-center text-[0.8rem] md:text-xl tracking-widest">
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
